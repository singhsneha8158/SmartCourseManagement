// admin-students.js
document.addEventListener('DOMContentLoaded', ()=>{
  const list = document.getElementById('studentsList');
  function render(){
    const students = SCM.getStudents();
    if(!students.length) list.innerHTML = '<p class="small">No students enrolled yet.</p>';
    else list.innerHTML = students.map(s=>{
      const c = SCM.getCourses().find(x=>x.id===s.courseId) || {title:'Unknown'};
      return `<div class="student-row">
        <div style="flex:1"><div class="name">${s.name}</div><div class="small">${s.email}</div></div>
        <div class="small">${c.title}</div>
        <div>${new Date(s.date).toLocaleString()}</div>
        <div><button class="btn" onclick="removeStudent('${s.id}')">Remove</button></div>
      </div>`;
    }).join('');
  }
  window.removeStudent = (id)=>{
    if(!confirm('Remove student?')) return;
    const arr = SCM.getStudents().filter(s=>s.id!==id);
    SCM.saveStudents(arr); render();
  };

  document.getElementById('export').addEventListener('click', ()=>{
    const students = SCM.getStudents();
    if(!students.length) return alert('No students to export');
    const csv = ['Name,Email,Course,Date'].concat(students.map(s=>{
      const c = SCM.getCourses().find(x=>x.id===s.courseId) || {title:'Unknown'};
      return `"${s.name}","${s.email}","${c.title}","${s.date}"`;
    })).join('\n');
    const blob = new Blob([csv], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='students.csv'; a.click(); URL.revokeObjectURL(url);
  });

  render();
});