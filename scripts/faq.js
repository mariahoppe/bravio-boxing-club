import { icons } from './fx.js';

const faqs = [
  { q:'Nunca treinei boxe. Posso começar do zero?', a:'Sim — a turma de Iniciação é feita para isso. Você aprende fundamentos em ritmo seguro, sem sparring nos primeiros meses. A única coisa que pedimos é vontade.' },
  { q:'Preciso de equipamento para a primeira aula?', a:'Não. Emprestamos luvas e bandagens para tua aula experimental. Se continuar, orientamos a compra de luvas próprias e bandagem individual por questões de higiene.' },
  { q:'Tem turma só para mulheres?', a:'Sim — o Círculo Feminino. Turma conduzida por treinadora certificada, ambiente acolhedor, com nível do iniciante ao competitivo. Segundas e quartas.' },
  { q:'Como funciona a mensalidade?', a:'Mensalidade única com acesso livre a todas as turmas do teu nível. Sem fidelidade. Primeiro mês com 50% de desconto para quem vem pela aula experimental.' },
  { q:'Onde fica o clube?', a:'Rua Nereu Ramos, 1234 — bairro Centro, Chapecó/SC. Estacionamento próprio, vestiários completos e entrada independente para a turma infantil.' },
  { q:'Vocês formam atletas para competição?', a:'Sim. O Clube Competitivo é seletivo e forma atletas amadores federados. Convocatória anual em fevereiro — avaliação técnica e de condicionamento obrigatória.' },
];

export function FAQ() {
  return `
<section id="faq" style="padding:160px 0; border-bottom:1px solid var(--border);">
  <div class="container">
    <div class="sec-head">
      <span class="eyebrow">/ 05 · Dúvidas</span>
      <span class="mono" style="font-size:11px; color:var(--fg-mute);">[ O QUE VOCÊ PRECISA SABER ]</span>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 2fr; gap:80px;">
      <div>
        <h2 class="display" data-reveal style="font-size:clamp(40px, 4.8vw, 72px); line-height:0.95; color:var(--fg); margin-bottom:40px;">
          PERGUNTAS <span style="color:var(--primary);">FRANCAS</span>.
        </h2>
        <p class="fade-up" style="font-size:16px; line-height:1.6; color:var(--fg-dim); font-weight:300; margin-bottom:40px;">
          Respostas diretas para dúvidas comuns. Não achou o que procurava? Fala direto com a gente — WhatsApp disponível no rodapé.
        </p>

        <a href="#contato" class="pill"><span>Falar Com o Clube</span><span class="ico">${icons.arrowRight}</span></a>
      </div>

      <div>
        ${faqs.map((f,i) => `
          <div class="faq-item" data-idx="${i}" style="border-bottom:1px solid var(--border);">
            <button class="faq-toggle" style="width:100%; display:flex; justify-content:space-between; align-items:center; padding:28px 0; background:transparent; border:0; color:var(--fg-dim); cursor:pointer; text-align:left; font:inherit; transition:color 0.3s;">
              <span style="font-family:'Work Sans'; font-size:20px; font-weight:400;">${f.q}</span>
              <span class="faq-icon" style="width:40px; height:40px; border:1px solid var(--border); border-radius:999px; display:grid; place-items:center; flex-shrink:0; transition:border-color 0.3s, transform 0.4s, background 0.3s; color:var(--fg-dim);">${icons.plus}</span>
            </button>
            <div class="faq-body" style="max-height:0; overflow:hidden; transition:max-height 0.4s cubic-bezier(0.19,1,0.22,1);">
              <p style="padding:0 0 28px; font-size:15px; line-height:1.65; color:var(--fg-mute); font-weight:300; max-width:620px;">${f.a}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
</section>
<style>
.faq-item.open .faq-toggle { color:var(--fg); }
.faq-item.open .faq-icon { background:var(--primary); border-color:var(--primary); color:#fff; transform:rotate(45deg); }
.faq-toggle:hover { color:var(--fg); }
</style>
`;
}

export function bindFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-toggle');
    const body = item.querySelector('.faq-body');
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
    });
  });
}
