import { icons } from './fx.js';

const classes = [
  { id:'classico', n:'01', title:'BOXE CLÁSSICO', tag:'Todos os públicos', desc:'', level:'', duration:'', img:'' },
];

const hours = ['06h','07h','08h','08h30','09h','10h','14h','15h','16h','17h','18h','18h30','19h30','20h30','21h30'];
const days = ['SEG','TER','QUA','QUI','SEX','SÁB'];
const grid = {
  '06h':   [null, 'CL', 'CL', 'CL', null, null],
  '07h':   [null, 'LV', 'LV', 'LV', null, null],
  '08h':   ['CL', null, 'LV', null, 'CL', null],
  '08h30': [null, 'EB', null, 'EB', null, null],
  '09h':   [null, '360','CL', '360', null, 'CL'],
  '10h':   [null, 'KD', null, 'KD', null, 'SP'],
  '14h':   ['CL', null, null, null, 'CL', 'CL'],
  '15h':   ['KD', null, null, null, 'KD', null],
  '16h':   ['360','CL', 'PS', 'CL', '360', null],
  '17h':   ['LV', 'LV', 'LV', 'LV', 'LV', null],
  '18h':   ['EB', null, null, null, 'EB', null],
  '18h30': ['CL', 'SC', 'CL', 'CL', 'CL', null],
  '19h30': ['CL', 'CL', '360','CL', 'SC', null],
  '20h30': ['PS', 'CL', 'PS', 'CL', 'SC', null],
  '21h30': ['SC', null, 'CL', null, null, null],
};

const RED     = '#c8232c';   // Clássico
const RED_DK  = '#8a3a23';   // Sparring & Sparring & Clássico
const BLK     = 'transparent'; // Livre, Escola, Boxe 360, Kids, Pré-Sparring — background-matching
const LINE    = '#ffffff';
const HATCH   = 'repeating-linear-gradient(135deg, transparent 0 5px, rgba(255,255,255,0.18) 5px 6px)';

const slot = {
  'CL':  { label:'CLÁSSICO',                bg: RED,    fg:'#fff' },
  'EB':  { label:'ESCOLA<br>DE BOXE',       bg: BLK,    fg:'#fff' },
  '360': { label:'BOXE 360',                bg: BLK,    fg:'#fff' },
  'KD':  { label:'KIDS',                    bg: BLK,    fg:'#fff' },
  'PS':  { label:'PRÉ<br>SPARRING',         bg: BLK,    fg:'#fff' },
  'SP':  { label:'SPARRING',                bg: RED_DK, fg:'#fff' },
  'SC':  { label:'SPARRING<br>&amp; CLÁSSICO', bg: RED_DK, fg:'#fff' },
  'LV':  { label:'LIVRE',                   bg: BLK,    fg:'#fff' },
};

export function Schedule() {
  return `
<section id="agenda" style="padding:160px 0; border-bottom:1px solid var(--border); position:relative;">
  <div class="container">
    <div class="sec-head">
      <span class="eyebrow">/ 03 · Agenda</span>
      <span class="mono" style="font-size:11px; color:var(--fg-mute);">[ CRONOGRAMA 2026 · v02 ]</span>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:80px; align-items:end; margin-bottom:64px;">
      <h2 class="display" data-reveal style="font-size:clamp(40px, 5.8vw, 88px); line-height:0.95; color:var(--fg);">
        ESCOLHA TUA FREQUÊNCIA.
      </h2>
      <p class="fade-up" style="font-size:17px; line-height:1.6; color:var(--fg-dim); font-weight:300; max-width:460px;">
        Confira o cronograma da semana — todas as modalidades, do primeiro contato ao combate pleno.
      </p>
    </div>

    <!-- ===== CRONOGRAMA — transparent, white lines ===== -->
    <div class="cronograma-wrap" style="background:transparent; color:#fff;">

      <!-- Days header -->
      <div class="cron-row" style="display:grid; grid-template-columns: 70px repeat(6, 1fr); border:1.5px solid ${LINE};">
        <div style="border-right:1.5px solid ${LINE};"></div>
        ${days.map((d, i) => `
          <div style="font-family:'Work Sans', sans-serif; font-weight:700; font-size:15px; letter-spacing:0.08em; padding:10px 6px; text-align:center; color:#fff; ${i < days.length - 1 ? `border-right:1.5px solid ${LINE};` : ''}">${d}</div>
        `).join('')}
      </div>

      <!-- Grid rows -->
      <div style="border:1.5px solid ${LINE}; border-top:none;">
        ${hours.map((h, ri) => `
          <div class="cron-row" style="display:grid; grid-template-columns: 70px repeat(6, 1fr); ${ri < hours.length - 1 ? `border-bottom:1.5px solid ${LINE};` : ''}">
            <div style="font-family:'Work Sans', sans-serif; font-weight:600; font-size:13px; padding:0 8px; display:flex; align-items:center; justify-content:flex-start; color:#fff; border-right:1.5px solid ${LINE}; min-height:42px;">${h}</div>
            ${grid[h].map((code, ci) => {
              const isLast = ci === 5;
              const sep = isLast ? '' : `border-right:1.5px solid ${LINE};`;
              if (!code) {
                return `<div style="background:${HATCH}; ${sep} min-height:42px;"></div>`;
              }
              const s = slot[code];
              return `<div style="background:${s.bg}; color:${s.fg}; ${sep} min-height:42px; display:flex; align-items:center; justify-content:center; text-align:center; padding:4px 4px; font-family:'Work Sans', sans-serif; font-weight:700; font-size:11px; letter-spacing:0.04em; line-height:1.05; text-transform:uppercase;">${s.label}</div>`;
            }).join('')}
          </div>
        `).join('')}
      </div>

    </div>
  </div>
</section>
`;
}

export function bindSchedule() {}
