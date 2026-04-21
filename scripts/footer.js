import { icons } from './fx.js';

export function Footer() {
  return `
<footer id="contato" style="padding:120px 0 60px; background:var(--bg); position:relative;">
  <div class="container">

    <!-- Giant wordmark -->
    <div style="margin-bottom:80px;">
      <h2 class="brand-mark" data-reveal style="font-size:clamp(80px, 16vw, 260px); line-height:0.85; color:var(--fg);">
        BRAV<span style="color:var(--primary);">IO</span>
      </h2>
    </div>

    <div style="display:grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap:48px; padding-top:48px; border-top:1px solid var(--border);">
      <div>
        <p class="serif" style="font-size:28px; line-height:1.2; color:var(--fg); max-width:420px; margin-bottom:28px;">Esculpe teu caminho — golpe a golpe.</p>
        <a href="#agenda" class="pill">
          <span>Aula Experimental</span>
          <span class="ico">${icons.arrowRight}</span>
        </a>
      </div>

      <div>
        <div class="mono" style="font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--fg-mute); margin-bottom:20px;">Horário</div>
        <div style="font-size:14px; line-height:1.9; color:var(--fg-dim);">
          Seg a Sex<br>06h — 22h<br>
          <span style="color:var(--fg-mute);">Sábado · 08h — 12h</span>
        </div>
      </div>

      <div>
        <div class="mono" style="font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--fg-mute); margin-bottom:20px;">Endereço</div>
        <div style="font-size:14px; line-height:1.9; color:var(--fg-dim);">
          R. Nereu Ramos, 1234<br>Centro · Chapecó / SC<br>
          <span style="color:var(--fg-mute);">89801-520</span>
        </div>
      </div>

      <div>
        <div class="mono" style="font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--fg-mute); margin-bottom:20px;">Contato</div>
        <div style="font-size:14px; line-height:1.9; color:var(--fg-dim);">
          (49) 9 9999-9999<br>contato@bravio.club<br>
          <div style="display:flex; gap:8px; margin-top:14px;">
            ${['IG','WP','YT'].map(s => `<a href="#" class="mono" style="width:36px; height:36px; border:1px solid var(--border); border-radius:10px; display:grid; place-items:center; font-size:10px; color:var(--fg-dim); text-decoration:none; letter-spacing:0.1em; transition:all 0.3s;" onmouseover="this.style.background='var(--primary)'; this.style.color='#fff'; this.style.borderColor='var(--primary)'" onmouseout="this.style.background='transparent'; this.style.color='var(--fg-dim)'; this.style.borderColor='var(--border)'">${s}</a>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; padding-top:60px; margin-top:80px; border-top:1px solid var(--border); font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:var(--fg-mute);" class="mono">
      <span>© 2026 <span class="brand-mark" style="font-size:14px; letter-spacing:0.04em; text-transform:none;">BRAVIO</span> BOXING CLUB</span>
      <div style="display:flex; gap:28px;">
        <a href="#" style="color:var(--fg-mute); text-decoration:none;" onmouseover="this.style.color='var(--fg)'" onmouseout="this.style.color='var(--fg-mute)'">Código de Conduta</a>
        <a href="#" style="color:var(--fg-mute); text-decoration:none;" onmouseover="this.style.color='var(--fg)'" onmouseout="this.style.color='var(--fg-mute)'">Privacidade</a>
        <a href="#" style="color:var(--fg-mute); text-decoration:none;" onmouseover="this.style.color='var(--fg)'" onmouseout="this.style.color='var(--fg-mute)'">Legal</a>
      </div>
      <span>CHAPECÓ · SC · BR</span>
    </div>
  </div>
</footer>
`;
}
