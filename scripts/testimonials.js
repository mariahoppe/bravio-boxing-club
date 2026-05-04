import { icons } from './fx.js';

// Each testimonial gets its own vertical-video case study.
// `video` is an embeddable URL (Instagram reel /embed/ or Google Drive /preview).
const items = [
  {
    name:  'Marcos Terra',
    quote: 'O boxe é o remédio para minha saúde, toda aula aprendo algo novo.',
    video: 'https://drive.google.com/file/d/1d-QWxE0sZ2GrISAiA8WsOslqgIf2m5yh/preview',
    type:  'drive',
  },
  {
    name:  'Juvana Capitanio',
    quote: 'A evolução que temos em conjunto no boxe, são momentos únicos que estão ligados ao esporte.',
    video: 'https://drive.google.com/file/d/1ouzUAFsCU94qBrNllml8BaTTvxNCFwip/preview',
    type:  'drive',
  },
  {
    name:  'Gabriel Marques',
    quote: 'Quero competir. Aqui no Brasil, gostei muito de treinar na Bravio.',
    video: 'https://drive.google.com/file/d/19Lfc8m89nPilLa3SKZle4UeQghja77fA/preview',
    type:  'drive',
  },
  {
    name:  'Paulo Henrique Pedroso',
    quote: 'Eu sou uma pessoa difícil de lidar. O boxe me ajudou na minha paciência e a respeitar o próximo.',
    video: 'https://drive.google.com/file/d/139Lmv9DHMXRhTOhjba3pHTzHq7FxJ8ai/preview',
    type:  'drive',
  },
];

