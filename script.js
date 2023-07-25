const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', function () {
    // Toggle the active class on the menu toggle
    menuToggle.classList.toggle('active');
  
    // Toggle the active class on the menu
    menu.classList.toggle('active');
  });
  

