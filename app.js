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
