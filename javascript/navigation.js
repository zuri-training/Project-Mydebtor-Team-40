var hamburger= document.querySelector(".icon");
var navMenu=document.querySelector(".nav-menu");
var nav = document.getElementById("myTopnav")
var navLink = document.querySelectorAll(".nav_links");
var navButtons = document.querySelectorAll(".nav_buttons");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
navLink.forEach(n => n.addEventListener("click", changeActive));
navButtons.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}



function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}

function changeActive(){

      document.querySelector('.link.active').removeClass('active');
      var $parent = $(this).parent();
      $parent.addClass('active');
      e.preventDefault();
}
      var url = window.location.href;
      console.log(url)