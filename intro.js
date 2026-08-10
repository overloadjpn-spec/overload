// トップページ入場時：白背景+ロゴのフェードアウト演出
window.addEventListener('load', () => {
  const overlay = document.getElementById('introOverlay');
  if (!overlay) return;
  // 一瞬ロゴを見せてからフェードアウト
  setTimeout(() => {
    overlay.classList.add('hide');
    // アニメーション終了後に完全に取り除く（クリック等を邪魔しないように）
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
  }, 750);
});
