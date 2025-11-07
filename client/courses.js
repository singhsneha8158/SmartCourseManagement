// client/courses.js
document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.getElementById('courseGrid');
  const courses = SCM.getCourses();
  if(!courses.length) grid.innerHTML = '<p class="small">No courses available.</p>';
  else grid.innerHTML = courses.map(c=>`
    <div class="card course-card">
      <img src="${c.img}" alt="${c.title}">
      <h4>${c.title}</h4>
      <div class="small">${c.desc}</div>
      <div class="price">Price: ${c.price ? '₹'+c.price : 'Free'}</div>
      <div class="flex" style="margin-top:8px">
        <a class="btn" href="enroll.html">Enroll</a>
        <button class="btn right" onclick="quickDetails('${c.id}')">Details</button>
      </div>
    </div>`).join('');
});

function quickDetails(id){
  const c = SCM.getCourses().find(x=>x.id===id);
  if(!c) return alert('Course not found');
  alert(`${c.title}\n\n${c.desc}\n\nPrice: ${c.price? '₹'+c.price:'Free'}`);
}