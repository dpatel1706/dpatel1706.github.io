/* =========================================
   skills.js — Skills Grid Renderer + Filters
   ========================================= */

(function () {
  const grid = document.getElementById('skills-grid');
  if (!grid || !window.DATA) return;

  /* ---- Render ---- */
  function renderSkills(filter) {
    grid.innerHTML = '';

    DATA.skills.forEach((skill, i) => {
      if (filter !== 'all' && skill.category !== filter) return;

      const card = document.createElement('div');
      card.className = 'skill-card';
      card.style.transitionDelay = (i * 0.045) + 's';

      const tagsHTML = skill.tags
        .map(t => `<span class="tag tag-${t.color}">${t.label}</span>`)
        .join('');

      card.innerHTML = `
        <span class="skill-icon">${skill.icon}</span>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-tags">${tagsHTML}</div>
      `;

      grid.appendChild(card);

      // Trigger reveal after paint
      requestAnimationFrame(() => {
        requestAnimationFrame(() => card.classList.add('visible'));
      });
    });
  }

  renderSkills('all');

  /* ---- Filter buttons ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.dataset.filter);
    });
  });
})();
