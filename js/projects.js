/* =========================================
   projects.js — Projects Grid Renderer
   ========================================= */

(function () {
  const grid = document.getElementById('projects-grid');
  if (!grid || !window.DATA) return;

  DATA.projects.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.transitionDelay = (i * 0.07) + 's';

    const stackHTML = project.stack
      .map(s => `<span class="tag tag-${s.color}">${s.label}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-badge badge-${project.badgeStyle}">${project.badge}</div>
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.desc}</div>
      <div class="project-stack">${stackHTML}</div>
    `;

    grid.appendChild(card);
  });
})();
