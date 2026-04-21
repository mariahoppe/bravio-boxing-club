export function Partners() {
  const logos = ['EVERLAST','VENUM','CLETO REYES','TITLE','FEDERAÇÃO SC','GRANT','TWINS','RINGHORNS'];
  const set = logos.map(l => `<span class="display" style="font-size:34px; letter-spacing:0.1em; color:var(--fg-dim); white-space:nowrap; opacity:0.35;">${l}</span><span style="color:var(--fg-mute);">✦</span>`).join('');
  return `
<section style="padding:60px 0; border-bottom:1px solid var(--border); overflow:hidden; position:relative;">
  <div style="position:absolute; inset:0; background:linear-gradient(to right, var(--bg), transparent 12%, transparent 88%, var(--bg));  z-index:2; pointer-events:none;"></div>
  <div style="display:flex; gap:40px; align-items:center; width:max-content; animation:marquee 45s linear infinite;">
    ${set}${set}
  </div>
</section>
<style>
@keyframes marquee { from { transform:translateX(0) } to { transform:translateX(-50%) } }
</style>
`;
}
