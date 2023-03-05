const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('active');
});