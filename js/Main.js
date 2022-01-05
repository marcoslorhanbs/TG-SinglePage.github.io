function reveal(bool) {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
      else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


function show()
{
    reveals[i].classList.add("active");
}
/*
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('conteudoNavbarSuportado')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
*/
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('conteudoNavbarSuportado')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
function CloseDrop()
{

   bsCollapse.toggle = true;

}
