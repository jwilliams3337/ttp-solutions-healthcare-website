const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
const smallScreen=matchMedia('(max-width:900px)');smallScreen.addEventListener('change',closeMenu);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;const element=entry.target;element.classList.add(element.matches('figure')?'arrive-image':element.matches('.leaders details,.roster>div')?'arrive-row':'arrive');observer.unobserve(element);}},{threshold:.12});
 document.querySelectorAll('.section-intro h2,.section-intro>p,.program-grid article,.approach-heading,.group-photo,.values>div,.leaders details,.staff-title,.roster>div,.questions h2,.faq,.contact-grid>div:not(.general-contact)').forEach(element=>observer.observe(element));
}

document.querySelectorAll('.request-form').forEach(form=>{
 const error=form.querySelector('.form-error');
 const status=form.querySelector('.submission-status');
 const button=form.querySelector('button[type="submit"]');
 const label=button.textContent;
 let submitting=false,submitted=false;
 form.addEventListener('input',()=>{
  error.hidden=true;
  if(submitted){submitted=false;status.hidden=true;button.disabled=false;button.textContent=label;}
  form.querySelectorAll('[aria-invalid]').forEach(field=>field.removeAttribute('aria-invalid'));
 });
 form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(submitting||submitted)return;
  const data=new FormData(form);
  const name=String(data.get('name')||'').trim(),phone=String(data.get('phone')||'').trim(),email=String(data.get('email')||'').trim(),method=String(data.get('method'));
  let problem='',target;
  if(!name){problem='Please enter your name.';target=form.elements.namedItem('name');}
  else if(method==='Phone'&&phone.replace(/\D/g,'').length<7){problem='Please enter a phone number, or choose email as your preferred contact method.';target=form.elements.namedItem('phone');}
  else if(method==='Email'&&!email){problem='Please enter an email address, or choose phone as your preferred contact method.';target=form.elements.namedItem('email');}
  else if(email&&!form.elements.namedItem('email').validity.valid){problem='Please enter a valid email address.';target=form.elements.namedItem('email');}
  if(problem){status.hidden=true;error.textContent=problem;error.hidden=false;target.setAttribute('aria-invalid','true');target.focus();return;}
  submitting=true;button.disabled=true;button.textContent='Sending…';form.setAttribute('aria-busy','true');error.hidden=true;status.hidden=true;
  try{
   const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(data).toString()});
   if(!response.ok)throw new Error('Submission failed');
   submitted=true;button.textContent='Request submitted';
   status.textContent='Thank you. Your request has been submitted. Submitting does not guarantee admission or care. If you need to confirm receipt, call 800-485-5470.';
   status.hidden=false;status.focus();
  }catch{
   error.textContent='We could not confirm your request was submitted. Your entries are still here. Please try again, call 800-485-5470, or email info@ttpsolutions.org. Avoid resending if you already received confirmation.';
   error.hidden=false;button.disabled=false;button.textContent=label;
  }finally{submitting=false;form.removeAttribute('aria-busy');}
 });
});
