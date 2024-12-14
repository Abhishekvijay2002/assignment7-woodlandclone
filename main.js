const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 15,
    centerSliders : false,
  
    // Let's Make it Autoplay
    autoplay:{
      delay: 2000,
      disableOnInteraction: false
    },
    // Responsive
    breakpoints: {
      0:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 2
      },
      1024:{
        slidesPerView: 5
      }
    }
    
  });
