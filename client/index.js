// client/index.js
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('siteTitle').textContent = SCM.getSettings().siteTitle || 'Smart Course Management';
  const pop = document.getElementById('popular');
  const courses = SCM.getCourses();
  if(!courses.length){ pop.innerHTML = '<p class="small">No courses.</p>'; return; }
  pop.innerHTML = courses.map(c=>`
    <div class="course card">
      <img src="${c.img.replace('../images','../images')}" alt="${c.title}">
      <div class="title">${c.title}</div>
      <div class="small">${c.desc}</div>
      <div style="margin-top:8px"><a class="btn" href="courses.html">View</a></div>
    </div>`).join('');
});