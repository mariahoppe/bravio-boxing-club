import { icons } from './fx.js';

const values = [
  {
    n:'01', title:'CORAÇÃO', roman:'I',
    tag:'Intenção acima da forma',
    desc:'Quando colocamos nosso coração e damos o nosso melhor em algo, o caminho se enche de aprendizados e conquistas que realmente fazem sentido. É assim que chegamos onde queremos — e aprendemos a valorizar cada passo.',
    img:'assets/value-coracao.jpg',
  },
  {
    n:'02', title:'VITÓRIA', roman:'II',
    tag:'Sobre si mesmo',
    desc:'A verdadeira vitória é sobre si mesmo. Enxergamos a vitória como o momento em que a melhor versão de você prevalece: quando a atenção vence a distração, a vontade supera a preguiça, e o controle domina o caos. Que cada golpe esculpa seu caminho — sem comparações, apenas evolução.',
    img:'assets/value-vitoria.jpg',
  },
  {
    n:'03', title:'EXCELÊNCIA', roman:'III',
    tag:'Areté — a virtude da prática',
    desc:'Consideramos excelência aquilo que dominamos em nós mesmos. Aristóteles expressa essa ideia com o conceito de areté — a excelência em uma área específica. Quando nos dedicamos de coração a algo, a excelência se torna um caminho natural, refletindo os pilares do desenvolvimento do aluno.',
    img:'assets/value-excelencia.jpg',
  },
];

