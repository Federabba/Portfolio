document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('burgerBtn').addEventListener('click', function(){
  const nav = document.querySelector('nav.links');
  const showing = nav.style.display === 'flex';
  nav.style.display = showing ? 'none' : 'flex';
  nav.style.cssText += showing ? '' : 'position:fixed; top:66px; left:0; right:0; background:#F1F6F3; flex-direction:column; padding:20px 32px; border-bottom:1.5px dashed rgba(18,41,43,0.16); gap:14px;';
});

const icons = {
  campaign: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.2-3"/></svg>',
  social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-3.8M8.6 13.5l6.8 3.8"/></svg>',
  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18v12H3z"/><path d="M3 6l9 7 9-7"/></svg>',
  brand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4L12 2z"/></svg>',
  seo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>',
  events: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>',
  print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  ai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01M15 9h.01M8 15c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5"/></svg>',
  pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  grad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M16 8l-2.5 6.5L7 17l2.5-6.5L16 8z"/></svg>'
};

document.getElementById('icEdu').innerHTML = icons.grad;
document.getElementById('icCert').innerHTML = icons.award;
document.getElementById('icSkill').innerHTML = icons.bolt;
document.getElementById('icHobby').innerHTML = icons.compass;

/* ---------------- Skills chips (inside Competenze square) ---------------- */
const skills = ['WordPress','Shopify','Mailchimp','Mailmodo','Hootsuite','Later','Buffer','HubSpot','Trello','Slack','Adobe InDesign','Canva','Microsoft Office','Web development','Loomly','Team Generator','ChatGPT','Claude','GitHub','Vercel','Organisation','Problem-solving','Resourcefulness'];
const skillsChips = document.getElementById('skillsChips');
skills.forEach(s => {
  const el = document.createElement('span');
  el.className = 'qual-chip';
  el.textContent = s;
  skillsChips.appendChild(el);
});

/* ---------------- Esperienze: central alternating timeline ---------------- */
const roles = [
  { date:'May 2021 — Jul 2021', role:'Social Media and Marketing Intern', co:'KBM', logo:'kbm.png', badge:'KBM',
    points:['Social media content, managed via Buffer','Campaigns and data analysis, team collaboration via Trello']},
  { date:'Jul 2021 — Sep 2021', role:'Digital Marketing Intern', co:'The Artisan Food Company', logo:'artisan-food-company.png', badge:'A',
    points:['Connected with influencers and bloggers','Client relationships and social promotion, incl. GiftBox initiatives']},
  { date:'Aug 2021 — Oct 2021', role:'Marketing Assistant', co:'La di da Sweet Treats', logo:'la-di-da.png', badge:'LD',
    points:['Order & shipping management, social media content','Campaign creation and basic SEO']},
  { date:'Oct 2021 — Oct 2022', role:'Marketing Executive', co:'MPM Drive', logo:'mpm-drive.png', badge:'MPM',
    points:['Marketing strategy, website & social media management','Content for UK editorial media, events and market research']},
  { date:'Feb 2022 — Jan 2023', role:'Senior Marketing Executive (Freelance)', co:'Spiran Ltd.', logo:'spiran.png', badge:'SP',
    points:['Social media management, Mailchimp newsletters','Founded and edited the Spiran Magazine']},
  { date:'Oct 2022 — Dec 2023', role:'Digital Marketing Executive', co:'County Broadband', logo:'county-broadband.png', badge:'CB',
    points:['Omnichannel campaigns and lead generation','Email marketing and analytics reporting']},
  { date:'Feb 2024 — Apr 2025', role:'Digital Marketing Executive', co:'Service Graphics', logo:'service-graphics-blue.png', badge:'SG',
    points:['Digital strategy, content and paid advertising','Design for marketing materials and campaigns']},
  { date:'Apr 2025 — Present', role:'Creative Digital Marketing Specialist', co:'Service Graphics', logo:'service-graphics-white.png', badge:'SG',
    points:['Design-led campaigns, brand storytelling, and creative assets','Website development, light HTML/CSS, graphic work for brochures']}
];
const expTrack = document.getElementById('expTrack');
roles.forEach((r, i) => {
  const pos = i % 2 === 0 ? 'pos-top' : 'pos-bottom';
  const node = document.createElement('div');
  node.className = `exp-node ${pos}` + (i===roles.length-1 ? ' active' : '');
  node.innerHTML = `
    <div class="exp-stem"></div>
    <div class="exp-dot"></div>
    <div class="exp-date">${r.date}</div>
    <div class="exp-card">
      <div class="exp-head-row">
        <span class="exp-logo">${r.logo ? `<img src="${r.logo}" alt="${r.co}">` : r.badge}</span>
        <div>
          <div class="exp-role">${r.role}</div>
          <div class="exp-co">${r.co}</div>
        </div>
      </div>
      ${r.points.map(p=>`<div class="exp-pt">${p}</div>`).join('')}
    </div>`;
  expTrack.appendChild(node);
});
const expTrackOuter = document.getElementById('expTrackOuter');
requestAnimationFrame(() => {
  const lastNode = expTrack.querySelector('.exp-node:last-child');
  if (lastNode) {
    const targetLeft = lastNode.offsetLeft - (expTrackOuter.clientWidth - lastNode.offsetWidth) / 2;
    expTrackOuter.scrollLeft = Math.max(0, targetLeft);
  }
});
document.getElementById('expPrev').addEventListener('click', () => expTrackOuter.scrollBy({left:-360, behavior:'smooth'}));
document.getElementById('expNext').addEventListener('click', () => expTrackOuter.scrollBy({left:360, behavior:'smooth'}));

