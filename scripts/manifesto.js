import { icons } from './fx.js';

export function Manifesto() {
  return `
<section id="manifesto" class="spotlight noise" style="position:relative; padding:180px 0 160px; overflow:hidden; border-bottom:1px solid var(--border);">
  <div class="container" style="position:relative; z-index:2;">
    <div class="sec-head">
      <span class="eyebrow">/ 01 · Manifesto</span>
      <span class="mono" style="font-size:11px; color:var(--fg-mute);">[ O MAR <span class="brand-mark" style="font-size:15px; letter-spacing:0.04em; text-transform:none; color:var(--fg-dim); vertical-align:-1px;">Bravio</span> ]</span>
    </div>

    <div style="display:grid; grid-template-columns: 1.3fr 1fr; gap:120px; align-items:start;">
      <div>
        <h2 class="display" data-reveal style="font-size:clamp(42px, 6.2vw, 96px); line-height:0.95; color:var(--fg); max-width:900px;">
          "SE O ALUNO NÃO EVOLUI, A CULPA É DO <span style="color:var(--primary);">MÉTODO</span>. MEU TRABALHO É ENCONTRAR O CAMINHO DE CADA UM."
        </h2>
      </div>

      <!-- Right stat / visual -->
      <div class="fade-up" style="display:flex; flex-direction:column; gap:20px;">
        <div style="background:var(--bg-2); border:1px solid var(--border); border-radius:var(--radius); position:relative; overflow:hidden; aspect-ratio: 4/5;">
          <img src="assets/founder-joao.jpg" alt="João Victor — Fundador Bravio" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:grayscale(1) contrast(1.08);" />
          <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0) 45%);"></div>
          <div style="position:absolute; left:0; right:0; bottom:0; padding:32px; z-index:2; color:#fff;">
            <div class="mono" style="font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--primary); margin-bottom:8px;">Fundador</div>
            <div class="display" style="font-size:38px; font-weight:700; letter-spacing:-0.015em; line-height:1;">João Victor</div>
          </div>
        </div>

        <!-- Mini stat strip -->
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
          ${[
            {k: 'ANOS', v: '04'},
            {k: 'ATLETAS', v: '220+'},
            {k: 'MEDALHAS', v: '38'},
          ].map(s => `
            <div style="background:var(--bg-2); border:1px solid var(--border); border-radius:12px; padding:18px;">
              <div class="display" style="font-size:34px; color:var(--primary); font-weight:900;">${s.v}</div>
              <div class="mono" style="font-size:10px; letter-spacing:0.18em; color:var(--fg-mute); margin-top:4px;">${s.k}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
</section>
`;
}

export function bindManifesto() {}
