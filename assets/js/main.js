(() => {
  'use strict';

  const body = document.body;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktopNav = window.matchMedia('(min-width: 1241px)');

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  /* Accessible full-screen navigation. */
  if (toggle && nav) {
    const focusable = () => [toggle, ...nav.querySelectorAll('a[href], button:not([disabled])')];
    const closeMenu = (restore = false) => {
      nav.classList.remove('open');
      nav.scrollTop = 0;
      body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      if (restore) toggle.focus();
    };
    const openMenu = () => {
      nav.scrollTop = 0;
      nav.classList.add('open');
      body.classList.add('nav-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close navigation');
      window.setTimeout(() => nav.querySelector('a[href]')?.focus(), 30);
    };

    toggle.addEventListener('click', () => {
      toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
    });
    nav.querySelectorAll('a[href]').forEach((link) => link.addEventListener('click', () => closeMenu()));
    nav.addEventListener('click', (event) => {
      if (event.target === nav) closeMenu(true);
    });
    document.addEventListener('pointerdown', (event) => {
      if (!nav.classList.contains('open')) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);
      if (event.key !== 'Tab' || !nav.classList.contains('open')) return;
      const nodes = focusable();
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    desktopNav.addEventListener('change', (event) => {
      if (event.matches) closeMenu();
    });
  }

  /* Header state and reading progress. */
  const progressBars = document.querySelectorAll('.header-progress span, .scroll-spine span');
  const updateChrome = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 18);
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / max));
    progressBars.forEach((bar) => {
      if (bar.closest('.scroll-spine')) bar.style.height = `${progress * 100}%`;
      else bar.style.width = `${progress * 100}%`;
    });
  };
  updateChrome();
  window.addEventListener('scroll', updateChrome, { passive: true });
  window.addEventListener('resize', updateChrome);

  /* Reveal content without holding text hostage. */
  const revealNodes = [...document.querySelectorAll('.reveal')];
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealNodes.forEach((node) => node.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealNodes.forEach((node) => revealObserver.observe(node));
  }

  /* V26: chapter rail removed across the site. */

  /* V23: static art direction replaces pointer tilt for steadier reading. */

  /* V26: floating mobile project CTA removed across the site. */

  /* Brief internal page transition, skipped for reduced motion and modifier clicks. */
  if (!reducedMotion.matches) {
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http') || link.target === '_blank') return;
      link.addEventListener('click', (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
        event.preventDefault();
        body.classList.add('is-leaving');
        window.setTimeout(() => { window.location.href = href; }, 360);
      });
    });
  }

  /* V23: opening overture removed. The page now opens directly on the message. */

})();

/* V20 Studio report comparison */
document.querySelectorAll('[data-report-compare]').forEach((comparison) => {
  const range = comparison.querySelector('.compare-range');
  if (!range) return;
  const update = () => comparison.style.setProperty('--compare', `${range.value}%`);
  range.addEventListener('input', update);
  update();
});
