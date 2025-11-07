// admin-settings.js
document.addEventListener('DOMContentLoaded', ()=>{
  const f = document.getElementById('settingsForm');
  const setMsg = document.getElementById('setMsg');
  const settings = SCM.getSettings();
  f.siteTitle.value = settings.siteTitle || '';
  f.adminPassword.value = settings.adminPassword || '';
  f.theme.value = settings.theme || 'light';

  f.addEventListener('submit', (e)=>{
    e.preventDefault();
    const obj = {siteTitle: f.siteTitle.value || settings.siteTitle, adminPassword: f.adminPassword.value || settings.adminPassword, theme: f.theme.value};
    SCM.saveSettings(obj);
    setMsg.textContent = 'Saved!';
    alert('Settings saved. Update will reflect on client pages when reloaded.');
  });
});