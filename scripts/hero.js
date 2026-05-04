import { icons } from './fx.js';

export function Hero() {
  return `
<header id="top" style="position:relative; width:100%; height:100vh; min-height:780px; overflow:hidden; background:#000;">
  <div id="hero-bg" style="position:absolute; inset:-5% 0 -5% 0; will-change:transform;">
    <img src="assets/hero-lighthouse.jpg" alt="Farol bravio" style="width:100%; height:100%; object-fit:cover; filter:grayscale(1) contrast(1.05) brightness(0.58); image-rendering:high-quality;" />
    <div style="position:absolute; inset:0; background:
        radial-gradient(800px 600px at 20% 30%, oklch(0.62 0.24 16 / 0.25), transparent 70%),
        linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.6) 100%);"></div>
  </div>

  <!-- Hero content -->
  <div style="position:absolute; inset:0; padding:0 48px 80px; display:flex; flex-direction:column; justify-content:flex-end; color:#fff; z-index:4;">
    <div class="container" style="padding:0; margin:0 auto; width:100%; max-width:1480px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:end;">
        <div>
          <div class="eyebrow" style="color:rgba(255,255,255,0.7); display:flex; gap:10px; align-items:center; margin-bottom:28px;">
            <span style="width:6px; height:6px; border-radius:999px; background:var(--primary);"></span>
            Clube de Boxe · Chapecó / SC
          </div>
          <h1 class="display" data-reveal style="font-size:clamp(60px, 9vw, 148px); line-height:0.88; color:#fff; font-weight:900;">ESCULPE TEU <span style="color:var(--primary);">CAMINHO</span>.</h1>
        </div>

        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:36px;">
          <p class="fade-up" style="font-size:19px; line-height:1.5; max-width:460px; text-align:right; color:rgba(255,255,255,0.82); font-weight:300;">
            O boxe não é sobre bater. É sobre atravessar. <span class="serif" style="color:var(--primary);">Força, coragem e persistência</span> — forjadas, golpe a golpe, em cada round.
          </p>
        </div>
      </div>

      <!-- Bottom ticker -->
      <div style="margin-top:64px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.14); display:flex; justify-content:space-between; align-items:center;">
        <div class="mono" style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.45); display:flex; gap:24px;">
          <span>VITÓRIA</span><span style="color:var(--primary);">✦</span>
          <span>CORAÇÃO</span><span style="color:var(--primary);">✦</span>
          <span>EXCELÊNCIA</span>
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
          <div class="mono" style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.45);">Role</div>
          <div style="width:22px; height:36px; border:1px solid rgba(255,255,255,0.3); border-radius:20px; display:grid; place-items:start center; padding-top:7px;">
            <div style="width:2px; height:6px; background:#fff; border-radius:2px; animation:scroll-hint 1.8s infinite;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<style>
@keyframes scroll-hint { 0% { transform:translateY(0); opacity:1 } 100% { transform:translateY(12px); opacity:0 } }
</style>
`;
}

export function bindHero() {
  const bg = document.getElementById('hero-bg');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 1000) bg.style.transform = `translateY(${y * 0.3}px) scale(1.04)`;
  }, { passive: true });
}
