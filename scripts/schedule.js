import { icons } from './fx.js';

const classes = [
  {
    id:'classico', n:'01', title:'BOXE CLÁSSICO',
    tag:'Todos os públicos',
    desc:'Voltada para todos os públicos — de iniciantes a praticantes experientes. Fundamentos do boxe combinados com atividades e métodos tradicionais de combate. Técnica da escola, adaptando a intensidade e o nível de desafio para cada perfil. Sempre equilibrando aprendizado, precisão e superação.',
    level:'Todos os níveis',
    duration:'60min',
    color:'var(--primary)',
    img:'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id:'escola', n:'02', title:'ESCOLA DE BOXE',
    tag:'Desenvolvimento técnico',
    desc:'Dedicada ao desenvolvimento técnico e à construção de uma base sólida. Fundamentos trabalhados em detalhe — postura, movimentação, esquivas, defesas e golpes com precisão. Aprimora a técnica em cada detalhe, garantindo evolução com consciência e qualidade nos movimentos.',
    level:'Base técnica',
    duration:'60min',
    color:'oklch(0.62 0.24 16)',
    img:'https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id:'boxe360', n:'03', title:'BOXE 360',
    tag:'Gasto calórico · diversão',
    desc:'Criada para quem prefere um treino mais descontraído, com foco em gasto calórico e diversão — sem prioridade em técnica apurada. Também é a escolha ideal para quem não se sente à vontade com exercícios em dupla e busca desafios individuais com ênfase em condicionamento físico e cardio.',
    level:'Livre',
    duration:'60min',
    color:'oklch(0.62 0.24 16)',
    img:'https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id:'kids', n:'04', title:'BOXE KIDS',
    tag:'Crianças · lúdico',
    desc:'Ensinamos as crianças através de uma abordagem lúdica, onde o aprendizado é integrado à prática do boxe. Com instrutor formado pela Federação Catarinense de Boxe, as aulas desenvolvem o físico, mental e emocional — fundamentos do esporte, disciplina, respeito e trabalho em equipe. Coordenação motora, concentração e autoconfiança.',
    level:'Infantil',
    duration:'50min',
    color:'oklch(0.62 0.24 16)',
    img:'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id:'presparring', n:'05', title:'PRÉ-SPARRING',
    tag:'Etapa técnica de combate',
    desc:'A etapa que antecede o contato pleno — com ênfase em defesa, esquivas e ataques. Foco na técnica, com exercícios controlados e sérios, preparando os alunos para uma prática de combate tática. A escolha de quem quer intensificar os treinos e se preparar para competições.',
    level:'Intermediário',
    duration:'60min',
    color:'oklch(0.62 0.24 16)',
    img:'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id:'sparring', n:'06', title:'SPARRING',
    tag:'Combate pleno',
    desc:'A imersão pura no boxe — onde a prática do combate se torna essencial. Faz parte da rotina dos boxeadores, mas entendemos que não é indicada para todos. Para quem tem o desejo de enfrentar desafios maiores e busca competição, seja em treinos internos ou externas. Participação não é obrigatória.',
    level:'Avançado · seletivo',
    duration:'60min',
    color:'oklch(0.62 0.24 16)',
    img:'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000&auto=format&fit=crop'
  },
];

