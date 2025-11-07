// client/about.js
// Currently static; reserved for small enhancements
document.addEventListener('DOMContentLoaded', ()=>{
  // optional: display current number of courses
  const c = SCM.getCourses().length;
  const p = document.createElement('p');
  p.className = 'small';
  p.textContent = `We currently offer ${c} courses.`;
  document.querySelector('.card').appendChild(p);
});