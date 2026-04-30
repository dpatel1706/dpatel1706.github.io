/* =========================================
   animations.js — Scroll Reveal Observer
   ========================================= */

(function () {
  // No negative rootMargin — elements at top of page must trigger too
  const observerConfig = { threshold: 0.08 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerConfig);

  const SELECTOR = '.reveal, .timeline-item, .skill-card, .project-card, .award-card, .edu-card';

  function observeAll() {
    document.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el));
  }

  // Run once immediately after all renderer scripts have executed,
  // then again 400ms later to catch any late-painted elements.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      observeAll();
      setTimeout(observeAll, 400);
    });
  });
})();