/* ---------------- Portfolio tabs ---------------- */
document.querySelectorAll('.ptab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ptab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.ppanel').forEach(p=>p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.panel).classList.add('active');
  });
});

/* helper to build a work-card element; href points to local assets folders —
   see the note at the end of the chat for how to plug in real files */
function workCard(w){
  const el = document.createElement('div');
  el.className = 'work-card';
  const actionLabel = w.type === 'pdf' ? 'Download PDF' : 'Watch video';
  const href = w.type === 'pdf' ? `${w.file}` : `${w.file}`;
  el.innerHTML = `
    <div class="work-top">
      <div class="work-icon ${w.type}">${icons[w.type]}</div>
      <span class="work-type">${w.type}</span>
    </div>
    <h4>${w.title}</h4>
    <p>${w.desc}</p>
    <span class="work-tag">${w.tag}</span>
    <a href="${href}" target="_blank" class="work-action">${actionLabel} ${icons.arrow}</a>`;
  return el;
}

/* ---------------- My Work (PDF / Video archive) ---------------- */
const workItems = [
  {type:'video', file:'gymshark-reel.mp4', title:'Reel — Gymshark Collaboration', desc:'Video content for the Gymshark partnership.', tag:'Creative media'},
  {type:'pdf', file:'euro2024-visual.pdf', title:'Visual — UEFA Euro 2024 Partnership', desc:'Visual communication materials for the event.', tag:'Graphic design'},
  {type:'pdf', file:'campagna-san-valentino.pdf', title:'Valentine\'s Campaign', desc:'Social content for County Broadband.', tag:'Social media'},
  {type:'pdf', file:'campagna-rugby.pdf', title:'Rugby Campaign', desc:'Social, email marketing and MetaAds.', tag:'Digital marketing'},
  {type:'video', file:'campagna-black-friday.mp4', title:'Black Friday Campaign', desc:'Social engagement plan with gaming elements.', tag:'Social media'},
  {type:'pdf', file:'spiran-magazine-vol1.pdf', title:'Spiran Magazine — Vol. 1', desc:'First issue of the quarterly magazine.', tag:'Content'},
  {type:'pdf', file:'spiran-magazine-vol2.pdf', title:'Spiran Magazine — Vol. 2', desc:'Second issue of the quarterly magazine.', tag:'Content'},
  {type:'pdf', file:'newsletter-esempio.pdf', title:'Newsletter — Sample', desc:'Email marketing and internal communications.', tag:'Email marketing'},
  {type:'video', file:'silverstone-360.mp4', title:'Silverstone @360', desc:'Promotional video for MPM Drive.', tag:'Events'}
];
const workGrid = document.getElementById('workGrid');
const typeFiltersEl = document.getElementById('typeFilters');
const workFilters = [{key:'all', label:'All'},{key:'pdf', label:'PDF'},{key:'video', label:'Video'}];
function renderWork(kind){
  workGrid.innerHTML = '';
  workItems.filter(w => kind==='all' || w.type===kind).forEach(w => workGrid.appendChild(workCard(w)));
}
workFilters.forEach(f => {
  const b = document.createElement('button');
  b.className = 'filter-btn' + (f.key==='all' ? ' active' : '');
  b.textContent = f.label;
  b.addEventListener('click', () => {
    document.querySelectorAll('#typeFilters .filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderWork(f.key);
  });
  typeFiltersEl.appendChild(b);
});
renderWork('all');

/* ---------------- Progetti di Lavoro (inside Portfolio) ---------------- */
const jobProjects = [
  {type:'pdf', file:'progetto-service-graphics.pdf', title:'Service Graphics', desc:'Advertising services — digital strategy, content and brand storytelling.', tag:'Work project'},
  {type:'pdf', file:'progetto-wild-cosmetics.pdf', title:'Wild Cosmetics', desc:'E-commerce, Italian market.', tag:'Work project'},
  {type:'pdf', file:'progetto-county-broadband.pdf', title:'County Broadband', desc:'Full fibre broadband — seasonal campaigns and lead generation.', tag:'Work project'},
  {type:'pdf', file:'progetto-search-smartly.pdf', title:'Search Smartly', desc:'Real estate sector.', tag:'Work project'},
  {type:'pdf', file:'progetto-spiran.pdf', title:'Spiran Ltd.', desc:'Retail/FMCG — website, blog and Spiran Magazine.', tag:'Work project'},
  {type:'video', file:'progetto-mpm-drive.mp4', title:'MPM Drive', desc:'Events and track-day experiences at Silverstone.', tag:'Work project'}
];
const jobProjGrid = document.getElementById('jobProjGrid');
jobProjects.forEach(w => jobProjGrid.appendChild(workCard(w)));

/* ---------------- Case studies ---------------- */
const caseStudies = [
  { title:'Gymshark Collaboration & UEFA Euro 2024', sub:'Service Graphics — brand partnership',
    objective:'Produce visual content and communication materials for two high-profile partnerships: Gymshark and UEFA Euro 2024.',
    role:'Creative Media & Digital Marketing Executive — ideation and production of reels, social content and POS materials.',
    strategy:'Content built for both social and point-of-sale, aligned with the identity of each partner brand.',
    execution:'Reels and visuals for the Gymshark collaboration, visual communication materials for the UEFA Euro 2024 partnership, dedicated POS campaign.',
    tools:['Adobe Creative Suite','Social media','Video editing'],
    results:[{num:'🏆', lbl:'Gold Award — UK Graphic Awards 2024'},{num:'2', lbl:'High-profile partnerships'},{num:'—', lbl:'Add your own real data here'}] },
  { title:'Seasonal Campaigns', sub:'County Broadband — digital marketing',
    objective:'Plan and execute a series of seasonal campaigns to generate leads and increase brand awareness.',
    role:'Digital Marketing Executive — research, ideation, social management, email marketing and post-campaign analysis.',
    strategy:'A different approach for each occasion: social content for Valentine\'s Day, a multi-channel mix for Rugby, gaming elements for Black Friday.',
    execution:'Valentine\'s campaign (social content), Rugby campaign (social, email, MetaAds), Black Friday campaign (social engagement and gaming), Christmas campaign (social and email marketing).',
    tools:['Meta Ads Manager','Email marketing','Social media','Analytics'],
    results:[{num:'4', lbl:'Seasonal campaigns delivered'},{num:'—', lbl:'Add your own real KPIs here'},{num:'—', lbl:'Add your own real data here'}] },
  { title:'Spiran Magazine', sub:'Spiran Ltd. — content marketing',
    objective:'Create a proprietary editorial channel to strengthen brand awareness and generate new leads in the retail/FMCG sector.',
    role:'Founder & Editor — ideation, production and management of the magazine, plus the company website and recipe blog.',
    strategy:'A quarterly magazine combining product storytelling with editorial content, to retain existing customers and attract new ones.',
    execution:'Three issues published (Vol. 1–3), management of the company website and a recipe blog supporting the brand.',
    tools:['Content design','Website management','Digital publishing'],
    results:[{num:'3', lbl:'Issues published'},{num:'—', lbl:'Add your own real KPIs here'},{num:'—', lbl:'Add your own real data here'}] }
];
const csGrid = document.getElementById('csGrid');
caseStudies.forEach((c, i) => {
  const card = document.createElement('div');
  card.className = 'cs-card';
  card.innerHTML = `
    <div class="cs-head">
      <div class="cs-head-left">
        <div class="cs-index">0${i+1}</div>
        <div><div class="cs-title">${c.title}</div><div class="cs-sub">${c.sub}</div></div>
      </div>
      <svg class="cs-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </div>
    <div class="cs-body"><div class="cs-body-inner">
      <div class="cs-cols">
        <div class="cs-block"><div class="cs-block-label">Objective</div><p>${c.objective}</p></div>
        <div class="cs-block"><div class="cs-block-label">My role</div><p>${c.role}</p></div>
        <div class="cs-block"><div class="cs-block-label">Strategy</div><p>${c.strategy}</p></div>
      </div>
      <div class="cs-block" style="margin-bottom:18px"><div class="cs-block-label">Creative execution</div><p>${c.execution}</p></div>
      <div class="cs-block" style="margin-bottom:6px"><div class="cs-block-label">Tools used</div><div class="cs-tools">${c.tools.map(t=>`<span class="cs-tool">${t}</span>`).join('')}</div></div>
      <div class="cs-results">${c.results.map(r=>`<div class="cs-result"><div class="num">${r.num}</div><div class="lbl">${r.lbl}</div></div>`).join('')}</div>
      <div class="cs-actions">
        <a href="case-study-${i+1}.pdf" target="_blank" class="btn btn-outline btn-sm">${icons.pdf} Download PDF</a>
        <a href="case-study-${i+1}.mp4" target="_blank" class="btn btn-outline btn-sm">${icons.video} Watch video</a>
      </div>
    </div></div>`;
  card.querySelector('.cs-head').addEventListener('click', () => card.classList.toggle('open'));
  csGrid.appendChild(card);
});

/* ---------------- Case Studies by Sector ---------------- */
const interviewCaseStudies = [
  { sector:'FMCG', title:'La Tua Pasta', sub:'Food marketing campaign & brand strategy',
    brief:'Plan a food marketing campaign for an artisan Italian pasta brand, from brand messaging through to budget.',
    approach:'Built on a full SWOT analysis and audience segmentation (B2C lifestyle audience and B2B trade/hospitality), then developed two distinct campaign concepts to reach each side of that audience.',
    execution:'"Traditions Matter" — a black-and-white campaign using an original personal photograph to evoke authenticity and Italian tradition, aimed at B2C. "You & Us Originally Tasty" — a vibrant product-led campaign highlighting freshness and the colours of the Italian flag, aimed at B2B trade press and hospitality buyers.',
    skills:['SWOT analysis','Audience segmentation','Campaign concept development','Original photography','RACE framework','Budget planning'],
    pdfs:[{label:'Campaign Deck', file:'la-tua-pasta-campaign.pdf'},{label:'Coordinator Task', file:'la-tua-pasta-coordinator.pdf'}] }
];

const sectors = ['All','Advertising','E-commerce & Fashion','Estates','FMCG'];
const sectorFiltersEl = document.getElementById('sectorFilters');
const interviewGrid = document.getElementById('interviewGrid');

function renderInterviewCard(c, i){
  const card = document.createElement('div');
  card.className = 'cs-card';
  card.innerHTML = `
    <div class="cs-head">
      <div class="cs-head-left">
        <div class="cs-index">${c.sector}</div>
        <div><div class="cs-title">${c.title}</div><div class="cs-sub">${c.sub}</div></div>
      </div>
      <svg class="cs-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </div>
    <div class="cs-body"><div class="cs-body-inner">
      <div class="cs-cols">
        <div class="cs-block"><div class="cs-block-label">Brief</div><p>${c.brief}</p></div>
        <div class="cs-block"><div class="cs-block-label">Approach</div><p>${c.approach}</p></div>
        <div class="cs-block"><div class="cs-block-label">Execution</div><p>${c.execution}</p></div>
      </div>
      <div class="cs-block" style="margin-bottom:6px"><div class="cs-block-label">Skills demonstrated</div><div class="cs-tools">${c.skills.map(s=>`<span class="cs-tool">${s}</span>`).join('')}</div></div>
      <div class="cs-actions" style="margin-top:18px">
        ${c.pdfs.map(p=>`<a href="${p.file}" target="_blank" class="btn btn-outline btn-sm">${icons.pdf} ${p.label}</a>`).join('')}
      </div>
    </div></div>`;
  card.querySelector('.cs-head').addEventListener('click', () => card.classList.toggle('open'));
  return card;
}

function renderInterviewGrid(sector){
  interviewGrid.innerHTML = '';
  interviewCaseStudies.filter(c => sector==='All' || c.sector===sector).forEach((c,i) => interviewGrid.appendChild(renderInterviewCard(c,i)));
}
sectors.forEach(s => {
  const b = document.createElement('button');
  b.className = 'filter-btn' + (s==='All' ? ' active' : '');
  b.textContent = s;
  b.addEventListener('click', () => {
    document.querySelectorAll('#sectorFilters .filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderInterviewGrid(s);
  });
  sectorFiltersEl.appendChild(b);
});
renderInterviewGrid('All');

/* ---------------- Reveal ---------------- */
const revealTargets = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); observer.unobserve(e.target); } });
}, {threshold:0.15});
revealTargets.forEach(t => observer.observe(t));