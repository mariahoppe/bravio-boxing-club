// Global visual effects

// Split text into per-word reveal wrappers then observe
export function initTextReveal() {
  document.querySelectorAll('[data-reveal]').forEach(el => {
    const text = el.textContent.trim();
    const words = text.split(' ');
    el.textContent = '';
    words.forEach((w, i) => {
      const wrap = document.createElement('span');
      wrap.className = 'reveal-word';
      const inner = document.createElement('span');
      inner.className = 'reveal-inner';
      inner.style.transitionDelay = (i * 50) + 'ms';
      inner.textContent = w + '\u00A0';
      wrap.appendChild(inner);
      el.appendChild(wrap);
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });
  requestAnimationFrame(() => {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      io.observe(el);
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('revealed');
    });
  });
  // Safety fallback — force reveal everything after 1.2s
  setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => el.classList.add('revealed'));
  }, 1200);
}

// Fade-up elements
export function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });
  requestAnimationFrame(() => {
    document.querySelectorAll('.fade-up').forEach(el => {
      io.observe(el);
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
    });
  });
  setTimeout(() => {
    document.querySelectorAll('.fade-up:not(.in)').forEach(el => el.classList.add('in'));
  }, 1400);
}

// Mouse spotlight — tracks cursor, sets CSS vars on containers with .spotlight
export function initSpotlight() {
  const els = document.querySelectorAll('.spotlight');
  els.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });
}

// Icon helper — simple inline SVG strings
export const icons = {
  arrowRight: `<svg class="ico-svg" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowUpRight: `<svg class="ico-svg" viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowLeft: `<svg class="ico-svg" viewBox="0 0 24 24"><path d="M19 12H5M11 6L5 12l6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg class="ico-svg" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>`,
  minus: `<svg class="ico-svg" viewBox="0 0 24 24"><path d="M5 12h14" stroke-linecap="round"/></svg>`,
  dot: `<svg class="ico-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></svg>`,
  menu: `<svg class="ico-svg" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/></svg>`,
  close: `<svg class="ico-svg" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>`,
  play: `<svg class="ico-svg" viewBox="0 0 24 24"><path d="M7 5v14l12-7L7 5z" fill="currentColor"/></svg>`,
  quote: `<svg class="ico-svg" viewBox="0 0 24 24"><path d="M9 7H5v6h4l-2 4h3l2-6V7H9zm10 0h-4v6h4l-2 4h3l2-6V7h-3z" fill="currentColor" stroke="none"/></svg>`,
};
