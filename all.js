let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menui = document.querySelector('.menu-btn i');
let navA = document.querySelector('.menu li a');


window.addEventListener('scroll',()=>{
    let navbar = document.querySelector('.navbar .container');
    if(scrollY>0){
        
        navbar.classList.add('active');
    }else{
        navbar.classList.remove('active');
    }
})

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    menui.classList.toggle('active');
})
//swiper.js
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        1024:{
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween:30,
        },
        882:{
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween:20,
        },
    }
  });

  //typed.js

  let typed = new Typed("#career",{
      strings:['YouTuber','Student'],
      typeSpeed:100,
      bakeSpeed:2000,
      fadeOut:true,
      loop:true
  })