export function Philosophy() {
  return `
<section id="filosofia" style="padding:160px 0; border-bottom:1px solid var(--border); position:relative;">
  <div class="container">
    <div class="sec-head">
      <span class="eyebrow">/ 02 · Conduta</span>
      <span class="mono" style="font-size:11px; color:var(--fg-mute);">[ OS TRÊS VALORES ]</span>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:80px; align-items:end; margin-bottom:80px;">
      <h2 class="display" data-reveal style="font-size:clamp(40px, 5.8vw, 88px); line-height:0.95; color:var(--fg); max-width:680px;">
        TRÊS VALORES. UMA <span style="color:var(--primary);">CONDUTA</span>.
      </h2>
      <p class="fade-up" style="font-size:17px; line-height:1.6; color:var(--fg-dim); font-weight:300; max-width:460px;">
        Nossa metodologia se ancora em três palavras. Elas estruturam cada aula, cada técnica, cada conversa — do primeiro dia de iniciação até o clube competitivo.
      </p>
    </div>

    <!-- Split layout: list on left, sticky image panel on right -->
    <div style="display:grid; grid-template-columns: 1.35fr 1fr; gap:80px; align-items:start;">

      <!-- LIST -->
      <div id="values-list" style="border-top:1px solid var(--border);">
        ${values.map((v,i) => `
          <div class="value-row ${i===0 ? 'active' : ''}" data-idx="${i}" style="position:relative; padding:40px 0; border-bottom:1px solid var(--border); cursor:pointer; transition:padding 0.4s ease;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; gap:16px; margin-bottom:14px;">
              <div class="mono" style="font-size:11px; letter-spacing:0.2em; color:var(--fg-mute);">VALOR · ${v.roman}  <span style="margin-left:10px; color:var(--primary);">${v.tag}</span></div>
              <div class="mono" style="font-size:11px; letter-spacing:0.2em; color:var(--fg-mute);">${v.n} / 03</div>
            </div>

            <h3 class="display value-title" style="font-size:clamp(56px, 7.5vw, 110px); line-height:0.9; letter-spacing:-0.025em; color:var(--fg); margin:0; position:relative; display:inline-block;">
              ${v.title}
              <span class="value-underline" style="position:absolute; left:0; right:0; bottom:-6px; height:3px; background:var(--primary); transform-origin:left; transform:scaleX(0); transition:transform 0.5s cubic-bezier(0.65,0,0.35,1);"></span>
            </h3>

            <!-- Description expands inline when row active -->
            <div class="value-desc-wrap" style="overflow:hidden; max-height:0; transition:max-height 0.6s cubic-bezier(0.4,0,0.2,1), margin-top 0.4s ease;">
              <p style="font-size:16px; line-height:1.6; color:var(--fg-dim); font-weight:300; max-width:620px; padding-top:22px;">
                ${v.desc}
              </p>
            </div>

            <!-- Inline thumbnail on mobile (hidden on desktop) -->
            <div class="value-thumb-mobile" style="display:none; margin-top:20px; border-radius:12px; overflow:hidden; aspect-ratio:4/5; background:var(--bg-2);">
              <img src="${v.img}" alt="${v.title}" style="width:100%; height:100%; object-fit:cover;">
            </div>
          </div>
        `).join('')}
      </div>

      <!-- STICKY IMAGE PANEL -->
      <div style="position:sticky; top:120px;">
        <div style="position:relative; aspect-ratio:4/5; border-radius:14px; overflow:hidden; background:var(--bg-2); border:1px solid var(--border);">
          ${values.map((v,i) => `
            <img class="value-panel-img ${i===0?'on':''}" data-idx="${i}" src="${v.img}" alt="${v.title}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:${i===0?1:0}; transform:scale(${i===0?1:1.04}); transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1); filter:grayscale(0.1) contrast(1.05);">
          `).join('')}
          <!-- overlay meta -->
          <div style="position:absolute; top:20px; left:20px; right:20px; display:flex; justify-content:space-between; align-items:center; color:#fff; z-index:2;">
            <span class="mono" style="font-size:10px; letter-spacing:0.22em; text-transform:uppercase; background:rgba(0,0,0,0.5); backdrop-filter:blur(8px); padding:7px 12px; border-radius:999px;">VALOR <span id="value-panel-idx">I</span></span>
            <span class="mono" style="font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.75);"><span class="brand-mark" style="font-size:14px; letter-spacing:0.04em; text-transform:none; vertical-align:-1px;">Bravio</span> · 2026</span>
          </div>
          <div id="value-panel-label" style="position:absolute; bottom:22px; left:22px; right:22px; color:#fff; z-index:2; font-family:'Instrument Serif', serif; font-style:italic; font-size:28px; line-height:1;">— coração.</div>
          <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%, transparent 70%, rgba(0,0,0,0.3) 100%); pointer-events:none;"></div>
        </div>

        <!-- progress dots -->
        <div style="display:flex; gap:6px; margin-top:20px; justify-content:center;">
          ${values.map((v,i) => `<div class="value-dot" data-idx="${i}" style="width:32px; height:3px; background:${i===0 ? 'var(--primary)' : 'var(--border)'}; transition:background 0.4s; cursor:pointer; border-radius:2px;"></div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Code of the house quote -->
    <div class="fade-up" style="margin-top:120px; padding:48px 56px; border:1px solid var(--border); border-radius:var(--radius); background:var(--bg-2); display:flex; justify-content:space-between; align-items:center; gap:40px; flex-wrap:wrap;">
      <div style="flex:1; min-width:320px;">
        <p class="serif" style="font-size:30px; line-height:1.2; color:var(--fg); max-width:780px; font-style:italic;">
          "Quem escolhe o ringue, escolhe olhar pra si mesmo sem desvio. O boxe só expõe o que já estava dentro."
        </p>
        <p class="mono" style="font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--fg-mute); margin-top:20px;">— <span class="brand-mark" style="font-size:15px; letter-spacing:0.04em; text-transform:none; vertical-align:-1px;">Bravio</span> · CÓDIGO DA CASA</p>
      </div>
      <a href="#agenda" class="pill">
        <span>Ver Agenda</span>
        <span class="ico">${icons.arrowRight}</span>
      </a>
    </div>
  </div>
</section>
<style>
  .value-row:hover .value-underline { transform:scaleX(1); }
  .value-row.active .value-underline { transform:scaleX(1); }
  .value-row.active .value-desc-wrap { max-height:400px !important; margin-top:0; }
  .value-row.active .value-title { color:var(--primary); }
  .value-panel-img.on { opacity:1 !important; transform:scale(1) !important; }
  @media (max-width: 900px) {
    #filosofia [style*="grid-template-columns: 1.35fr"] { grid-template-columns:1fr !important; }
    .value-thumb-mobile { display:block !important; }
    #filosofia [style*="position:sticky"] { display:none !important; }
  }
</style>
`;
}

export function bindPhilosophy() {
  const rows = document.querySelectorAll('.value-row');
  const imgs = document.querySelectorAll('.value-panel-img');
  const dots = document.querySelectorAll('.value-dot');
  const romans = ['I','II','III'];
  const labels = ['— coração.', '— vitória.', '— excelência.'];
  const idxEl = document.getElementById('value-panel-idx');
  const labelEl = document.getElementById('value-panel-label');

  function activate(i) {
    rows.forEach((r, j) => r.classList.toggle('active', j === i));
    imgs.forEach((im, j) => im.classList.toggle('on', j === i));
    dots.forEach((d, j) => d.style.background = j === i ? 'var(--primary)' : 'var(--border)');
    if (idxEl) idxEl.textContent = romans[i];
    if (labelEl) labelEl.textContent = labels[i];
  }

  rows.forEach((row, i) => {
    row.addEventListener('mouseenter', () => activate(i));
    row.addEventListener('click', () => activate(i));
  });
  dots.forEach((d, i) => d.addEventListener('click', () => activate(i)));
}
