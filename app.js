// this function helps us create a fixed nav that would scroll along with the page as the user scrolls
const navBar = document.querySelector(".nav-bar");
const topOfNav = navBar.offsetTop;
function fixNav(){
  if(window.scrollY >= topOfNav){
    document.body.style.paddgingTop = navBar.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  }else{
    document.body.style.paddgingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixNav);
// ======================
// this function would slide in the navbar
// this functiion is for sliding in the responsive nav bar
const navLinksContainer = document.querySelector(".nav-links-container");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-link");


// script for responsive navbar

// this function uses transititon to smoothly animate the nav links when the burger is clicked by the user
function animateLinks(links) {
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
    }
  })
}
// this function helps to close the nav when the user clicks on any nav link
function toggleNavFromLink(navLinks) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.toggle("nav-active");
      // animate Links
      animateLinks(navLinks);
      burger.classList.toggle("toggle");
    })
  })
}
const navSlide = ()=>{
  burger.addEventListener("click",()=>{
    navLinksContainer.classList.toggle("nav-active");
    animateLinks(navLinks);
    burger.classList.toggle("toggle");
  })
  toggleNavFromLink(navLinks);
}
navSlide();

const dateHolder = document.querySelector(".date");
let curDate = new Date();
let currentYear = curDate.getFullYear();
// using the date object we create dynamically set the copyright year for the page using the current year so the year is always current
dateHolder.innerHTML = currentYear;