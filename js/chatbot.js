
(function(){
  const root=document.getElementById('jmChatbot'); if(!root) return;
  const win=document.getElementById('jmChatWindow'), toggle=document.getElementById('jmChatToggle'), close=document.getElementById('jmChatClose');
  const msgs=document.getElementById('jmChatMessages'), input=document.getElementById('jmChatInput'), send=document.getElementById('jmChatSend');
  const enquiry=document.getElementById('jmChatEnquiry'), actions=document.getElementById('jmChatActions');
  const knowledge=[
    {keys:['service','services','what do you do','what you do'],answer:'JMTechnix provides 6 main services:\n1. Website Development\n2. Building AI Automation\n3. App Development\n4. Branding\n5. Social Media Management\n6. Video Editing'},
    {keys:['website','web development','website development'],answer:'Website Development includes Business Websites, College Portfolios, Restaurant Websites, Booking Websites, E-Commerce, School Websites, College & University Websites, Hospital Websites and Hotel Booking Websites.'},
    {keys:['ai','automation','chatbot','whatsapp automation'],answer:'Building AI Automation includes AI Chatbot, WhatsApp Automation, FAQ Bot, Lead Collection, Appointment Automation and AI-Powered Business Tools.'},
    {keys:['app','application','app development'],answer:'App Development includes Business Apps, Customer Apps, Service Apps, Booking Apps, Dashboard Apps and Custom App Solutions.'},
    {keys:['branding','logo','brand identity','ui ux'],answer:'Branding includes Logo Design, Brand Identity, Brand Guidelines, Social Media Branding, UI/UX Design and Marketing Creatives.'},
    {keys:['social media','instagram management','facebook','content planning'],answer:'Social Media Management includes Instagram Management, Facebook Management, Content Planning, Post Scheduling, Audience Engagement and Social Media Strategy.'},
    {keys:['video','video editing','youtube','reels'],answer:'Video Editing includes YouTube Videos, YouTube Shorts, Instagram Reels, Promotional Videos, Social Media Videos and Business Videos.'},
    {keys:['contact','email','mail','whatsapp','phone'],answer:'You can contact JMTechnix by email at jmtechnix.offcial@gmail.com or WhatsApp at +91 72175 86919. You can also use the enquiry form here.'},
    {keys:['founder','founders','who owns','team'],answer:'JMTechnix has two Co-Founders: Jitendra and Manvendra.'},
    {keys:['name','company','jmtechnix'],answer:'The company is JMTechnix. The tagline is “Innovate. Build. Grow.”'},
    {keys:['about','mission','vision'],answer:'JMTechnix is a modern technology and digital solutions company focused on helping businesses build, grow and transform in the digital world. Its mission is to make modern technology simple, useful and accessible for businesses of all sizes.'},
    {keys:['enquiry','inquiry','project','start project','quote'],answer:'Absolutely. You can start an enquiry directly inside this chatbot. I’ll collect your name, email, phone, service and project details, then prepare the email for JMTechnix.'}
  ];
  function add(text,who='bot'){const d=document.createElement('div');d.className='jm-chat-msg jm-chat-'+who;d.textContent=text;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
  function openChat(){win.classList.add('open');win.setAttribute('aria-hidden','false');if(!msgs.children.length)add('Hi! I’m the JMTechnix Assistant. Ask me about our services, company, contact details, or start an enquiry.');setTimeout(()=>input.focus(),50)}
  function closeChat(){win.classList.remove('open');win.setAttribute('aria-hidden','true');enquiry.classList.remove('open')}
  function showEnquiry(){enquiry.classList.add('open');document.getElementById('jmEnqName').focus()}
  function answer(q){const x=q.toLowerCase().trim();if(!x)return;add(q,'user');if(/^(hi|hello|hey|namaste|hii)\b/.test(x)){add('Hello! How can I help you with JMTechnix?');return}if(x.includes('enquiry')||x.includes('inquiry')||x.includes('contact')&&x.includes('form')||x.includes('start project')){add('Sure. I can collect your project details right here.');showEnquiry();return}let best=null,score=0;for(const item of knowledge){let sc=0;for(const k of item.keys)if(x.includes(k))sc+=k.length>4?2:1;if(sc>score){score=sc;best=item}}if(best){add(best.answer)}else add('I can answer questions about JMTechnix services, AI automation, websites, apps, branding, social media, video editing, founders and contact details. For a project, type “start enquiry”.')}
  toggle.addEventListener('click',()=>win.classList.contains('open')?closeChat():openChat());close.addEventListener('click',closeChat);
  send.addEventListener('click',()=>{answer(input.value);input.value=''});input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();answer(input.value);input.value=''}});
  actions.addEventListener('click',e=>{const b=e.target.closest('[data-chat]');if(!b)return;const v=b.dataset.chat;if(v==='enquiry'){add('Let’s start your enquiry.');showEnquiry()}else if(v==='services')answer('What services do you offer?');else if(v==='ai')answer('Tell me about AI automation');else answer('How can I contact JMTechnix?')});
  document.getElementById('jmEnqBack').addEventListener('click',()=>enquiry.classList.remove('open'));
  document.getElementById('jmChatEnquiryForm').addEventListener('submit',async e=>{
    e.preventDefault();
    const formEl=e.currentTarget;
    const name=document.getElementById('jmEnqName').value.trim(),email=document.getElementById('jmEnqEmail').value.trim(),phone=document.getElementById('jmEnqPhone').value.trim(),service=document.getElementById('jmEnqService').value,details=document.getElementById('jmEnqDetails').value.trim();
    if(!name||!email||!phone||!service||!details)return;
    const status=document.getElementById('jmEnqStatus');
    status.style.display='block'; status.textContent='Sending enquiry…';
    try{
      await sendEnquiryToJM({name,email,phone,service,details});
      status.textContent='Enquiry sent successfully to JMTechnix and saved to the enquiry sheet.';
      add(`Thanks ${name}! Your enquiry has been sent directly to JMTechnix.`);
      formEl.reset(); setTimeout(()=>enquiry.classList.remove('open'),1400);
    }catch(err){
      status.textContent='Enquiry service is not connected yet. Please configure the Google Apps Script URL.';
      add('The enquiry service is not connected yet.');
    }
  });
})();
