// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di click
document.querySelector('#menu-cart').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik diluar nav untuk menghilangkan nav
const menu = document.querySelector('#menu-cart');

document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
