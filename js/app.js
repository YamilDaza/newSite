/* Navbar */
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
    console.log('me diste click')
}
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
    console.log('me diste click')
}


/* Search form */
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
    console.log('me diste click')
}
document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
    console.log('me diste click')
}





window.onscroll = () => {
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    // navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};




/* Slider */
let swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });




// Slider Services
let metaSwiper = new Swiper('.box-container',{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigatoin: {
        nextEl: '.swipper-button-next',
        prevEl: '.swipper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});



// Blogs slider

let blogSwiper = new Swiper('.blogs-slider',{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigatoin: {
        nextEl: '.swipper-button-next',
        prevEl: '.swipper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});






