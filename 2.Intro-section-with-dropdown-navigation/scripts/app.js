// Sidebar toggle

const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

//When the user clicks on the menu link, toggle between hiding and showing the dropdown content.
function myFunction() {
  document.getElementById('sub-menu').classList.toggle('show');
}
