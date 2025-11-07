// admin-messages.js
document.addEventListener('DOMContentLoaded', ()=>{
  const list = document.getElementById('msgList');
  function render(){
    const msgs = SCM.getMessages();
    if(!msgs.length) list.innerHTML = '<p class="small">No messages yet.</p>';
    else list.innerHTML = msgs.map(m=>`
      <div class="msg">
        <div class="who">${m.name} <span class="small">(${m.email})</span></div>
        <div class="small">${new Date(m.date).toLocaleString()}</div>
        <p>${m.msg}</p>
        <div class="flex"><button class="btn" onclick="reply('${m.email}')">Reply</button> <button class="btn" onclick="delMsg('${m.id}')">Delete</button></div>
      </div>
    `).join('');
  }
  window.reply = (email)=>{ window.location.href = `mailto:${email}?subject=Response from Smart Course Management`; };
  window.delMsg = (id)=>{ if(!confirm('Delete message?')) return; const arr = SCM.getMessages().filter(m=>m.id!==id); SCM.saveMessages(arr); render(); };
  render();
});