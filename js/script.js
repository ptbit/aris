const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.header__menu-link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
  });
});

//MODAL
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const modalOverlay = document.querySelector('.modal__overlay');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const openFormButtons = document.querySelectorAll('.open-form-button');

const openModal = () => {
  modal.classList.add('active');
  document.body.classList.add('no-scroll');
};

const closeModal = () => {
  modal.classList.remove('active');
  document.body.classList.remove('no-scroll');
};

openFormButtons.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

modalOverlay.addEventListener('click', closeModal);

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
