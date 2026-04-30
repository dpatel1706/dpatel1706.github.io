/* =========================================
   awards.js — Awards Grid Renderer
   ========================================= */

(function () {
  const grid = document.getElementById('awards-grid');
  if (!grid || !window.DATA) return;

  DATA.awards.forEach((award, i) => {
    const card = document.createElement('div');
    card.className = 'award-card';
    card.style.transitionDelay = (i * 0.1) + 's';

    card.innerHTML = `
      <div class="award-icon">${award.icon}</div>
      <div>
        <div class="award-title">${award.title}</div>
        <div class="award-sub">${award.sub}</div>
        <div class="award-highlight">${award.highlight}</div>
      </div>
    `;

    grid.appendChild(card);
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
  });
})();
