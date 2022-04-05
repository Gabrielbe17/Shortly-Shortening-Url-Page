const menu = document.getElementById('nav__links');
const hamburger= document.getElementById('hamburger-menu');
const closeIcon= document.getElementById('closeIcon');
const menuIcon = document.getElementById('menuIcon');

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener('click', toggleMenu);