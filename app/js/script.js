let header__menu=document.querySelector(".header__menu")
let header=document.querySelector(".header")
let overlay=document.querySelector(".overlay")
let fadeElems=document.querySelectorAll(".has-fade")
let body=document.querySelector("body")

header__menu.addEventListener("click",()=>{
   body.classList.toggle("no-scroll")
   header.classList.toggle("open") 
   fadeElems.forEach((el)=>{
     el.classList.toggle("fade-in")
     el.classList.toggle('fade-out', !overlay.classList.contains('fade-in')); 
   })
   
})