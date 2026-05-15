import { SITE_CONFIG, TALENTS } from './data.js';
const $ = (q, ctx=document) => ctx.querySelector(q);
const $$ = (q, ctx=document) => [...ctx.querySelectorAll(q)];

export function initNav(){
  const btn = $('.hamb'); const links = $('.nav-links');
  if(btn && links) btn.addEventListener('click',()=>links.classList.toggle('open'));
}
export function talentImage(slug){ return `assets/img/talents/${slug}.svg`; }
export function renderTalents(target='#talentGrid'){
 const wrap=$(target); if(!wrap) return;
 wrap.innerHTML=TALENTS.map(t=>`<a class="talent-card theme-${t.theme}" href="profile.html?id=${t.slug}" aria-label="Open profile ${t.name}"><div class="talent-banner"><span class="talent-icon">${t.icon}</span><span class="talent-name">${t.name}</span></div><div class="talent-info"><span class="eyebrow">${t.debut}</span><h3>${t.name}</h3><p class="muted">${t.title}</p><small class="muted">${t.accent}</small><div class="tags">${t.tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div></div></a>`).join('');
}
export function renderSchedule(target='#scheduleRows'){
 const wrap=$(target); if(!wrap) return;
 wrap.innerHTML=TALENTS.map(t=>`<div class="row"><b>${t.name}</b><span class="muted">${t.title}</span><span>${t.schedule}</span></div>`).join('');
}
export function initIndex(){
 const status=$('#statusText');
 if(SITE_CONFIG.maintenance){
   status.textContent = SITE_CONFIG.maintenanceMessage;
   $('#enterBtn')?.setAttribute('hidden','hidden');
   return;
 }
 let n=0; const words=['checking constellation','syncing talent data','opening Hexaria gate'];
 const timer=setInterval(()=>{ if(status) status.textContent=words[n++%words.length]+'...';},650);
 setTimeout(()=>{clearInterval(timer); location.href='home.html';},2200);
 $('#enterBtn')?.addEventListener('click',()=>location.href='home.html');
}
export function initProfile(){
 const slug=new URLSearchParams(location.search).get('id') || TALENTS[0].slug;
 const t=TALENTS.find(x=>x.slug===slug) || TALENTS[0];
 document.title=`${t.name} — Hexaria`;
 $('#profileRoot').innerHTML=`<section class="profile-cover theme-${t.theme}"><div class="container"><span class="talent-icon">${t.icon}</span><h1>${t.name}</h1><p>${t.title}</p></div></section><section class="profile-hero container"><div class="profile-art profile-banner theme-${t.theme}"><span>${t.icon}</span></div><div class="profile-copy"><span class="eyebrow">${t.debut}</span><h1>${t.name}</h1><p class="muted">${t.quote}</p><p>${t.bio}</p><div class="profile-stats"><div class="stat"><b>Constellation</b><br><span class="muted">${t.constellation}</span></div><div class="stat"><b>Theme</b><br><span class="muted">${t.accent}</span></div><div class="stat"><b>Schedule</b><br><span class="muted">${t.schedule}</span></div></div><div class="tags">${t.tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div><div class="actions"><a class="btn primary" href="${t.social.youtube}">YouTube</a><a class="btn" href="${t.social.twitter}">X/Twitter</a><a class="btn" href="${t.social.discord}">Discord</a></div></div></section>`;
}
window.Hexaria={initNav,renderTalents,renderSchedule,initIndex,initProfile};
