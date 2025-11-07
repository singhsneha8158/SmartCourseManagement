// client/enroll.js
document.addEventListener('DOMContentLoaded', ()=>{
  const courseSelect = document.querySelector('select[name="course"]');
  const courses = SCM.getCourses();
  courseSelect.innerHTML = '<option value="">-- Select Course --</option>' + courses.map(c=>`<option value="${c.id}">${c.title}</option>`).join('');
  document.getElementById('enrollForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const f = e.target;
    const data = {id: SCM.uid(), name: f.name.value.trim(), email: f.email.value.trim(), courseId: f.course.value, date: new Date().toISOString()};
    if(!data.name || !data.email || !data.courseId){ alert('Fill all fields'); return;}
    const students = SCM.getStudents();
    students.push(data);
    SCM.saveStudents(students);
    document.getElementById('status').textContent = 'Enrollment successful!';
    f.reset();
  });

  document.getElementById('clear').addEventListener('click', ()=>{
    if(confirm('Clear all enrolled students? This affects admin too.')){ SCM.saveStudents([]); alert('Students cleared'); }
  });
});