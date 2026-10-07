(function(){
  'use strict';
  var btn=document.querySelector('.menu-btn'),list=document.getElementById('site-nav');
  if(btn&&list){
    btn.addEventListener('click',function(){var o=list.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');btn.textContent=o?'Close':'Menu';});
    list.addEventListener('click',function(e){if(e.target.tagName==='A'){list.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.textContent='Menu';}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&list.classList.contains('open')){list.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.textContent='Menu';btn.focus();}});
  }
  var dlg=document.getElementById('lightbox'),last=null;
  if(dlg&&typeof dlg.showModal==='function'){
    var img=dlg.querySelector('img'),ttl=dlg.querySelector('strong'),cap=dlg.querySelector('.lb-cap');
    document.querySelectorAll('[data-lightbox]').forEach(function(b){
      b.addEventListener('click',function(){last=b;img.src=b.getAttribute('data-src');img.alt=b.getAttribute('data-alt')||'';ttl.textContent=b.getAttribute('data-title')||'';cap.textContent=b.getAttribute('data-cap')||'';dlg.showModal();});
    });
    dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close();});
    dlg.querySelector('[data-close]').addEventListener('click',function(){dlg.close();});
    dlg.addEventListener('close',function(){if(last)last.focus();});
  } else {
    document.querySelectorAll('[data-lightbox]').forEach(function(b){b.addEventListener('click',function(){window.open(b.getAttribute('data-src'),'_blank','noopener');});});
  }
  var links=[].slice.call(document.querySelectorAll('#site-nav a[href^="#"]'));
  if('IntersectionObserver' in window&&links.length){
    var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.removeAttribute('aria-current');});var a=map[e.target.id];if(a)a.setAttribute('aria-current','true');}});},{rootMargin:'-40% 0px -55% 0px'});
    Object.keys(map).forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s);});
  }
})();
