const toggle=document.querySelector('.menu'),nav=document.querySelector('#navigation');
function closeMenu(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();

const transcriptDialog=document.querySelector('#transcript-dialog'),transcriptLaunch=document.querySelector('.transcript-launch'),transcriptZoom=document.querySelector('#transcript-zoom'),transcriptImage=document.querySelector('.transcript-image');
transcriptLaunch.addEventListener('click',()=>{transcriptDialog.showModal();document.body.classList.add('transcript-open');document.querySelector('#transcript-close').focus();});
document.querySelector('#transcript-close').addEventListener('click',()=>transcriptDialog.close());
transcriptDialog.addEventListener('click',e=>{if(e.target===transcriptDialog){const r=transcriptDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)transcriptDialog.close();}});
transcriptDialog.addEventListener('close',()=>{document.body.classList.remove('transcript-open');transcriptImage.classList.remove('zoomed');transcriptZoom.setAttribute('aria-pressed','false');transcriptZoom.textContent='Zoom in ＋';transcriptLaunch.focus();});
transcriptZoom.addEventListener('click',()=>{const zoomed=transcriptImage.classList.toggle('zoomed');transcriptZoom.setAttribute('aria-pressed',String(zoomed));transcriptZoom.textContent=zoomed?'Fit image −':'Zoom in ＋';});
