/* =========================================
   cursor.js — Custom Cursor
   ========================================= */

(function () {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursor-trail');
  if (!cursor || !trail) return;

  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth trail with lerp
  function lerp(a, b, t) { return a + (b - a) * t; }

  function animateTrail() {
    trailX = lerp(trailX, mouseX, 0.15);
    trailY = lerp(trailY, mouseY, 0.15);
    trail.style.left = trailX + 'px';
    trail.style.top  = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Hover expand on interactive elements
  const hoverTargets = 'a, button, .skill-card, .project-card, .award-card, .edu-card, .contact-link, .filter-btn, .nav-cta';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add('hovered');
      trail.classList.add('hovered');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove('hovered');
      trail.classList.remove('hovered');
    }
  });

  // Hide on mobile
  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    trail.style.display  = 'none';
    document.body.style.cursor = 'auto';
  }
})();
