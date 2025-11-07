// admin/admin-dashboard.js
document.addEventListener('DOMContentLoaded', ()=>{
  const loginForm = document.getElementById('loginForm');
  const loginMsg = document.getElementById('loginMsg');
  const dashCard = document.getElementById('dashCard');
  const loginCard = document.getElementById('loginCard');

  function showDashboard(){
    loginCard.classList.add('hidden');
    dashCard.classList.remove('hidden');
    renderStats();
  }

  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const pw = e.target.password.value;
    const settings = SCM.getSettings();
    if(pw === settings.adminPassword){ loginMsg.textContent='Login successful'; showDashboard(); }
    else loginMsg.textContent='Wrong password';
  });

  // if already 'authenticated' via sessionStorage
  if(sessionStorage.getItem('scm_admin_auth')==='true'){ showDashboard(); }

  function renderStats(){
    const stats = document.getElementById('stats');
    const courses = SCM.getCourses().length;
    const students = SCM.getStudents().length;
    const messages = SCM.getMessages().length;
    stats.innerHTML = `
      <div class="card"><h2>${courses}</h2><div class="small">Courses</div></div>
      <div class="card"><h2>${students}</h2><div class="small">Students</div></div>
      <div class="card"><h2>${messages}</h2><div class="small">Messages</div></div>`;
  }
});