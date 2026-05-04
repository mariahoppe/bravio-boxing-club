// Modalidades — vertical scrolling/marquee cards inspired by Instagram carousel
// White paper-card with red title + body, on a textured red background.

const modalidades = [
    {
      title: 'BOXE CLÁSSICO',
      body: `A aula de Boxe Clássico é voltada para todos os públicos, desde <b>iniciantes até praticantes mais experientes</b>. Nela, os alunos aprendem os fundamentos do boxe, combinando atividades e métodos tradicionais de combate.\n\nO foco está na técnica da escola, adaptando a intensidade e o nível de desafio para atender à diversidade de perfis, <b>sempre equilibrando aprendizado, precisão e superação.</b>`
    },
    {
      title: 'ESCOLA DE BOXE',
      body: `A modalidade Escola do Boxe é dedicada ao desenvolvimento técnico, com foco na construção de uma base sólida. Nessa aula, os fundamentos do boxe são trabalhados de forma detalhada, enfatizando postura, movimentação, esquivas, defesas e golpes com precisão.\n\nO objetivo é aprimorar a técnica em cada detalhe, garantindo que o aluno evolua com consciência e qualidade nos movimentos, independentemente do nível de experiência.`
    },
    {
      title: 'BOXE 360',
      body: `O Boxe 360 foi criado para dois perfis de aluno:\n\nAqueles que preferem um treino mais descontraído, focando no <b>gasto calórico</b> e na <b>diversão</b>, sem se importar tanto com a técnica ou a base.\n\nAlunos que não se sentem à vontade com exercícios em dupla e buscam <b>desafios individuais que priorizam o condicionamento físico e o cardio.</b>`
    },
    {
      title: 'BOXE KIDS',
      body: `Na modalidade <b>Boxe Kids</b>, ensinamos as crianças através de uma abordagem lúdica, onde o aprendizado é integrado à prática do boxe.\n\nCom um instrutor <b>formado pela Federação Catarinense de Boxe</b>, as aulas focam no desenvolvimento <b>físico, mental e emocional</b>, abordando fundamentos do esporte, disciplina, respeito e trabalho em equipe.\n\n<b>As crianças aprimoram habilidades motoras, concentração e autoconfiança</b>, preparando-se para superarem obstáculos e evoluírem tanto no esporte quanto no seu dia a dia.`
    },
    {
      title: 'PRÉ-SPARRING',
      body: `A aula de pré-sparring é a etapa que antecipa o contato pleno no sparring, <b>com ênfase em defesa, esquivas e ataques.</b>\n\nO foco é a técnica, com exercícios controlados e sérios, preparando os alunos para uma prática de combate tática. É a escolha de quem quer intensificar seus treinos e se preparar para competições.`
    },
    {
      title: 'SPARRING',
      body: `<b>O sparring é a imersão pura no boxe</b>, onde a prática do combate se torna essencial. Sabemos que essa modalidade faz parte da rotina dos boxeadores, mas entendemos que ela não é indicada para todos os alunos, o que é totalmente aceitável.\n\n<b>O sparring é para quem tem o desejo de enfrentar desafios maiores e quem busca competição</b>, seja em treinos internos ou competições externas. A participação não é obrigatória para todos.`
    },
  ];
  
  function card(m, accent = '#7a1a1f') {
    const html = m.body.replace(/\n\n/g, '</p><p style="margin:0 0 14px 0;">').replace(/\n/g,'<br>');
    return `
      <div class="mod-card" style="
        flex: 0 0 auto;
        width: 360px;
        background: #f5f0e6;
        border-radius: 28px;
        padding: 44px 38px 34px;
        box-shadow:
          0 1px 0 rgba(255,255,255,0.7) inset,
          0 30px 60px -20px rgba(0,0,0,0.35),
          0 8px 16px -8px rgba(0,0,0,0.25);
        position: relative;
        color: ${accent};
        font-family: 'Work Sans', sans-serif;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 520px;
        transform: rotate(-0.3deg);
      ">
        <!-- subtle paper crease -->
        <div aria-hidden="true" style="display:none;"></div>
  
        <h3 class="display" style="
          font-family: 'Morgen Bravio','Work Sans',sans-serif;
          font-weight: 400;
          font-size: 26px;
          letter-spacing: 0.04em;
          color: ${accent};
          margin: 0;
          text-transform: uppercase;
          line-height: 1;
        ">${m.title}</h3>
  
        <div style="font-size:14.5px; line-height:1.55; color:${accent}; font-weight:400;">
          <p style="margin:0 0 14px 0;">${html}</p>
        </div>
  
        <div style="margin-top:auto; display:flex; flex-direction:column; align-items:center; gap:2px; padding-top:14px;">
          <div class="brand-mark" style="font-family:'Morgen Bravio','Work Sans',sans-serif; font-size:30px; color:${accent}; letter-spacing:0.04em; line-height:1;">Bravio</div>
          <div class="mono" style="font-size:8px; letter-spacing:0.32em; color:${accent}; opacity:0.85;">BOXING CLUB</div>
        </div>
      </div>
    `;
  }
  
  export function Modalidades() {
    const cards = modalidades.map(m => card(m)).join('');
    return `
  <section id="modalidades" style="position:relative; padding:160px 0 140px; border-bottom:1px solid var(--border); overflow:hidden; background: #1a0608;">
    <!-- red textured background -->
    <div aria-hidden="true" style="position:absolute; inset:0; background:
      radial-gradient(120% 80% at 50% 0%, #b41e26 0%, #7a1418 55%, #3d0a0d 100%);"></div>
    <div aria-hidden="true" style="position:absolute; inset:0; opacity:0.18; mix-blend-mode:overlay; background:
      repeating-linear-gradient(45deg, transparent 0 2px, rgba(0,0,0,0.4) 2px 3px),
      repeating-linear-gradient(-45deg, transparent 0 2px, rgba(255,255,255,0.06) 2px 3px);"></div>
    <div aria-hidden="true" style="position:absolute; inset:0; background:
      radial-gradient(60% 40% at 20% 80%, rgba(0,0,0,0.5), transparent 70%),
      radial-gradient(60% 40% at 80% 20%, rgba(0,0,0,0.4), transparent 70%);"></div>
  
    <div class="container" style="position:relative; z-index:2;">
      <div class="sec-head" style="border-bottom-color: rgba(255,255,255,0.18);">
        <span class="eyebrow" style="color:rgba(255,255,255,0.85);">/ 03 · Modalidades</span>
        <span class="mono" style="font-size:11px; color:rgba(255,255,255,0.55);">[ 06 CAMINHOS · UM ESPORTE ]</span>
      </div>
  
      <div style="display:flex; justify-content:space-between; align-items:end; gap:40px; margin-bottom:60px;">
        <h2 class="display" data-reveal style="font-size:clamp(40px, 5.8vw, 88px); line-height:0.95; color:#fff; max-width:1000px; margin:0;">
          VEJA QUAL DAS NOSSAS <span style="color:#f5d2a5;">MODALIDADES</span> É A IDEAL PARA VOCÊ.
        </h2>
        <div class="mono" style="font-size:11px; letter-spacing:0.22em; color:rgba(255,255,255,0.55); white-space:nowrap;">FAÇA PARTE DISSO ✦</div>
      </div>
    </div>
  
    <!-- horizontal marquee strip -->
    <div class="mod-marquee-mask" style="position:relative; z-index:2; --mask: linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%); -webkit-mask-image: var(--mask); mask-image: var(--mask);">
      <div class="mod-marquee" style="display:flex; gap:30px; padding: 30px 4vw; width: max-content; animation: mod-scroll 60s linear infinite;">
        ${cards}
        ${cards}
      </div>
    </div>
  
    <div class="container" style="position:relative; z-index:2; margin-top:50px; display:flex; justify-content:space-between; align-items:center; gap:20px;">
      <div class="mono" style="font-size:10px; letter-spacing:0.28em; color:rgba(255,255,255,0.45);">↔ ARRASTE / PASSE O MOUSE PARA PAUSAR</div>
      <div class="mono" style="font-size:10px; letter-spacing:0.28em; color:rgba(255,255,255,0.45);">06 / 06</div>
    </div>
  </section>
  
  <style>
    @keyframes mod-scroll {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    #modalidades .mod-marquee:hover { animation-play-state: paused; }
    #modalidades .mod-card:nth-child(2n) { transform: rotate(0.4deg); }
    #modalidades .mod-card:nth-child(3n) { transform: rotate(-0.5deg); }
    #modalidades .mod-card:nth-child(5n) { transform: rotate(0.6deg); }
    @media (max-width: 700px) {
      #modalidades .mod-card { width: 300px; min-height: 480px; padding: 36px 30px 28px; }
    }
  </style>
  `;
  }
  
  export function bindModalidades() {}
  