export function Testimonials() {
  const total = items.length;
  return `
<section id="comunidade" style="padding:160px 0; border-bottom:1px solid var(--border); position:relative;">
  <div class="container">
    <div class="sec-head">
      <span class="eyebrow">/ 04 · Comunidade</span>
      <span class="mono" style="font-size:11px; color:var(--fg-mute);">[ VOZES DO CLUBE ]</span>
    </div>

    <!-- TOP: title + arrows -->
    <div style="display:flex; justify-content:space-between; align-items:end; gap:40px; margin-bottom:80px;">
      <h2 class="display" data-reveal style="font-size:clamp(40px, 5.8vw, 88px); line-height:0.95; color:var(--fg); max-width:860px; margin:0;">
        QUEM SOBE NO RING, CONTA.
      </h2>
      <div style="display:flex; gap:10px; flex-shrink:0;">
        <button id="t-prev" style="width:54px; height:54px; border:1px solid var(--border); background:transparent; border-radius:999px; color:var(--fg); cursor:pointer; display:grid; place-items:center; transition:background 0.3s, color 0.3s;" onmouseover="this.style.background='var(--fg)'; this.style.color='var(--bg)'" onmouseout="this.style.background='transparent'; this.style.color='var(--fg)'">${icons.arrowLeft}</button>
        <button id="t-next" style="width:54px; height:54px; border:1px solid var(--border); background:transparent; border-radius:999px; color:var(--fg); cursor:pointer; display:grid; place-items:center; transition:background 0.3s, color 0.3s;" onmouseover="this.style.background='var(--fg)'; this.style.color='var(--bg)'" onmouseout="this.style.background='transparent'; this.style.color='var(--fg)'">${icons.arrowRight}</button>
      </div>
    </div>

    <!-- BOTTOM: video on left, quote+name on right -->
    <div style="display:grid; grid-template-columns: auto 1fr; gap:90px; align-items:center;">
      <!-- LEFT: phone frame with one video at a time -->
      <div class="fade-up" style="display:flex; justify-content:center;">
        <div class="phone-frame" style="
          position:relative;
          width:340px;
          aspect-ratio: 9/19.5;
          background:#0a0a0a;
          border-radius:46px;
          padding:12px;
          border:1px solid var(--border);
          box-shadow:
            0 0 0 2px #1a1a1a,
            0 30px 80px -20px rgba(0,0,0,0.7),
            0 10px 30px -10px rgba(0,0,0,0.5);
        ">
          <div style="position:absolute; left:-2px; top:110px; width:3px; height:32px; background:#1a1a1a; border-radius:2px 0 0 2px;"></div>
          <div style="position:absolute; left:-2px; top:160px; width:3px; height:60px; background:#1a1a1a; border-radius:2px 0 0 2px;"></div>
          <div style="position:absolute; left:-2px; top:230px; width:3px; height:60px; background:#1a1a1a; border-radius:2px 0 0 2px;"></div>
          <div style="position:absolute; right:-2px; top:170px; width:3px; height:90px; background:#1a1a1a; border-radius:0 2px 2px 0;"></div>

          <div style="position:relative; width:100%; height:100%; background:#000; border-radius:36px; overflow:hidden;">
            <div style="position:absolute; top:10px; left:50%; transform:translateX(-50%); width:96px; height:28px; background:#000; border-radius:999px; z-index:5;"></div>
            ${items.map((t,i) => `
              <iframe
                class="t-video"
                data-idx="${i}"
                src="${t.video}"
                style="position:absolute; inset:0; width:100%; height:100%; border:0; background:#000; opacity:${i===0?1:0}; pointer-events:${i===0?'auto':'none'}; transition:opacity 0.5s ease;"
                loading="lazy"
                allowtransparency="true"
                allow="encrypted-media; autoplay; clipboard-write; picture-in-picture"
                allowfullscreen
                scrolling="no"
              ></iframe>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- RIGHT: quote viewport -->
      <div id="t-viewport" style="overflow:hidden;">
        <div id="t-track" style="display:flex; transition:transform 0.7s cubic-bezier(0.19,1,0.22,1);">
          ${items.map((t,i) => `
            <div style="flex: 0 0 100%; padding-right:20px;">
              <div class="mono" style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:var(--primary); margin-bottom:24px;">Round ${String(i+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}</div>
              <blockquote class="serif" style="font-size:clamp(26px, 2.6vw, 40px); line-height:1.25; color:var(--fg); margin:0;">"${t.quote}"</blockquote>
              <div style="margin-top:28px; display:flex; align-items:baseline; gap:16px;">
                <span class="mono" style="font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--fg-mute);">/ Atleta</span>
                <span class="display" style="font-size:clamp(16px, 1.3vw, 20px); font-weight:600; letter-spacing:-0.005em; color:var(--fg-dim); line-height:1.1;">${t.name}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div style="display:flex; gap:8px; justify-content:center; margin-top:48px;">
      ${items.map((_,i) => `<div class="t-dot" data-idx="${i}" style="width:28px; height:3px; background:${i===0?'var(--fg)':'var(--border)'}; border-radius:2px; transition:background 0.3s; cursor:pointer;"></div>`).join('')}
    </div>
  </div>
</section>
<style>
  @media (max-width: 900px) {
    #comunidade [style*="grid-template-columns: auto 1fr"] { grid-template-columns:1fr !important; gap:60px !important; }
  }
</style>
`;
}

export function bindTestimonials() {
  const track = document.getElementById('t-track');
  const dots = document.querySelectorAll('.t-dot');
  const videos = document.querySelectorAll('.t-video');
  const total = videos.length;
  let idx = 0;

  function go(i) {
    idx = (i + total) % total;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, di) => d.style.background = di === idx ? 'var(--fg)' : 'var(--border)');
    videos.forEach((v, vi) => {
      const on = vi === idx;
      v.style.opacity = on ? 1 : 0;
      v.style.pointerEvents = on ? 'auto' : 'none';
    });
  }

  document.getElementById('t-prev').addEventListener('click', () => go(idx - 1));
  document.getElementById('t-next').addEventListener('click', () => go(idx + 1));
  dots.forEach(d => d.addEventListener('click', () => go(+d.dataset.idx)));
}
