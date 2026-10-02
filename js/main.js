
const CONFIG = {
  COMPANY_NAME: "JMTechnix",
  EMAIL: "jmtechnix.offcial@gmail.com",
  WHATSAPP_NUMBER: "917217586919",
  INSTAGRAM_URL: "https://www.instagram.com/jmtechnix/",
  YOUTUBE_URL: "https://www.youtube.com/@jmtechnixx",
  GITHUB_URL: "https://github.com/jmtechnix"
};

// ---- Populate links ----
document.getElementById('navWa').href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi JMTechnix, I'd like to know more.")}`;
document.getElementById('waLink').href = document.getElementById('navWa').href;
document.getElementById('footWa').href = document.getElementById('navWa').href;
document.getElementById('emailLink').href = `mailto:${CONFIG.EMAIL}`;
document.getElementById('footEmail').href = `mailto:${CONFIG.EMAIL}`;
document.getElementById('igLink').href = CONFIG.INSTAGRAM_URL;
document.getElementById('footIg').href = CONFIG.INSTAGRAM_URL;
document.getElementById('footYoutube').href = CONFIG.YOUTUBE_URL;
document.getElementById('footGithub').href = CONFIG.GITHUB_URL;
document.getElementById('youtubeLink').href = CONFIG.YOUTUBE_URL;
document.getElementById('githubLink').href = CONFIG.GITHUB_URL;
document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} ${CONFIG.COMPANY_NAME}. All rights reserved.`;

// ---- Mobile menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', ()=> mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mobileMenu.classList.remove('open')));

// ---- Services data ----
const SERVICES = [
{icon:"🌐",title:"Website Development",desc:"Professional websites for businesses, institutions, hospitality, healthcare and online commerce.",items:["Business Website","College Portfolio","Restaurant Website","Booking Website","E-Commerce Website","School Website","College & University Website","Hospital Website","Hotel Booking Website"]},
{icon:"🤖",title:"Building AI Automation",desc:"AI-powered automation for leads, questions, appointments and repetitive business workflows.",items:["AI Chatbot","WhatsApp Automation","FAQ Bot","Lead Collection","Appointment Automation","AI-Powered Business Tools"],highlight:true},
{icon:"📱",title:"App Development",desc:"Modern application solutions designed around your business, users and digital workflows.",items:["Business Apps","Customer Apps","Service Apps","Booking Apps","Dashboard Apps","Custom App Solutions"]},
{icon:"🎨",title:"Branding",desc:"Build a consistent and memorable brand identity across digital platforms.",items:["Logo Design","Brand Identity","Brand Guidelines","Social Media Branding","UI/UX Design","Marketing Creatives"]},
{icon:"📱",title:"Social Media Management",desc:"Consistent social media management to build your brand presence, engagement and online community.",items:["Instagram Management","Facebook Management","Content Planning","Post Scheduling","Audience Engagement","Social Media Strategy"]},
{icon:"🎬",title:"Video Editing",desc:"Professional video editing for social media, marketing campaigns and digital content.",items:["YouTube Videos","YouTube Shorts","Instagram Reels","Promotional Videos","Social Media Videos","Business Videos"]}
];
const servicesGrid = document.getElementById('servicesGrid');
SERVICES.forEach((s,index)=>{
  const el=document.createElement('article');
  el.className='card service-card'+(s.highlight?' highlight':'');
  el.innerHTML=`<div class="icon-badge">${s.icon}</div><div class="service-number">0${index+1}</div>
  <h3>${s.title}</h3><p>${s.desc}</p>
  <button class="explore service-toggle" type="button" data-service-index="${index}">
    <span>Explore Services</span><span class="service-arrow">→</span>
  </button>`;
  servicesGrid.appendChild(el);
});
function openServicePage(index){
  const s=SERVICES[index];
  document.getElementById('servicePageTitle').textContent=s.title;
  document.getElementById('servicePageDesc').textContent=s.desc;
  document.getElementById('servicePageIcon').textContent=s.icon;
  document.getElementById('servicePageItems').innerHTML=s.items.map(item=>`<div class="service-detail-card"><div class="detail-check">✓</div><div><h3>${item}</h3><p>Professional ${item.toLowerCase()} solution by JMTechnix.</p></div></div>`).join('');
  document.getElementById('servicePage').classList.add('active');
  document.getElementById('servicePage').setAttribute('aria-hidden','false');
  document.body.classList.add('service-page-open');
  window.scrollTo({top:0,behavior:'smooth'});
}
function closeServicePage(){document.getElementById('servicePage').classList.remove('active');document.getElementById('servicePage').setAttribute('aria-hidden','true');document.body.classList.remove('service-page-open');}
servicesGrid.addEventListener('click',e=>{
  const b=e.target.closest('.service-toggle');
  if(b) openServicePage(Number(b.dataset.serviceIndex));
});
window.addEventListener('DOMContentLoaded',()=>{
  const closeBtn=document.getElementById('closeServicePage');
  const backBtn=document.getElementById('servicePageBack');
  const startBtn=document.getElementById('servicePageStart');
  if(closeBtn) closeBtn.addEventListener('click',closeServicePage);
  if(backBtn) backBtn.addEventListener('click',closeServicePage);
  if(startBtn) startBtn.addEventListener('click',()=>{
    closeServicePage();
    requestAnimationFrame(()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth',block:'start'}));
  });
});

// ---- Work data ----
const WORK = [
  {icon:"🌐", title:"Business Website", tag:"Sample Project"},
  {icon:"🛒", title:"E-commerce Website", tag:"Sample Project"},
  {icon:"⚙️", title:"AI Automation System", tag:"Concept"},
  {icon:"📄", title:"Landing Page", tag:"Sample Project"},
  {icon:"🎨", title:"Brand Identity", tag:"Concept"},
  {icon:"📊", title:"AI Dashboard", tag:"Concept"},
];
const workGrid = document.getElementById('workGrid');
WORK.forEach(w=>{
  const el = document.createElement('div');
  el.className = 'work-card';
  el.innerHTML = `<div class="work-thumb">${w.icon}</div><div class="work-body"><span class="tag">${w.tag}</span><h3 style="font-size:1.05rem;">${w.title}</h3></div>`;
  workGrid.appendChild(el);
});

// ---- Steps ----
const STEPS = [
  {n:"01", title:"Discover", desc:"Understand the business, goals and requirements."},
  {n:"02", title:"Plan", desc:"Create structure, design direction and technology plan."},
  {n:"03", title:"Build", desc:"Develop, test and refine the solution."},
  {n:"04", title:"Launch", desc:"Deploy the project and provide support."},
];
const stepsGrid = document.getElementById('stepsGrid');
STEPS.forEach(s=>{
  const el = document.createElement('div');
  el.className = 'step';
  el.innerHTML = `<b>${s.n}</b><h3>${s.title}</h3><p>${s.desc}</p>`;
  stepsGrid.appendChild(el);
});


// ---- Contact form ----
const ENQUIRY_ENDPOINT = "https://script.google.com/macros/s/AKfycbzGUmyFbOOqEiTLN-lgidfgM0vZId6Su4Bth5iALBGX26fxafwKGInbRpTXbA2PwSpj/exec";
async function sendEnquiryToJM(data){
  if(!ENQUIRY_ENDPOINT || ENQUIRY_ENDPOINT.includes('PASTE_YOUR_')) throw new Error('Enquiry endpoint is not configured');
  const body = new URLSearchParams();
  Object.entries(data).forEach(([k,v])=>body.append(k,v));
  await fetch(ENQUIRY_ENDPOINT,{method:'POST',mode:'no-cors',body});
  return true;
}
const form = document.getElementById('enquiryForm');
form.addEventListener('submit', async e=>{
  e.preventDefault();
  const fields = {
    name: document.getElementById('f-name'),
    email: document.getElementById('f-email'),
    phone: document.getElementById('f-phone'),
    service: document.getElementById('f-service'),
    details: document.getElementById('f-details'),
  };
  let valid = true;
  Object.entries(fields).forEach(([key,el])=>{
    const errEl = document.getElementById('err-'+key);
    let ok = el.value.trim().length > 0;
    if(key==='email') ok = ok && /\S+@\S+\.\S+/.test(el.value);
    errEl.style.display = ok ? 'none' : 'block';
    if(!ok) valid = false;
  });
  if(!valid) return;
  const successBox = document.getElementById('successBox');
  successBox.style.display = 'block';
  successBox.textContent = 'Sending your enquiry…';
  try{
    await sendEnquiryToJM({name:fields.name.value.trim(),email:fields.email.value.trim(),phone:fields.phone.value.trim(),service:fields.service.value,details:fields.details.value.trim()});
    successBox.textContent = `Thanks, ${fields.name.value.split(' ')[0]}! Your enquiry has been sent successfully to JMTechnix Team.`;
    form.reset();
  }catch(err){
    successBox.textContent = 'Enquiry service is not connected yet. Please configure the Google Apps Script URL.';
  }
});
