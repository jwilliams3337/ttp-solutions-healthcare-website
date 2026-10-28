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
 const review=form.querySelector('.email-review');
 const preview=form.querySelector('.email-preview');
 const openEmail=form.querySelector('.email-open');
 let draft='';
 form.addEventListener('input',()=>{review.hidden=true;error.hidden=true;form.querySelectorAll('[aria-invalid]').forEach(e=>e.removeAttribute('aria-invalid'));});
 form.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(form);
  const name=String(data.get('name')||'').trim(),phone=String(data.get('phone')||'').trim(),email=String(data.get('email')||'').trim(),method=String(data.get('method'));
  let problem='',target;
  if(!name){problem='Please enter your name.';target=form.elements.name;}
  else if(method==='Phone'&&phone.replace(/\D/g,'').length<7){problem='Please enter a phone number so TTP Solutions Healthcare LLC can call you, or choose email as your preferred method.';target=form.elements.phone;}
  else if(method==='Email'&&!email){problem='Please enter an email address so TTP Solutions Healthcare LLC can email you, or choose phone as your preferred method.';target=form.elements.email;}
  else if(email&&!form.elements.email.validity.valid){problem='Please enter a valid email address.';target=form.elements.email;}
  if(problem){review.hidden=true;error.textContent=problem;error.hidden=false;target.setAttribute('aria-invalid','true');target.focus();return;}
  const lines=[form.dataset.formKind,'',`Name: ${name}`,`Phone: ${phone||'Not provided'}`,`Email: ${email||'Not provided'}`,`Preferred contact: ${method}`];
  if(data.has('for'))lines.push(`Contacting for: ${data.get('for')}`);
  if(data.get('callback'))lines.push(`Callback preference: ${String(data.get('callback')).trim()}`);
  if(data.get('message'))lines.push('',`Non-clinical message: ${String(data.get('message')).trim()}`);
  lines.push('','Please contact me about this request. I understand this does not guarantee admission or care.');
  draft=lines.join('\n');preview.textContent=draft;
  openEmail.href=`mailto:j.williams@ttpsolutions.org?subject=${encodeURIComponent('TTP Solutions Healthcare LLC '+form.dataset.formKind)}&body=${encodeURIComponent(draft)}`;
  error.hidden=true;review.hidden=false;form.querySelector('.copy-status').textContent='';
  preview.setAttribute('tabindex','-1');preview.focus();
 });
 form.querySelector('.copy-request').addEventListener('click',async()=>{
  const status=form.querySelector('.copy-status');
  try{await navigator.clipboard.writeText(draft);status.textContent='Request copied. Paste it into an email to j.williams@ttpsolutions.org and send it yourself.';}
  catch{status.textContent='Copy is unavailable in this browser. Select the request text above and copy it, or call TTP Solutions Healthcare LLC at 800-485-5470.';}
 });
});