// Weekly grid data — matches the photo cronograma
// slot codes: CL = Clássico · LV = Livre · EB = Escola de Boxe · 360 = Boxe 360
// KD = Kids · PS = Pré-Sparring · SC = Sparring & Clássico · SP = Sparring · (empty) = fechado
const hours = ['06h','07h','08h','08h30','09h','10h','14h','15h','16h','17h','18h','18h30','19h30','20h30','21h30'];
const days = ['SEG','TER','QUA','QUI','SEX','SÁB'];
const grid = {
  '06h':   [null, 'CL', 'CL', 'CL', null, null],
  '07h':   [null, 'LV', 'LV', 'LV', null, null],
  '08h':   ['CL', null, 'LV', null, 'CL', null],
  '08h30': [null, 'EB', null, 'EB', null, null],
  '09h':   [null, '360','CL', '360', null, 'CL'],
  '10h':   [null, 'KD', null, 'KD', null, 'SP'],
  '14h':   [null, null, null, null, 'CL', 'CL'],
  '15h':   [null, null, null, null, 'KD', null],
  '16h':   ['360','CL', 'PS', 'CL', '360', null],
  '17h':   ['LV', null, 'LV', null, 'LV', null],
  '18h':   ['EB', null, null, null, 'EB', null],
  '18h30': ['CL', 'SC', 'CL', 'CL', 'SC', null],
  '19h30': ['CL', 'CL', '360','CL', 'SC', null],
  '20h30': ['PS', 'CL', 'PS', 'CL', null, null],
  '21h30': ['SC', null, 'CL', null, null, null],
};
const legend = {
  'CL':  { label:'Clássico',     bg:'var(--primary)',           fg:'#fff'  },
  'EB':  { label:'Escola',       bg:'oklch(0.62 0.24 16 / 0.35)', fg:'var(--fg)' },
  '360': { label:'Boxe 360',     bg:'oklch(0.62 0.24 16 / 0.6)', fg:'#fff'  },
  'KD':  { label:'Kids',         bg:'oklch(0.7 0.14 60 / 0.3)',  fg:'var(--fg)' },
  'PS':  { label:'Pré-Sparring', bg:'oklch(0.35 0.15 16)',       fg:'#fff'  },
  'SP':  { label:'Sparring',     bg:'oklch(0.45 0.12 50)',       fg:'#fff'  },
  'SC':  { label:'Sparring & Clássico', bg:'oklch(0.4 0.18 20)', fg:'#fff' },
  'LV':  { label:'Livre',        bg:'transparent',              fg:'var(--fg-mute)', border:true },
};

