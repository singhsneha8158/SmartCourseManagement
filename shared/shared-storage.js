/* shared/shared-storage.js
   Handles initialization and helper functions for localStorage data.
   Keys:
     - scm_courses
     - scm_students
     - scm_messages
     - scm_settings
*/
(function(){
  // default data
  const defaultCourses = [
    {id: 'c1', title: 'HTML & CSS Basics', desc: 'Build modern responsive websites', price: 0, img: '../images/course1.jpg'},
    {id: 'c2', title: 'Java Programming', desc: 'Core Java and OOP', price: 199, img: '../images/course2.jpg'},
    {id: 'c3', title: 'Python for Beginners', desc: 'Python fundamentals and projects', price: 149, img: '../images/course3.jpg'}
  ];
  const defaultSettings = {adminPassword: 'admin123', siteTitle: 'Smart Course Management', theme: 'light'};

  // initialize if not present
  if(!localStorage.getItem('scm_courses')) localStorage.setItem('scm_courses', JSON.stringify(defaultCourses));
  if(!localStorage.getItem('scm_students')) localStorage.setItem('scm_students', JSON.stringify([]));
  if(!localStorage.getItem('scm_messages')) localStorage.setItem('scm_messages', JSON.stringify([]));
  if(!localStorage.getItem('scm_settings')) localStorage.setItem('scm_settings', JSON.stringify(defaultSettings));

  // expose helper functions globally
  window.SCM = {
    getCourses: ()=> JSON.parse(localStorage.getItem('scm_courses') || '[]'),
    saveCourses: (arr)=> localStorage.setItem('scm_courses', JSON.stringify(arr)),
    getStudents: ()=> JSON.parse(localStorage.getItem('scm_students') || '[]'),
    saveStudents: (arr)=> localStorage.setItem('scm_students', JSON.stringify(arr)),
    getMessages: ()=> JSON.parse(localStorage.getItem('scm_messages') || '[]'),
    saveMessages: (arr)=> localStorage.setItem('scm_messages', JSON.stringify(arr)),
    getSettings: ()=> JSON.parse(localStorage.getItem('scm_settings') || '{}'),
    saveSettings: (obj)=> localStorage.setItem('scm_settings', JSON.stringify(obj)),
    uid: ()=> 'id' + Math.random().toString(36).slice(2,9)
  };
})();