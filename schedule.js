// schedule.csv（date, time, title, url の4列）を読み込んで表示する共通スクリプト
// - index.html の #todayList には「今日の日付」の行だけを表示
// - schedule.html の #scheduleList には全件を日付順で表示
// time・url は空欄でも構いません。

function splitCSVLine(line) {
  const result = [];
  let cur = '', inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; } else inQuotes = false;
      } else cur += ch;
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      result.push(cur); cur = '';
    } else cur += ch;
  }
  result.push(cur);
  return result;
}

function parseScheduleCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = splitCSVLine(lines[0]).map(h => h.trim());
  return lines.slice(1).filter(l => l.trim().length).map(line => {
    const cols = splitCSVLine(line);
    const row = {};
    headers.forEach((h, i) => { row[h] = (cols[i] || '').trim(); });
    return row;
  });
}

function scheduleItemHTML(item) {
  const titleHTML = item.url
    ? `<a href="${item.url}" target="_blank" rel="noopener">${item.title}</a>`
    : item.title;
  return `
    <div class="schedule-item">
      <div class="schedule-date">${item.date}${item.time ? '　' + item.time : ''}</div>
      <div class="schedule-title">${titleHTML}</div>
    </div>
  `;
}

fetch('schedule.csv')
  .then(res => res.text())
  .then(text => {
    const items = parseScheduleCSV(text)
      .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

    const todayList = document.getElementById('todayList');
    if (todayList) {
      const todayStr = new Date().toLocaleDateString('sv-SE');
      const todayTag = document.getElementById('todayTag');
      if (todayTag) todayTag.textContent = `TODAY — ${todayStr.replace(/-/g, '.')}`;
      const todayItems = items.filter(i => i.date === todayStr);
      todayList.innerHTML = todayItems.length
        ? todayItems.map(scheduleItemHTML).join('')
        : '<p class="schedule-empty">本日の予定はありません。<a href="schedule.html">スケジュール一覧はこちら</a>。</p>';
    }

    const scheduleList = document.getElementById('scheduleList');
    if (scheduleList) {
      scheduleList.innerHTML = items.length
        ? items.map(scheduleItemHTML).join('')
        : '<p class="schedule-empty">予定はまだ登録されていません。</p>';
    }
  });
