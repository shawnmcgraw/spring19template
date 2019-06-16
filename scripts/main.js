// toggle hamburger menu
function xToggler(x) {
    x.classList.toggle("change");
    let navLinks = document.getElementById('menu-links');
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("menu-overlay");
  }