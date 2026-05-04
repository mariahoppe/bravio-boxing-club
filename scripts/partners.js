export function Partners() {
  const stats = [
    { v: '100+', k: 'ATLETAS'      },
    { v: '30+',  k: 'MEDALHAS'     },
    { v: '03',   k: 'ANOS'         },
    { v: '06',   k: 'MODALIDADES'  },
  ];
  const item = (s) => `
    <div style="display:flex; align-items:baseline; gap:18px; white-space:nowrap;">
      <span style="font-family:'Morgen Bravio','Work Sans',sans-serif; font-size:64px; letter-spacing:0.04em; color:var(--primary); font-weight:400; line-height:1; text-transform:uppercase;">${s.v}</span>
      <span class="mono" style="font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color:var(--fg-dim);">${s.k}</span>
    </div>
    <span style="color:var(--primary); opacity:0.5; font-size:14px;">✦</span>
  `;
  const set = stats.map(item).join('');
  return `
<section style="padding:60px 0; border-bottom:1px solid var(--border); overflow:hidden; position:relative;">
  <div style="position:absolute; inset:0; background:linear-gradient(to right, var(--bg), transparent 12%, transparent 88%, var(--bg)); z-index:2; pointer-events:none;"></div>
  <div style="display:flex; gap:48px; align-items:center; width:max-content; animation:marquee 45s linear infinite;">
    ${set}${set}
  </div>
</section>
<style>
@keyframes marquee { from { transform:translateX(0) } to { transform:translateX(-50%) } }
</style>
`;
}
