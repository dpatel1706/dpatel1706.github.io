/* =========================================
   experience.js — Timeline Renderer
   ========================================= */

(function () {
  const timeline = document.getElementById('timeline');
  if (!timeline || !window.DATA) return;

  DATA.experience.forEach((job, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.transitionDelay = (i * 0.1) + 's';

    const bulletsHTML = job.bullets
      .map(b => `<li>${b}</li>`)
      .join('');

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div class="timeline-role">${job.role}</div>
          <div class="timeline-date">${job.date}</div>
        </div>
        <div class="timeline-company">▸ ${job.company} &mdash; ${job.location}</div>
        <ul class="timeline-bullets">${bulletsHTML}</ul>
      </div>
    `;

    timeline.appendChild(item);
  });
})();
