// メンバーの一覧データ（五十音順・結成時1期生）
// avatar: 表示イニシャル / color: アバターの色 / role: 自由記入欄（推しポイントなどに書き換えてOK）
const memberData = [
  {name:"青木 宙帆", kana:"あおき ゆうほ", role:"MEMBER", color:"#155A96"},
  {name:"秋田 莉杏", kana:"あきた りあん", role:"MEMBER", color:"#3E8FCB"},
  {name:"安納 蒼衣", kana:"あんの あおい", role:"MEMBER", color:"#5FA5D6"},
  {name:"伊藤 ゆず", kana:"いとう ゆず", role:"MEMBER", color:"#7FB8E0"},
  {name:"今井 優希", kana:"いまい ゆき", role:"MEMBER", color:"#2C7BB5"},
  {name:"岩本 理瑚", kana:"いわもと りこ", role:"MEMBER", color:"#155A96"},
  {name:"金澤 亜美", kana:"かなざわ あみ", role:"MEMBER", color:"#3E8FCB"},
  {name:"木下 藍", kana:"きのした あい", role:"MEMBER", color:"#5FA5D6"},
  {name:"工藤 唯愛", kana:"くどう ゆあ", role:"MEMBER", color:"#7FB8E0"},
  {name:"塩釜 菜那", kana:"しおがま なな", role:"初代リーダー", color:"#2C7BB5"},
  {name:"杉浦 英恋", kana:"すぎうら えれん", role:"MEMBER", color:"#155A96"},
  {name:"須永 心海", kana:"すなが みうな", role:"MEMBER", color:"#3E8FCB"},
  {name:"西森 杏弥", kana:"にしもり あや", role:"MEMBER", color:"#5FA5D6"},
  {name:"萩原 心花", kana:"はぎわら ここか", role:"MEMBER", color:"#7FB8E0"},
  {name:"長谷川 稀未", kana:"はせがわ ひとみ", role:"MEMBER", color:"#2C7BB5"},
  {name:"早﨑 すずき", kana:"はやさき すずき", role:"MEMBER", color:"#155A96"},
  {name:"宮腰 友里亜", kana:"みやこし ゆりあ", role:"MEMBER", color:"#3E8FCB"},
  {name:"持永 真奈", kana:"もちなが まな", role:"MEMBER", color:"#5FA5D6"},
  {name:"八重樫 美伊咲", kana:"やえがし みいさ", role:"MEMBER", color:"#7FB8E0"},
  {name:"八木 仁愛", kana:"やぎ とあ", role:"初代センター", color:"#2C7BB5"},
  {name:"柳堀 花怜", kana:"やなぎほり かれん", role:"MEMBER", color:"#155A96"},
  {name:"山口 結杏", kana:"やまぐち ゆあん", role:"MEMBER", color:"#3E8FCB"},
  {name:"吉本 此那", kana:"よしもと ここな", role:"MEMBER", color:"#5FA5D6"},
];

const grid = document.getElementById('memberGrid');
memberData.forEach(m=>{
  const card = document.createElement('div');
  card.className = 'member-card';
  const initial = m.name.trim().charAt(0);
  card.innerHTML = `
    <div class="avatar" style="background:${m.color}">${initial}</div>
    <h4>${m.name}</h4>
    <div class="kana">${m.kana}</div>
    <span class="role">${m.role}</span>
  `;
  grid.appendChild(card);
});
