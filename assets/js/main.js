const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

if (prefersReduced) {
  reveals.forEach((element) => element.classList.add('visible'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      const truth = entry.target.closest('.truth-interruption');
      if (truth) truth.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14 });

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('visible'));
}

const runningLabel = document.querySelector('[data-section-label]');
const sections = [...document.querySelectorAll('[data-section]')];

if (runningLabel && sections.length && 'IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) runningLabel.textContent = visible.target.dataset.section;
  }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] });

  sections.forEach((section) => sectionObserver.observe(section));
}

// Brief branded page transition for internal navigation.
if (!prefersReduced) {
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (link.target === '_blank' || href.startsWith('http')) return;

    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      document.body.classList.add('is-leaving');
      window.setTimeout(() => { window.location.href = href; }, 470);
    });
  });
}

// The static preview demonstrates validation and interaction. Connect a secure endpoint before launch.
const assessmentForm = document.querySelector('[data-assessment-form]');
if (assessmentForm) {
  assessmentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = assessmentForm.querySelector('.form-status');
    if (!assessmentForm.checkValidity()) {
      assessmentForm.reportValidity();
      return;
    }
    if (status) {
      status.className = 'form-status success';
      status.textContent = 'Assessment captured in this preview. Connect the form to a secure endpoint before launch.';
    }
  });
}

// V5: publishing spine scroll progress.
const scrollSpine = document.querySelector('.scroll-spine span');
if (scrollSpine) {
  const updateScrollSpine = () => {
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / max));
    scrollSpine.style.height = `${progress * 100}%`;
  };
  updateScrollSpine();
  window.addEventListener('scroll', updateScrollSpine, { passive: true });
  window.addEventListener('resize', updateScrollSpine);
}

// V5: small editorial labels for interactive visual artifacts.
if (!prefersReduced && window.matchMedia('(pointer:fine)').matches) {
  const labelled = document.querySelectorAll('[data-hover-label]');
  if (labelled.length) {
    const caption = document.createElement('div');
    caption.className = 'cursor-caption';
    caption.setAttribute('aria-hidden', 'true');
    document.body.appendChild(caption);
    labelled.forEach((item) => {
      item.addEventListener('pointerenter', () => {
        caption.textContent = item.dataset.hoverLabel || '';
        caption.classList.add('visible');
      });
      item.addEventListener('pointermove', (event) => {
        caption.style.transform = `translate(${event.clientX + 18}px, ${event.clientY + 18}px)`;
      });
      item.addEventListener('pointerleave', () => caption.classList.remove('visible'));
    });
  }
}

// V5: restrained perspective movement for hero artifacts.
if (!prefersReduced && window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('[data-tilt]').forEach((item) => {
    item.addEventListener('pointermove', (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      item.classList.add('is-tilting');
      item.style.transform = `perspective(1100px) rotateX(${y * -3.2}deg) rotateY(${x * 4.2}deg) translateZ(0)`;
    });
    item.addEventListener('pointerleave', () => {
      item.classList.remove('is-tilting');
      item.style.transform = '';
    });
  });
}

// V5: visible receipt stamp in the static form demonstration.
if (assessmentForm) {
  assessmentForm.addEventListener('submit', () => {
    if (assessmentForm.checkValidity()) assessmentForm.classList.add('is-submitted');
  });
}


// V6: turn the site structure into an unobtrusive editorial chapter rail.
(() => {
  const contentSections = [...document.querySelectorAll('main [data-section]')];
  if (contentSections.length < 3) return;
  const rail = document.createElement('nav');
  rail.className = 'chapter-rail';
  rail.setAttribute('aria-label', 'On this page');
  contentSections.forEach((section, index) => {
    if (!section.id) section.id = `chapter-${index + 1}`;
    const a = document.createElement('a');
    a.href = `#${section.id}`;
    a.innerHTML = `<span>${section.dataset.section}</span><i></i>`;
    rail.appendChild(a);
  });
  document.body.appendChild(rail);
  if ('IntersectionObserver' in window) {
    const links = [...rail.querySelectorAll('a')];
    const obs = new IntersectionObserver(entries => {
      const hit = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (!hit) return;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${hit.target.id}`));
    }, {rootMargin:'-30% 0px -55%', threshold:[0,.25,.5]});
    contentSections.forEach(s => obs.observe(s));
  }
})();

const siteHeader = document.querySelector('.site-header');
const updateHeader = () => siteHeader?.classList.toggle('is-scrolled', window.scrollY > 18);
updateHeader(); window.addEventListener('scroll', updateHeader, {passive:true});

if (toggle && nav) {
  toggle.addEventListener('click', () => document.body.classList.toggle('nav-open', toggle.getAttribute('aria-expanded') === 'true'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('nav-open')));
}
