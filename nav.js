// スマホ表示用：ハンバーガーメニューの開閉
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});

// ロゴの「Overload」を、下の副題の幅に合わせて字間を均等に伸ばす
function matchBrandSubWidth() {
  const main = document.querySelector('.nav-brand-main');
  const sub = document.querySelector('.nav-brand-sub');
  if (!main || !sub) return;
  main.style.letterSpacing = '0px';
  const targetWidth = sub.getBoundingClientRect().width;
  const naturalWidth = main.getBoundingClientRect().width;
  const charCount = main.textContent.trim().length;
  if (charCount <= 1) return;
  const extra = (targetWidth - naturalWidth) / (charCount - 1);
  if (extra > 0 && extra < 20) {
    main.style.letterSpacing = extra + 'px';
  }
}
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(matchBrandSubWidth);
}
window.addEventListener('load', matchBrandSubWidth);
setTimeout(matchBrandSubWidth, 300);
setTimeout(matchBrandSubWidth, 1000);
window.addEventListener('resize', matchBrandSubWidth);
