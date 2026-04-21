import { icons } from './fx.js';

const items = [
  { name:'Leandro Fagundes', role:'Atleta Amador · 3 anos no clube', quote:'Entrei pra perder peso. Saio a cada treino como uma pessoa diferente. O BRAVIO me ensinou que disciplina não é punição — é liberdade.' },
  { name:'Camila Reis', role:'Administradora · 2 anos no clube', quote:'Nunca imaginei entrar num ringue. Hoje subo sabendo exatamente quem eu sou. O Círculo Feminino mudou minha relação com o medo.' },
  { name:'Rafael Bonato', role:'Professor de Matemática · 4 anos', quote:'O boxe virou minha terapia física e mental. Depois da aula, volto pra casa em paz. A comunidade daqui é o grande diferencial.' },
  { name:'Marina Petry', role:'Estudante · 1 ano no clube', quote:'Comecei com 16 anos, tímida. Hoje compito e represento o clube. BRAVIO é minha segunda família — no sentido mais literal do termo.' },
];

export function Testimonials() {
  return `
<section id="comunidade" style="padding:160px 0; border-bottom:1px solid var(--border); position:relative;">
  <div class="container">
    <div class="sec-head">
      <span class="eyebrow">/ 04 · Comunidade</span>
      <span class="mono" style="font-size:11px; color:var(--fg-mute);">[ VOZES DO CLUBE ]</span>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:end; margin-bottom:60px;">
      <h2 class="display" data-reveal style="font-size:clamp(40px, 5.8vw, 88px); line-height:0.95; color:var(--fg); max-width:860px;">
        QUEM SOBE NO <span style="color:var(--primary);">RING</span>, CONTA.
      </h2>
      <div style="display:flex; gap:10px;">
        <button id="t-prev" style="width:54px; height:54px; border:1px solid var(--border); background:transparent; border-radius:999px; color:var(--fg); cursor:pointer; display:grid; place-items:center; transition:background 0.3s, color 0.3s;" onmouseover="this.style.background='var(--fg)'; this.style.color='var(--bg)'" onmouseout="this.style.background='transparent'; this.style.color='var(--fg)'">${icons.arrowLeft}</button>
        <button id="t-next" style="width:54px; height:54px; border:1px solid var(--border); background:transparent; border-radius:999px; color:var(--fg); cursor:pointer; display:grid; place-items:center; transition:background 0.3s, color 0.3s;" onmouseover="this.style.background='var(--fg)'; this.style.color='var(--bg)'" onmouseout="this.style.background='transparent'; this.style.color='var(--fg)'">${icons.arrowRight}</button>
      </div>
    </div>

    <div id="t-viewport" style="overflow:hidden; border-radius:var(--radius);">
      <div id="t-track" style="display:flex; transition:transform 0.7s cubic-bezier(0.19,1,0.22,1);">
        ${items.map((t,i) => `
          <div style="flex: 0 0 100%; padding:0;">
            <div style="background:var(--bg-2); border:1px solid var(--border); border-radius:var(--radius); padding:80px 72px; position:relative; overflow:hidden; display:grid; grid-template-columns:1fr 1.4fr; gap:80px; min-height:520px;">
              <div style="position:absolute; top:50%; right:-80px; transform:translateY(-50%); font-family:'Instrument Serif',serif; font-size:520px; color:var(--bg-3); line-height:0.8; font-style:italic; pointer-events:none;">"</div>
              <div style="position:relative; z-index:2; display:flex; flex-direction:column; justify-content:space-between;">
                <div class="mono" style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:var(--primary);">Round ${String(i+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}</div>
                <div>
                  <!-- placeholder for a portrait; no fake photos -->
                  <div style="width:100%; aspect-ratio:3/4; max-width:240px; background:
                    repeating-linear-gradient(45deg, var(--bg-3) 0 8px, var(--bg-2) 8px 16px);
                    border:1px solid var(--border); border-radius:14px; display:grid; place-items:center; position:relative; overflow:hidden;">
                    <div class="mono" style="font-size:10px; letter-spacing:0.2em; color:var(--fg-mute); text-transform:uppercase; text-align:center; padding:12px;">Retrato<br>${t.name.toUpperCase()}</div>
                  </div>
                  <div style="margin-top:20px;">
                    <div class="display" style="font-size:22px; color:var(--fg);">${t.name.toUpperCase()}</div>
                    <div class="mono" style="font-size:11px; letter-spacing:0.14em; color:var(--fg-mute); text-transform:uppercase; margin-top:4px;">${t.role}</div>
                  </div>
                </div>
              </div>
              <div style="position:relative; z-index:2; display:flex; align-items:center;">
                <blockquote class="serif" style="font-size:clamp(26px, 2.6vw, 40px); line-height:1.25; color:var(--fg);">"${t.quote}"</blockquote>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="display:flex; gap:8px; justify-content:center; margin-top:32px;">
      ${items.map((_,i) => `<div class="t-dot" data-idx="${i}" style="width:28px; height:3px; background:${i===0?'var(--fg)':'var(--border)'}; border-radius:2px; transition:background 0.3s; cursor:pointer;"></div>`).join('')}
    </div>
  </div>
</section>
`;
}

export function bindTestimonials() {
  const track = document.getElementById('t-track');
  const dots = document.querySelectorAll('.t-dot');
  let idx = 0;
  const total = 4;
  function go(i) {
    idx = (i + total) % total;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d,di) => d.style.background = di===idx ? 'var(--fg)' : 'var(--border)');
  }
  document.getElementById('t-prev').addEventListener('click', () => go(idx-1));
  document.getElementById('t-next').addEventListener('click', () => go(idx+1));
  dots.forEach(d => d.addEventListener('click', () => go(+d.dataset.idx)));
}
