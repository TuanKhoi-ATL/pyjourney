const langButton=document.querySelector('#lang');let lang=localStorage.getItem('portfolio-lang')||'en';
function applyLang(){document.documentElement.lang=lang;document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[lang]);langButton.textContent=lang==='en'?'VI':'EN';const cvLink=document.querySelector('.cv-link');if(cvLink)cvLink.href=lang==='vi'?'cv-vi.html?v=20260817':'cv.html?v=20260817';localStorage.setItem('portfolio-lang',lang)}
langButton.onclick=()=>{lang=lang==='en'?'vi':'en';applyLang()};applyLang();document.querySelector('#year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('visible',e.isIntersecting)),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if('serviceWorker'in navigator){navigator.serviceWorker.getRegistrations().then(registrations=>registrations.forEach(registration=>registration.unregister()))}
