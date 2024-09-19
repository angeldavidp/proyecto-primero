new Swiper(".swiper-container", {
  
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredslides: true,
  
    },

    920: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 90,
    },
  },

  
});

new Swiper(".new-swiper", {
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
  },
});
