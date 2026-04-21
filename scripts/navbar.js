import { icons } from './fx.js';

export function Navbar() {
  return `
<nav id="navbar" style="position:fixed; top:0; left:0; right:0; z-index:80; padding:22px 48px; display:flex; justify-content:space-between; align-items:center; transition:background 0.4s, backdrop-filter 0.4s;">
  <a href="#top" style="display:flex; align-items:center; gap:10px; text-decoration:none;">
    <span class="brand-mark" style="font-size:32px; color:var(--primary); line-height:1;">BRAVIO</span>
  </a>

  <div class="nav-links" style="display:flex; gap:8px; background:color-mix(in oklab, var(--bg-2) 80%, transparent); backdrop-filter:blur(14px); border:1px solid var(--border); border-radius:999px; padding:6px;">
    ${['Manifesto','Essência','Modalidades','Filosofia','Comunidade'].map(l =>
      `<a href="#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ã/g,'a')}" style="text-decoration:none; color:var(--fg-dim); font-size:12px; letter-spacing:0.08em; text-transform:uppercase; font-weight:600; padding:10px 16px; border-radius:999px; transition:color 0.2s, background 0.2s;" onmouseover="this.style.color='var(--fg)'; this.style.background='var(--bg-3)'" onmouseout="this.style.color='var(--fg-dim)'; this.style.background='transparent'">${l}</a>`
    ).join('')}
  </div>

  <div style="display:flex; align-items:center; gap:16px;">
    <a href="#agenda" class="pill-ghost">Agendar Aula</a>
  </div>
</nav>
<style>
@keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.3 } }
#navbar.scrolled { background:color-mix(in oklab, var(--bg) 85%, transparent); backdrop-filter:blur(18px); border-bottom:1px solid var(--border); }
</style>
`;
}

export function bindNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}
