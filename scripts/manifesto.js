import { icons } from './fx.js';

const founders = [
  'Lucas Eduardo de Campos Nunes',
  'Luiz Carlos Nunes Júnior',
  'João Victor',
];

export function Manifesto() {
  return `
<section id="manifesto" class="spotlight noise" style="position:relative; padding:180px 0 160px; overflow:hidden; border-bottom:1px solid var(--border);">
  <div class="container" style="position:relative; z-index:2;">
    <div class="sec-head">
      <span class="eyebrow">/ 01 · Manifesto</span>
      <span class="mono" style="font-size:11px; color:var(--fg-mute);">[ O MAR <span class="brand-mark" style="font-size:15px; letter-spacing:0.04em; text-transform:none; color:var(--fg-dim); vertical-align:-1px;">Bravio</span> ]</span>
    </div>

    <div style="display:grid; grid-template-columns: 1.3fr 1fr; gap:120px; align-items:stretch;">
      <div style="display:flex; flex-direction:column; justify-content:space-between; gap:48px;">
        <h2 class="display" data-reveal style="font-size:clamp(42px, 6.2vw, 96px); line-height:0.95; color:var(--fg); max-width:900px; margin:0;">
          "SE O ALUNO NÃO EVOLUI, A CULPA É DO MÉTODO. NOSSO TRABALHO É ENCONTRAR O CAMINHO DE CADA UM."
        </h2>

        <!-- ===== FOUNDERS' NAMES ===== -->
        <div class="fade-up" style="display:flex; flex-direction:column; gap:10px; padding-top:32px; border-top:1px solid var(--border);">
          <div class="mono" style="font-size:10px; letter-spacing:0.24em; text-transform:uppercase; color:var(--primary); margin-bottom:6px;">/ Fundadores</div>
          ${founders.map((name, i) => `
            <div style="display:flex; align-items:baseline; gap:18px;">
              <span class="mono" style="font-size:11px; color:var(--fg-mute); letter-spacing:0.1em; min-width:28px;">0${i + 1}</span>
              <span class="display" style="font-size:clamp(20px, 1.8vw, 26px); font-weight:600; letter-spacing:-0.01em; color:var(--fg); line-height:1.1;">${name}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- ===== FOUNDERS — single group photo, height matched to quote ===== -->
      <div class="fade-up" style="position:relative; overflow:hidden; border:1px solid var(--border); border-radius:12px; background:var(--bg-2); align-self:stretch; min-height:520px;">
        <img src="assets/founders-group.jpg" alt="Fundadores Bravio" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:grayscale(1) contrast(1.08);" />
        <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0) 100%);"></div>
        <div style="position:absolute; left:0; right:0; bottom:0; padding:22px 26px; z-index:2; color:#fff; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <div class="mono" style="font-size:9px; letter-spacing:0.22em; text-transform:uppercase; color:var(--primary);">/ Fundadores Bravio</div>
          <div class="mono" style="font-size:9px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.6);">2026</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
}

export function bindManifesto() {}
