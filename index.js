const navSc = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
  if(window.scrollY>=56){
    navSc.classList.add("navbar-scrolled");
  }else if (window.scrollY<56){
    navSc.classList.remove("navbar-scrolled");
  }

});