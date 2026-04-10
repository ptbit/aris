const swiper = new Swiper('.swiper', {
  // autoplay: {
  //   delay: 5000,
  // },
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    addIcons: false,
  },
});
