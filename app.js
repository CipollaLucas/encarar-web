const body=document.body;
document.querySelectorAll('[data-set-theme]').forEach(btn=>btn.addEventListener('click',()=>{
  const theme=btn.dataset.setTheme; body.dataset.theme=theme; localStorage.setItem('lc-theme',theme);
}));
const saved=localStorage.getItem('lc-theme'); if(saved) body.dataset.theme=saved;
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.13});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateX(${-y*4}deg) rotateY(${x*5}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});
window.addEventListener('scroll',()=>{
  document.querySelector('.topbar').style.boxShadow=window.scrollY>30?'0 10px 35px rgba(0,30,70,.08)':'none';
},{passive:true});

const cases={
  horus:{
    kicker:'PRODUCTO WEB + MOBILE',
    title:'HorusGym',
    lead:'Una plataforma completa para gestionar gimnasios desde web y mobile, pensada para operación real y crecimiento.',
    problem:'Centralizar socios, pagos, rutinas, staff y operación diaria sin depender de herramientas desconectadas.',
    role:'Diseño de producto, backend, mobile, API, pruebas, performance, infraestructura, CI/CD y despliegue.',
    architecture:'React Native / Expo + FastAPI + PostgreSQL + Docker + Nginx + Cloudflare + GitHub Actions + observabilidad.',
    result:'Aplicación instalada en dispositivos reales, backend en producción, flujos de staff y socios validados y pruebas de carga sostenidas por encima de 140 req/s.',
    stack:['React Native','Expo','FastAPI','PostgreSQL','Docker','CI/CD','Cloudflare','Monitoring'],
    images:[
      {src:'HORUS_2.png',alt:'Captura real de HorusGym - pantalla de inicio'},
      {src:'HORUS_1.png',alt:'Captura real de HorusGym - pantalla de rutina'}
    ]
  },
  crm:{
    kicker:'IA APLICADA + AUTOMATIZACIÓN',
    title:'CRM IA',
    lead:'Un laboratorio de CRM inteligente orientado a aprender y aplicar Agents, RAG, evals y automatización sobre un flujo real.',
    problem:'Integrar conversación, automatización y modelos de IA sin perder trazabilidad ni control sobre las respuestas.',
    role:'Arquitectura del stack, backend de IA, diseño de evals, integración de workflows y operación de modelos locales.',
    architecture:'FastAPI + Ollama + PostgreSQL/pgvector + Redis + Chatwoot + n8n + Evolution API + Docker.',
    result:'Chat e intents evaluados con suites propias, respuestas anti-alucinación, workflows conectados y base preparada para RAG, Agents y MCP.',
    stack:['Agents','RAG','Evals','Ollama','Chatwoot','n8n','pgvector','WhatsApp']
  },
  erp:{
    kicker:'SISTEMAS DE NEGOCIO',
    title:'ERP & Operaciones',
    lead:'Integraciones y mejoras sobre procesos reales de compras, e-commerce, pagos, inventario y operación.',
    problem:'Unificar información y automatizar procesos que cruzan compras, catálogo, stock, e-commerce, pagos y logística.',
    role:'Análisis de procesos, integraciones, automatización, consolidación de maestros, deploy y soporte operativo.',
    architecture:'ERP + WooCommerce + integraciones de pagos/facturación + procesos de importación/exportación + automatizaciones.',
    result:'Procesos mensuales consolidados, integraciones de tienda y facturación operativas y reducción de tareas manuales en flujos de negocio.',
    stack:['ERP','WooCommerce','Integraciones','Pagos','Facturación','Automatización','Operaciones'],
    image:'erp_1.png',
    imageAlt:'Captura real del ERP El Origen - módulo Compras'
  },
  legal:{
    kicker:'SOFTWARE OPERATIVO',
    title:'Gestión Legal',
    lead:'Sistema para gestión de causas, vencimientos y documentación, con foco en confiabilidad operativa.',
    problem:'Evitar pérdida de vencimientos y mejorar la consistencia de la información durante edición y seguimiento de causas.',
    role:'Diagnóstico, corrección de bugs, mejoras de backend, deploy y resolución de infraestructura/proxy.',
    architecture:'Django + PostgreSQL + Gunicorn + Nginx + Docker + Cloudflare Tunnel.',
    result:'Flujos críticos de edición y vencimientos estabilizados y sistema desplegado en producción con acceso externo confiable.',
    stack:['Django','PostgreSQL','Docker','Nginx','Cloudflare','Debugging','Deploy'],
    image:'legales_2.png',
    imageAlt:'Captura real del sistema de Gestión Legal'
  }
};
const drawer=document.getElementById('caseDrawer');
const fill=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
document.querySelectorAll('.project-open').forEach(btn=>btn.addEventListener('click',()=>{
  const item=cases[btn.dataset.project]; if(!item||!drawer)return;
  fill('drawerKicker',item.kicker); fill('drawerTitle',item.title); fill('drawerLead',item.lead);
  fill('drawerProblem',item.problem); fill('drawerRole',item.role); fill('drawerArchitecture',item.architecture); fill('drawerResult',item.result);
  const stack=document.getElementById('drawerStack'); stack.innerHTML=item.stack.map(x=>'<span>'+x+'</span>').join('');
  const preview=document.getElementById('drawerPreview');
  const previewGrid=document.getElementById('drawerPreviewGrid');
  if(preview&&previewGrid){
    if(item.images&&item.images.length){
      previewGrid.innerHTML=item.images.map(image=>'<img src="'+image.src+'" alt="'+(image.alt||item.title)+'" loading="lazy" />').join('');
      preview.hidden=false;
    }else if(item.image){
      previewGrid.innerHTML='<img src="'+item.image+'" alt="'+(item.imageAlt||item.title)+'" loading="lazy" />';
      preview.hidden=false;
    }else{
      previewGrid.innerHTML='';
      preview.hidden=true;
    }
  }
  drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false'); document.body.classList.add('drawer-lock');
}));
document.querySelectorAll('[data-close-drawer]').forEach(btn=>btn.addEventListener('click',()=>{
  drawer?.classList.remove('open'); drawer?.setAttribute('aria-hidden','true'); document.body.classList.remove('drawer-lock');
}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer?.classList.contains('open'))document.querySelector('[data-close-drawer]')?.click()});
