// client/contact.js
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('contactForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const f = e.target;
    const message = {id: SCM.uid(), name: f.name.value.trim(), email: f.email.value.trim(), msg: f.message.value.trim(), date: new Date().toISOString()};
    if(!message.name||!message.email||!message.msg) return alert('Fill all fields');
    const arr = SCM.getMessages();
    arr.push(message);
    SCM.saveMessages(arr);
    document.getElementById('sentStatus').textContent = 'Message sent!';
    f.reset();
  });
});