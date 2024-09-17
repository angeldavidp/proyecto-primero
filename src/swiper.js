new Swiper(".swiper-container",
  {

    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      620: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      680: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      920: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }
  });

  new Swiper(".new-swiper",
    {
  
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
      slidesPerView: 1,
      spaceBetween: 10,
  
      breakpoints: {
        620: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
  
        680: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
  
        920: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1240: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      }
    });


