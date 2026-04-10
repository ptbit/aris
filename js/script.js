console.log('script.js');

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// const menuLinks = document.querySelectorAll('.menu a');

// menuLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     burger.classList.remove('active');
//     menu.classList.remove('active');
//     document.body.classList.remove('no-scroll');
//   });
// });

// const menuItems = document.querySelectorAll('.menu__item');

// menuItems.forEach((item) => {
//   const trigger = item.querySelector('p');

//   if (!trigger) return;

//   trigger.addEventListener('click', () => {
//     item.classList.toggle('active');
//   });
// });

// //Закривати меню по ESC
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     burger.classList.remove('active');
//     menu.classList.remove('active');
//     document.body.classList.remove('no-scroll');
//   }
// });

