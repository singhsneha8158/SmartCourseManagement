// admin/admin-courses.js
document.addEventListener('DOMContentLoaded', ()=>{
  const list = document.getElementById('coursesList');
  const form = document.getElementById('addCourseForm');
  function render(){
    const courses = SCM.getCourses();
    if(!courses.length) list.innerHTML = '<p class="small">No courses</p>';
    else list.innerHTML = courses.map(c=>`
      <div class="course-row">
        <img src="${c.img}" alt="">
        <div style="flex:1">
          <div style="font-weight:700">${c.title}</div>
          <div class="small">${c.desc}</div>
        </div>
        <div class="small">₹${c.price||0}</div>
        <div>
          <button class="btn" onclick="editCourse('${c.id}')">Edit</button>
          <button class="btn" onclick="deleteCourse('${c.id}')">Delete</button>
        </div>
      </div>`).join('');
  }
  window.editCourse = (id)=>{
    const courses = SCM.getCourses();
    const c = courses.find(x=>x.id===id);
    const title = prompt('Title', c.title);
    if(title===null) return;
    const desc = prompt('Description', c.desc);
    const price = prompt('Price', c.price||0);
    const img = prompt('Image path', c.img);
    c.title = title; c.desc = desc; c.price = Number(price); c.img = img;
    SCM.saveCourses(courses); render();
  };
  window.deleteCourse = (id)=>{
    if(!confirm('Delete course?')) return;
    const courses = SCM.getCourses().filter(c=>c.id!==id);
    SCM.saveCourses(courses);
    render();
  };

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const f = e.target;
    const obj = {id: SCM.uid(), title: f.title.value.trim(), desc: f.desc.value.trim(), price: Number(f.price.value)||0, img: f.img.value.trim()||'../images/course1.jpg'};
    const arr = SCM.getCourses(); arr.push(obj); SCM.saveCourses(arr);
    document.getElementById('addMsg').textContent = 'Added!';
    f.reset();
    render();
  });

  render();
});