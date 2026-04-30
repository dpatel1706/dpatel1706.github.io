/* =========================================
   animations.js — Scroll Reveal Observer
   ========================================= */

(function () {
  const observerConfig = { threshold: 0.1, rootMargin: '0px 0px -60px 0px' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve once revealed (perf)
        observer.unobserve(entry.target);
      }
    });
  }, observerConfig);

  /* Observe all reveal targets — run after all renderers have injected DOM */
  function observeAll() {
    const targets = document.querySelectorAll(
      '.reveal, .timeline-item, .skill-card, .project-card, .award-card, .edu-card'
    );
    targets.forEach((el) => observer.observe(el));
  }

  // Give JS renderers a tick to inject their elements
  requestAnimationFrame(() => requestAnimationFrame(observeAll));
})();
