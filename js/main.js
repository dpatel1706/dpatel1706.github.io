/* main.js — Navigation, Scroll Reveal, Interactions */

(function () {
  'use strict';

  /* ─── NAV: compact on scroll + active link ─── */
  const header   = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('#site-nav a:not(.nav-resume)');
  const sections = document.querySelectorAll('section[id], div[id]');

  function onScroll() {
    // Compact header
    if (window.scrollY > 80) {
      header.classList.add('compact');
    } else {
      header.classList.remove('compact');
    }

    // Active nav link based on scroll position
    let current = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 160) {
        current = sec.id;
      }
    });
    navLinks.forEach((a) => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── Hamburger ─── */
  const hamburger = document.getElementById('hamburger');
  const siteNav   = document.getElementById('site-nav');

  if (hamburger && siteNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      siteNav.classList.toggle('open');
    });
    // Close on link click (mobile)
    siteNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        siteNav.classList.remove('open');
      });
    });
  }

  /* ─── Scroll Reveal ─── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  // Add reveal class to target elements, then observe
  const revealTargets = [
    '.exp-item',
    '.award-row',
    '.edu-item',
    '.proj-card',
    '.skill-group',
    '.contact-item',
    '.section-label',
  ];

  revealTargets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.07) + 's';
      revealObserver.observe(el);
    });
  });

  /* ─── Smooth hover on hero nav items ─── */
  document.querySelectorAll('.hero-nav-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.hni-arrow').style.transform = 'translateX(4px)';
    });
    item.addEventListener('mouseleave', () => {
      item.querySelector('.hni-arrow').style.transform = '';
    });
  });

})();
