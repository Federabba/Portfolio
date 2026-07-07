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
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  grad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M16 8l-2.5 6.5L7 17l2.5-6.5L16 8z"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
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
    points:['Order & shipping management, social media content','Updated the website via Shopify, plus basic SEO']},
  { date:'Oct 2021 — Oct 2022', role:'Marketing Executive', co:'MPM Drive', logo:'mpm-drive.png', badge:'MPM',
    points:['Marketing strategy, website & social media management','Content for UK editorial media, events and market research']},
  { date:'Feb 2022 — Jan 2023', role:'Senior Marketing Executive (Freelance)', co:'Spiran Ltd.', logo:'spiran.png', badge:'SP',
    points:['Social media management, Mailchimp newsletters','Founded and edited the Spiran Magazine']},
  { date:'Oct 2022 — Dec 2023', role:'Digital Marketing Executive', co:'County Broadband', logo:'county-broadband.png', badge:'CB',
    points:['Omnichannel campaigns and lead generation','Email marketing and analytics reporting']},
  { date:'Feb 2024 — Apr 2025', role:'Digital Marketing Executive', co:'Service Graphics', logo:'service-graphics-blue.png', badge:'SG',
    points:['Digital strategy, content and social media management','Design for marketing materials and campaigns']},
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

/* ---------------- Lightbox (zoomable image viewer) ---------------- */
function ensureLightbox(){
  if (document.getElementById('lightbox')) return;
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Close">${icons.close}</button>
    <div class="lightbox-stage">
      <img class="lightbox-img" src="" alt="">
    </div>
    <div class="lightbox-hint">Click image to zoom</div>`;
  document.body.appendChild(lb);
  const img = lb.querySelector('.lightbox-img');
  const stage = lb.querySelector('.lightbox-stage');
  lb.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target === stage) closeLightbox(); });
  img.addEventListener('click', (e) => {
    if (img.classList.contains('zoomed')){
      img.classList.remove('zoomed');
    } else {
      const rect = img.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
      img.classList.add('zoomed');
    }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}
function openLightbox(src, alt){
  ensureLightbox();
  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('.lightbox-img');
  img.src = src;
  img.alt = alt || '';
  img.classList.remove('zoomed');
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}


function workCard(w){
  const el = document.createElement('div');
  el.className = 'work-card';

  if (w.type === 'fan'){
    el.classList.add('work-fan-card');
    const stackIcon = icons.image;
    const n = w.images.length;
    const center = (n - 1) / 2;
    const fanItemsHtml = w.images.map((im, i) => {
      const offset = i - center;
      const closed = `translate(calc(-50% + ${offset * 10}px), ${Math.abs(offset) * 5}px) rotate(${offset * 5}deg)`;
      const open = `translate(calc(-50% + ${offset * 130}px), ${Math.abs(offset) * 24}px) rotate(${offset * 13}deg)`;
      return `<div class="fan-item" data-fan-index="${i}" style="--closed:${closed}; --open:${open}; z-index:${10 + i};"><img src="${im.file}" alt="${im.label}" loading="lazy"><span class="fan-label">${im.label}</span></div>`;
    }).join('');
    el.innerHTML = `
      <div class="work-top">
        <div class="work-icon image">${stackIcon}</div>
        <span class="work-type">${n} images</span>
      </div>
      <div class="fan-stack">
        ${fanItemsHtml}
      </div>
      <h4>${w.title}</h4>
      <p>${w.desc}</p>
      <span class="work-tag">${w.tag}</span>
      <button type="button" class="work-action fan-toggle"><span class="fan-toggle-label">Open the fan</span> ${icons.chevron}</button>`;
    const toggleBtn = el.querySelector('.fan-toggle');
    const toggleLabel = el.querySelector('.fan-toggle-label');
    toggleBtn.addEventListener('click', () => {
      const open = el.classList.toggle('open');
      toggleLabel.textContent = open ? 'Close the fan' : 'Open the fan';
    });
    el.querySelectorAll('.fan-item').forEach((item, i) => {
      item.addEventListener('click', (e) => {
        if (!el.classList.contains('open')) return;
        e.stopPropagation();
        openLightbox(w.images[i].file, w.images[i].label);
      });
    });
    return el;
  }

  const isImage = w.type === 'image';
  const actionLabel = w.type === 'pdf' ? 'Download PDF' : w.type === 'video' ? 'Watch video' : 'View image';
  const href = `${w.file}`;
  const thumb = isImage ? `<div class="work-thumb" data-lightbox-trigger><img src="${w.file}" alt="${w.title}" loading="lazy"></div>` : '';
  const action = isImage
    ? `<button type="button" class="work-action" data-lightbox-trigger>${actionLabel} ${icons.arrow}</button>`
    : `<a href="${href}" target="_blank" class="work-action">${actionLabel} ${icons.arrow}</a>`;
  el.innerHTML = `
    <div class="work-top">
      <div class="work-icon ${w.type}">${icons[w.type]}</div>
      <span class="work-type">${w.type}</span>
    </div>
    ${thumb}
    <h4>${w.title}</h4>
    <p>${w.desc}</p>
    <span class="work-tag">${w.tag}</span>
    ${action}`;
  if (isImage){
    el.querySelectorAll('[data-lightbox-trigger]').forEach(t => t.addEventListener('click', () => openLightbox(w.file, w.title)));
  }
  return el;
}

/* ---------------- My Work (organised by company) ---------------- */
const myWorkCompanies = {
  'MPM Drive': {
    role:'Marketing Executive', period:'Oct 2021 — Oct 2022',
    blurb:'At MPM Drive I owned marketing strategy, the website and social media, and produced content for UK editorial media, events and market research. These two packages were built to grow the business beyond its core racing-fan audience — opening up the track-day experience to new niche groups, from friend groups chasing a shared passion to families, couples and students discovering motorsport for the first time.'
  },
  'Spiran Ltd.': {
    role:'Senior Marketing Executive (Freelance)', period:'Feb 2022 — Jan 2023',
    blurb:'At Spiran Ltd., a single-origin saffron company, I managed the website and built out a new recipe blog, ran social media and Mailchimp email marketing, and worked directly on the sales side too — calling and converting leads to sell the product. My flagship project was founding and editing Spiran Magazine: three quarterly issues blending recipes, food culture and product storytelling, distributed to the community and promoted through email marketing to drive engagement and sales.'
  },
  'County Broadband': {
    role:'Digital Marketing Executive', period:'Oct 2022 — Dec 2023',
    blurb:'At County Broadband, a full-fibre broadband provider, I planned and delivered seasonal marketing campaigns end to end — social media, Mailchimp email marketing, and post-campaign analysis — working alongside the wider marketing, design and PR team. Each card below is a self-contained case study for a single seasonal campaign.'
  }
};
const workItems = [
  {type:'pdf', file:'mpm-meetup-speedup-brochure.pdf', title:'Meet-Up Speed-Up', desc:'All-inclusive group track-day package for 12, designed to bring together people who share the same passion for racing.', tag:'Niche audience: enthusiast groups', company:'MPM Drive'},
  {type:'pdf', file:'mpm-silverstone-360-brochure.pdf', title:'Silverstone @360', desc:'Tiered couple, family and student packages opening up motorsport to audiences beyond core racing fans.', tag:'Niche audience: families, couples & students', company:'MPM Drive'},
  {type:'pdf', file:'spiran-magazine-vol1.pdf', title:'Spiran Magazine — Vol. 1', desc:'Launch issue: saffron quality guide, spices & wellness, restaurant review and a traditional Spanish recipe.', tag:'Content marketing: magazine', company:'Spiran Ltd.'},
  {type:'pdf', file:'spiran-magazine-vol2.pdf', title:'Spiran Magazine — Vol. 2', desc:'Award-winning issue: spice history feature, restaurant review and a traditional Italian recipe.', tag:'Content marketing: magazine', company:'Spiran Ltd.'},
  {type:'pdf', file:'spiran-magazine-vol3.pdf', title:'Spiran Magazine — Vol. 3', desc:'Saffron & wellness feature, restaurant review and a traditional Chilean recipe.', tag:'Content marketing: magazine', company:'Spiran Ltd.'},
  {type:'pdf', file:'county-broadband-christmas-campaign.pdf', title:'Campaign Overview', desc:'Two consecutive years (2022 & 2023) of Christmas campaign strategy and multi-channel content — social, email, PR and pop-up activation.', tag:'Strategy & execution write-up', company:'County Broadband', campaign:'Christmas Campaign'},
  {type:'pdf', file:'county-broadband-christmas-content-calendar.pdf', title:'Content Calendar & Planning', desc:'The full 2023 multi-channel content calendar (TikTok to van livery), plus the research and coordination behind it.', tag:'Planning document', company:'County Broadband', campaign:'Christmas Campaign'},
  {type:'pdf', file:'county-broadband-christmas-social-activities.pdf', title:'Social Media Activities Deck', desc:'The full 2023 social post-by-post breakdown for Instagram, Facebook and LinkedIn — creative, copy and captions for each.', tag:'Social content deck', company:'County Broadband', campaign:'Christmas Campaign'},
  {type:'pdf', file:'county-broadband-christmas-ideas-research.pdf', title:'Christmas Ideas & Research', desc:'Local Christmas events research and campaign concept brainstorm that fed into the 2023 plan.', tag:'Research & ideation', company:'County Broadband', campaign:'Christmas Campaign'},
  {type:'fan', title:'Email Designs — 2023', desc:'Five Mailchimp campaigns from the "Full Fibre Christmas" series — price, speed, reliability and the festive game.', tag:'Email design', company:'County Broadband', campaign:'Christmas Campaign',
   images:[
     {file:'county-broadband-email-price.png', label:'Price offer'},
     {file:'county-broadband-email-speed.png', label:'Speed'},
     {file:'county-broadband-email-reliability.png', label:'Reliability'},
     {file:'county-broadband-email-game.png', label:'Samurai Santa game'}
   ]},
  {type:'pdf', file:'county-broadband-valentines-campaign.pdf', title:'Campaign Overview', desc:'February 2023 "there\'s no love without connection" campaign — brand identity, social post concepts and competition ideas built around Valentine\'s Day.', tag:'Seasonal campaign case study', company:'County Broadband', campaign:'Valentine\'s Campaign'},
  {type:'pdf', file:'county-broadband-black-friday-campaign.pdf', title:'Campaign Overview', desc:'Black Friday 2023 social engagement — the "Where\'s Emoji?" Gleam.io hunt competition, a scheduled post calendar and Mailchimp emails for the £1/month offer.', tag:'Seasonal campaign case study', company:'County Broadband', campaign:'Black Friday Campaign'}
];
const workGrid = document.getElementById('workGrid');
const workIntroEl = document.getElementById('workIntro');
const typeFiltersEl = document.getElementById('typeFilters');
const companyFiltersEl = document.getElementById('companyFilters');
const workFilters = [{key:'all', label:'All'},{key:'pdf', label:'PDF'},{key:'video', label:'Video'}];
const companyKeys = ['All', ...Object.keys(myWorkCompanies)];
let activeCompany = 'All';
let activeType = 'all';
function renderWork(){
  workGrid.innerHTML = '';
  let lastCampaignKey = null;
  let lastCompany = null;
  workItems
    .filter(w => activeType==='all' || w.type===activeType)
    .filter(w => activeCompany==='All' || w.company===activeCompany)
    .forEach(w => {
      if (activeCompany === 'All' && w.company !== lastCompany){
        const divider = document.createElement('div');
        divider.className = 'work-company-divider';
        divider.innerHTML = `<span>${w.company}</span>`;
        workGrid.appendChild(divider);
        lastCompany = w.company;
        lastCampaignKey = null;
      }
      const campaignKey = w.company + '|' + (w.campaign || '');
      if (w.campaign && campaignKey !== lastCampaignKey){
        const heading = document.createElement('div');
        heading.className = 'work-campaign-title';
        heading.textContent = w.campaign;
        workGrid.appendChild(heading);
      }
      lastCampaignKey = campaignKey;
      workGrid.appendChild(workCard(w));
    });
  if(activeCompany !== 'All' && myWorkCompanies[activeCompany]){
    const info = myWorkCompanies[activeCompany];
    workIntroEl.style.display = 'block';
    workIntroEl.innerHTML = `<strong>${activeCompany}</strong> — ${info.role}, ${info.period}<p>${info.blurb}</p>`;
  } else {
    workIntroEl.style.display = 'none';
    workIntroEl.innerHTML = '';
  }
}
workFilters.forEach(f => {
  const b = document.createElement('button');
  b.className = 'filter-btn' + (f.key==='all' ? ' active' : '');
  b.textContent = f.label;
  b.addEventListener('click', () => {
    document.querySelectorAll('#typeFilters .filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    activeType = f.key;
    renderWork();
  });
  typeFiltersEl.appendChild(b);
});
companyKeys.forEach(k => {
  const b = document.createElement('button');
  b.className = 'filter-btn' + (k==='All' ? ' active' : '');
  b.textContent = k;
  b.addEventListener('click', () => {
    document.querySelectorAll('#companyFilters .filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    activeCompany = k;
    renderWork();
  });
  companyFiltersEl.appendChild(b);
});
renderWork();

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

/* ---------------- Case Studies by Sector ---------------- */
const interviewCaseStudies = [
  { sector:'Advertising', title:'Service Graphics', sub:'Retail visual communication — social media campaign',
    brief:'Design a new style of social media content for Service Graphics to showcase its retail visual communication work (window displays, interactive signage, storefront design) and drive brand awareness among marketing professionals and visual merchandisers, on brand guidelines (colour palette, typography, tone of voice).',
    approach:'Set a clear objective, audience and key message before touching design: the goal was to demonstrate expertise and creativity in visual communication solutions, aimed at marketing professionals and businesses looking for high-impact retail displays. Chose LinkedIn and Instagram as the platforms and carousel/reel as the formats, since they suit before/after and process-style storytelling best.',
    execution:'Wrote and designed a LinkedIn carousel and a set of nine sequenced Instagram grid posts introducing the brand\'s services, each with on-brand copy and hashtags. Developed a concept reel built around an eye motif — visual perception meeting the company logo in the iris — to link the idea of "bringing any visual concept to life" directly to brand identity. Followed up with a real client showcase post for the Gymshark66 project, adapting tone for LinkedIn (professional, results-driven) versus Instagram (punchier, emoji-led) versions of the same story.',
    skills:['Social media content strategy','Copywriting & hashtag strategy','Concept development','Brand-guideline adherence','Cross-platform tone adaptation','Client project storytelling'],
    pdfs:[{label:'Campaign Deck', file:'progetto-service-graphics.pdf'},{label:'Watch Reel', file:'service-graphics-reel.mp4', type:'video'}] },
  { sector:'E-commerce & Fashion', title:'Zara', sub:'PR and marketing campaign — fast fashion',
    brief:'Build a full PR and marketing campaign for Zara, covering campaign messaging, target audience, a SWOT analysis, and a channel plan spanning outdoor advertising, digital advertising, media relations and social media.',
    approach:'Started from Zara\'s existing brand positioning — fast fashion at an affordable price, elegance and simplicity, accessibility across a wide audience — and layered a SWOT analysis on top to identify where a campaign could add most value: global reach and a fast-changing collection as strengths to lean into, an image closely tied to competitors as a weakness to work around. Defined clear aims (drive traffic, build brand awareness, win the choice over competitor brands) before selecting channels.',
    execution:'Proposed an Out-of-Home digital screen campaign for high-footfall locations, reasoning through why OOH suited the post-2020 moment. Concepted an original "Bubble Collection" spring campaign visual and a "#RESPECTRULES" awareness campaign tied to a "Stay Comfy" loungewear collection, both designed to fit Zara\'s minimal advertising style. Mapped digital advertising formats (banners, programmatic display) and a media relations plan built around real target titles (ELLE, HELLO!) and a fashion micro-influencer, plus a measurement plan (community analysis, paid vs organic, campaign report) and an example budget split across PR, social and advertising.',
    skills:['SWOT analysis','Campaign concepting & original creative','Out-of-home & digital advertising planning','Media relations & influencer mapping','Budget planning','Measurement & reporting frameworks'],
    pdfs:[{label:'PR Campaign', file:'zara-pr-marketing-campaign.pdf'}] },
  { sector:'E-commerce & Fashion', title:'Wild Cosmetics', sub:'Influencer marketing strategy — Italian market',
    brief:'Given a £100K quarterly influencer marketing budget, design the approach to deliver Wild\'s influencer campaigns in the Italian market: sourcing and outreach, negotiation, influencer selection, content deliverables and measurement.',
    approach:'Anchored the plan in Wild\'s own positioning — a sustainable, plastic-free deodorant brand where every sale funds tree planting — and built buyer personas for the Italian market from that starting point before sourcing a single influencer. Set clear campaign objectives (brand awareness, lead generation, product sales) and matched criteria (niche, engagement, brand fit) to guide research through tools such as Social Blade and HypeAuditor.',
    execution:'Compiled a researched shortlist of real Italian sustainability-focused nano-, micro- and mid-tier influencers with follower counts and a fit rating for each, then modelled a full budget split across influencer fees, shipping, licensing/copyright, paid boosting and contingency. Drafted tiered outreach templates (first contact, short pitch, follow-ups) in Italian, plus content deliverables — a bilingual campaign hashtag, personalised discount codes per influencer, and example on-brand caption copy — and set out a data plan (UTM tracking, performance review, iteration) to close the loop.',
    skills:['Influencer research & vetting','Budget modelling','Outreach copywriting (Italian)','Buyer persona development','Campaign measurement planning','Cross-border market adaptation'],
    pdfs:[{label:'Case Study', file:'progetto-wild-cosmetics.pdf'}] },
  { sector:'Estates', title:'Search Smartly', sub:'Property marketing & social media strategy',
    brief:'Develop a social media and marketing strategy for a London property search agency, from brand messaging and a SWOT analysis through to concrete social content and a wider PR/media relations plan.',
    approach:'Started by defining the brand messages and target audience (a broad 21–60 demographic, middle/high income), then ran a full SWOT analysis to identify where the brand could grow — community connections and events as opportunities, established portals like Zoopla and Rightmove as the main competitive threat. From there, set objectives (market expansion, brand awareness, customer loyalty) and translated them into a communications strategy built on branding, emotional storytelling, digital support and PR.',
    execution:'Drafted ready-to-publish Instagram posts spotlighting London neighbourhoods (Alexandra Palace, Muswell Hill) with on-brand copy and hashtag sets, plus a "Hello Summer" giveaway activity to drive engagement and followers. Mapped out a media relations plan identifying real micro- and nano-influencers, bloggers and property press for outreach, and proposed a Pride Month ad campaign concept ("Home Is Where The Heart Is") aligned with brand values.',
    skills:['SWOT analysis','Brand messaging','Social media content creation','Hashtag strategy','Influencer & PR mapping','Campaign concepting'],
    pdfs:[{label:'Marketing Strategy', file:'search-smartly-marketing-strategy.pdf'},{label:'Instagram Content', file:'search-smartly-instagram-content.pdf'}] },
  { sector:'FMCG', title:'La Tua Pasta', sub:'Food marketing campaign & brand strategy',
    brief:'Plan a food marketing campaign for an artisan Italian pasta brand, from brand messaging through to budget.',
    approach:'Built on a full SWOT analysis and audience segmentation (B2C lifestyle audience and B2B trade/hospitality), then developed two distinct campaign concepts to reach each side of that audience.',
    execution:'"Traditions Matter" — a black-and-white campaign using an original personal photograph to evoke authenticity and Italian tradition, aimed at B2C. "You & Us Originally Tasty" — a vibrant product-led campaign highlighting freshness and the colours of the Italian flag, aimed at B2B trade press and hospitality buyers.',
    skills:['SWOT analysis','Audience segmentation','Campaign concept development','Original photography','RACE framework','Budget planning'],
    pdfs:[{label:'Campaign Deck', file:'la-tua-pasta-campaign.pdf'},{label:'Coordinator Task', file:'la-tua-pasta-coordinator.pdf'}] },
  { sector:'Telecoms', title:'County Broadband', sub:'Full-fibre broadband — multi-channel campaign concept',
    brief:'Design a multi-channel content plan for County Broadband to educate 25–35 year old leads on the benefits of full fibre over mixed fibre, spanning a YouTube video concept, an email template, social media posts and an SEO blog.',
    approach:'Anchored every format in a single, simple idea — speed — and built it around a racing analogy that makes a technical difference (full fibre vs. mixed fibre) instantly easy to grasp: two riders taking the same route, one running straight through, the other slowed down each time its signal has to switch from cable to copper wire. Chose a well-known motorsport personality as the "real fibre" rider to give the concept instant recognition and appeal with the target age group, then adapted the same core message in tone and format across video, email, social and blog.',
    execution:'Storyboarded a YouTube video treatment built around the racing challenge, explaining the fibre vs. mixed-fibre difference in under 30 seconds. Drafted an email template with sourced imagery, optimised for open and click-through rate, positioning full fibre as the fix for slow downloads and everyday connectivity frustrations. Designed two comparison social posts ("Spot the difference" / "Feel the difference") contrasting the speed of the two connection types, plus a B2B-facing post ("The soul of every business") on the importance of a fast connection for companies. Wrote an SEO blog post on why full fibre matters, framed around time, safety and control.',
    skills:['Campaign concepting','Video treatment & storyboarding','Email marketing design','Social media content creation','SEO blog writing','Audience-tailored messaging'],
    pdfs:[{label:'Campaign Deck', file:'county-broadband-case-study.pdf'}] }
];

const sectors = ['All','Advertising','E-commerce & Fashion','Estates','FMCG','Telecoms'];
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
        ${c.pdfs.map(p=>`<a href="${p.file}" target="_blank" class="btn btn-outline btn-sm">${p.type==='video'?icons.video:icons.pdf} ${p.label}</a>`).join('')}
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