export function Schedule() {
  return `
<section id="agenda" style="padding:160px 0; border-bottom:1px solid var(--border); position:relative;">
  <div class="container">
    <div class="sec-head">
      <span class="eyebrow">/ 03 · Agenda</span>
      <span class="mono" style="font-size:11px; color:var(--fg-mute);">[ MODALIDADES & CRONOGRAMA 2026 · v02 ]</span>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:80px; align-items:end; margin-bottom:64px;">
      <h2 class="display" data-reveal style="font-size:clamp(40px, 5.8vw, 88px); line-height:0.95; color:var(--fg);">
        ESCOLHA TUA <span style="color:var(--primary);">FREQUÊNCIA</span>.
      </h2>
      <p class="fade-up" style="font-size:17px; line-height:1.6; color:var(--fg-dim); font-weight:300; max-width:460px;">
        Seis modalidades, do primeiro contato ao combate pleno. Passe o mouse sobre cada uma para ver a descrição completa — e confira o cronograma da semana logo abaixo.
      </p>
    </div>

    <!-- ===== MODALIDADES LIST ===== -->
    <div id="schedule-wrap" style="position:relative; margin-bottom:100px;">
      <div id="hover-card" style="position:fixed; pointer-events:none; z-index:60; width:320px; height:400px; border-radius:18px; overflow:hidden; opacity:0; transform:translate(-50%,-50%) scale(0.9); transition:opacity 0.3s; box-shadow:0 30px 80px rgba(0,0,0,0.5); border:1px solid var(--border);">
        ${classes.map((c,i) => `<img class="hover-img" data-idx="${i}" src="${c.img}" alt="${c.title}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:grayscale(0.2); opacity:0; transition:opacity 0.4s;">`).join('')}
        <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.85), transparent 60%);"></div>
        <div style="position:absolute; bottom:18px; left:18px; right:18px; color:#fff;">
          <div id="hover-tag" class="mono" style="font-size:10px; letter-spacing:0.2em; text-transform:uppercase; opacity:0.7;">—</div>
          <div id="hover-title" class="display" style="font-size:22px; margin-top:6px;">—</div>
        </div>
      </div>

      <div id="schedule-list" style="border-top:1px solid var(--border);">
        ${classes.map((c,i) => `
          <div class="sched-row" data-idx="${i}" style="display:grid; grid-template-columns: 80px 1.4fr 1fr 180px 60px; gap:24px; padding:32px 0; border-bottom:1px solid var(--border); align-items:center; cursor:pointer; transition:padding 0.4s, background 0.3s;">
            <div class="mono" style="font-size:12px; color:var(--fg-mute);">${c.n}</div>
            <div>
              <h3 class="display" style="font-size:34px; letter-spacing:-0.01em; line-height:1; color:var(--fg);">${c.title}</h3>
              <div class="mono sched-tag" style="font-size:11px; color:var(--primary); margin-top:8px; letter-spacing:0.14em; text-transform:uppercase;">${c.tag}</div>
            </div>
            <div class="sched-desc" style="font-size:13px; line-height:1.55; color:var(--fg-dim); max-width:420px; max-height:0; overflow:hidden; opacity:0; transition:max-height 0.5s, opacity 0.4s;">
              ${c.desc}
            </div>
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
              <span class="mono" style="font-size:10px; padding:5px 12px; border:1px solid var(--border); border-radius:999px; color:var(--fg-dim); letter-spacing:0.14em; text-transform:uppercase;">${c.level}</span>
              <span class="mono" style="font-size:10px; padding:5px 12px; border:1px solid var(--border); border-radius:999px; color:var(--fg-dim); letter-spacing:0.14em; text-transform:uppercase;">${c.duration}</span>
            </div>
            <div class="sched-arrow" style="width:42px; height:42px; border:1px solid var(--border); border-radius:999px; display:grid; place-items:center; color:var(--fg-dim); transition:background 0.3s, color 0.3s, border-color 0.3s; justify-self:end;">${icons.plus}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- ===== CRONOGRAMA WEEKLY GRID ===== -->
    <div class="fade-up" style="margin-bottom:40px; display:flex; justify-content:space-between; align-items:end;">
      <div>
        <div class="eyebrow" style="color:var(--fg-mute);">Cronograma de Horários</div>
        <h3 class="display" style="font-size:clamp(28px, 3.2vw, 48px); line-height:1; margin-top:10px; color:var(--fg);">SEMANA · <span style="color:var(--primary);">2026 / v02</span></h3>
      </div>
      <div style="display:flex; gap:14px; flex-wrap:wrap; justify-content:flex-end; max-width:580px;">
        ${Object.entries(legend).map(([k,v]) => `
          <div style="display:flex; align-items:center; gap:8px;">
            <div style="width:14px; height:14px; border-radius:3px; background:${v.bg}; ${v.border ? 'border:1px solid var(--border);' : ''}"></div>
            <span class="mono" style="font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:var(--fg-dim);">${v.label}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="border:1px solid var(--border); border-radius:var(--radius); overflow:hidden; background:var(--bg-2);">
      <!-- Days header -->
      <div style="display:grid; grid-template-columns: 80px repeat(6, 1fr); background:var(--bg-3); border-bottom:1px solid var(--border);">
        <div class="mono" style="padding:14px 12px; font-size:10px; letter-spacing:0.18em; color:var(--fg-mute); text-transform:uppercase;">HORA</div>
        ${days.map(d => `<div class="mono" style="padding:14px 12px; font-size:11px; letter-spacing:0.22em; color:var(--fg); text-transform:uppercase; text-align:center; border-left:1px solid var(--border); font-weight:600;">${d}</div>`).join('')}
      </div>
      <!-- Rows -->
      ${hours.map(h => `
        <div style="display:grid; grid-template-columns: 80px repeat(6, 1fr); border-bottom:1px solid var(--border);">
          <div class="mono" style="padding:14px 12px; font-size:11px; letter-spacing:0.1em; color:var(--fg-mute); display:flex; align-items:center;">${h}</div>
          ${grid[h].map(code => {
            if (!code) return `<div style="border-left:1px solid var(--border); background:repeating-linear-gradient(45deg, transparent 0 4px, color-mix(in oklab, var(--fg-mute) 10%, transparent) 4px 5px); min-height:44px;"></div>`;
            const l = legend[code];
            return `<div class="slot" data-code="${code}" style="border-left:1px solid var(--border); background:${l.bg}; ${l.border ? 'border:1px dashed var(--border); border-left:1px solid var(--border);' : ''} color:${l.fg}; display:flex; align-items:center; justify-content:center; padding:12px 8px; font-size:11px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; text-align:center; cursor:pointer; transition:transform 0.2s, filter 0.2s;">${l.label}</div>`;
          }).join('')}
        </div>
      `).join('')}
    </div>

    <!-- Booking bar -->
    <div class="fade-up" style="margin-top:60px; padding:28px 32px; background:var(--bg-2); border:1px solid var(--border); border-radius:var(--radius); display:flex; justify-content:space-between; align-items:center; gap:32px;">
      <div style="display:flex; gap:40px; align-items:center;">
        <div>
          <div class="mono" style="font-size:10px; letter-spacing:0.2em; color:var(--fg-mute); text-transform:uppercase;">Próxima turma aberta</div>
          <div class="serif" style="font-size:26px; color:var(--fg); margin-top:4px;">Terça-feira · Escola de Boxe · 08h30</div>
        </div>
        <div style="width:1px; height:44px; background:var(--border);"></div>
        <div>
          <div class="mono" style="font-size:10px; letter-spacing:0.2em; color:var(--fg-mute); text-transform:uppercase;">Vagas restantes</div>
          <div style="display:flex; align-items:center; gap:10px; margin-top:4px;">
            <div style="width:140px; height:6px; background:var(--bg-3); border-radius:999px; overflow:hidden;">
              <div style="width:65%; height:100%; background:var(--primary);"></div>
            </div>
            <span class="mono" style="font-size:13px; color:var(--fg);">07 / 20</span>
          </div>
        </div>
      </div>
      <a href="#" class="pill">
        <span>Agendar Aula Experimental</span>
        <span class="ico">${icons.arrowRight}</span>
      </a>
    </div>
  </div>
</section>
<style>
.sched-row:hover { background:var(--bg-2); padding-left:24px; padding-right:24px; }
.sched-row.open { background:var(--bg-2); padding-left:24px; padding-right:24px; }
.sched-row.open .sched-desc { max-height:200px; opacity:1; }
.sched-row.open .sched-arrow { background:var(--primary); color:#fff; border-color:var(--primary); transform:rotate(45deg); }
.slot:hover { filter:brightness(1.2); transform:scale(1.02); z-index:2; position:relative; }
</style>
`;
}

export function bindSchedule() {
  const card = document.getElementById('hover-card');
  const imgs = card.querySelectorAll('.hover-img');
  const titleEl = document.getElementById('hover-title');
  const tagEl = document.getElementById('hover-tag');
  const rows = document.querySelectorAll('.sched-row');

  let targetX = 0, targetY = 0, curX = 0, curY = 0;
  function animate() {
    curX += (targetX - curX) * 0.18;
    curY += (targetY - curY) * 0.18;
    card.style.transform = `translate(calc(${curX}px - 50%), calc(${curY}px - 50%)) scale(${card.classList.contains('on') ? 1 : 0.9})`;
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('mousemove', (e) => { targetX = e.clientX + 180; targetY = e.clientY; });

  rows.forEach((row, i) => {
    row.addEventListener('mouseenter', () => {
      card.style.opacity = '1';
      card.classList.add('on');
      imgs.forEach(img => img.style.opacity = '0');
      imgs[i].style.opacity = '1';
      titleEl.textContent = row.querySelector('h3').textContent;
      tagEl.textContent = row.querySelector('.sched-tag').textContent;
    });
    row.addEventListener('mouseleave', () => {
      card.style.opacity = '0';
      card.classList.remove('on');
    });
    row.addEventListener('click', () => {
      row.classList.toggle('open');
    });
  });
}
