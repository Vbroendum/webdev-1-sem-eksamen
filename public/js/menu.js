document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
  
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('open'); 
    });
  });
  