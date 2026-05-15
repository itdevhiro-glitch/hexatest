document.querySelectorAll('.talent-panel,.mini-card').forEach(el=>{
  el.addEventListener('pointermove',e=>{
    const r=el.getBoundingClientRect();
    el.style.setProperty('--mx',`${e.clientX-r.left}px`);
    el.style.setProperty('--my',`${e.clientY-r.top}px`);
  });
});

// Mobile/touch: panel yang baru disentuh nyala sementara, biar efek hover tetap terasa di HP.
document.querySelectorAll('.talent-panel').forEach(panel=>{
  panel.addEventListener('pointerdown',()=>{
    document.querySelectorAll('.talent-panel.is-active').forEach(p=>p.classList.remove('is-active'));
    panel.classList.add('is-active');
    clearTimeout(panel._activeTimer);
    panel._activeTimer=setTimeout(()=>panel.classList.remove('is-active'),900);
  });
});
