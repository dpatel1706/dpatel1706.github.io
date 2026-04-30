/* =========================================
   education.js — Education Cards Renderer
   ========================================= */

(function () {
  const grid = document.getElementById('edu-grid');
  if (!grid || !window.DATA) return;

  DATA.education.forEach((edu, i) => {
    const card = document.createElement('div');
    card.className = 'edu-card';
    card.style.transitionDelay = (i * 0.12) + 's';

    const honorsHTML = edu.honors
      ? `<div class="edu-honors">🎖 ${edu.honors}</div>`
      : '';

    card.innerHTML = `
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-school">${edu.school}</div>
      <div class="edu-meta">${edu.location} &nbsp;·&nbsp; ${edu.period}</div>
      <div class="edu-gpa">⭐ GPA ${edu.gpa}</div>
      ${honorsHTML}
    `;

    grid.appendChild(card);
  });
})();
