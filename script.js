const navbarEl = document.querySelector(".navbar")

const bottomContainerEl = document.querySelector(".bottom-container")

addEventListener("scroll", ()=>{
  if(scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
    navbarEl.classList.add("active")
  }else{
    navbarEl.classList.remove("active")
  }
});