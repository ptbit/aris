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

const modalInner = document.querySelector('.modal__content');

openFormButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.modal;

    let template;

    if (type === 'form') {
      template = document.querySelector('#modal-form');
    }

    if (type === 'thanks') {
      template = document.querySelector('#modal-thanks');
    }

    if (template) {
      modalInner.innerHTML = `
        <button class="modal__close-btn">
          <img src="./images/svg/x.svg" alt="close modal">
        </button>
        ${template.innerHTML}
      `;

      modalInner.querySelector('.modal__close-btn').addEventListener('click', closeModal);
    }
    const modalForm = document.querySelector('.modal__form');

    if (modalForm) {
      modalForm.addEventListener('submit', (e) => e.preventDefault());
    }
    openModal();
  });
});

const callBackForm = document.querySelector('.call-back__form');

if (callBackForm) {
  callBackForm.addEventListener('submit', (e) => e.preventDefault());
}
const footerForm = document.querySelector('.footer__form');

if (footerForm) {
  footerForm.addEventListener('submit', (e) => e.preventDefault());
}

document.addEventListener('submit', (e) => {
  if (e.target.matches('.modal__form')) {
    e.preventDefault();

    const template = document.querySelector('#modal-thanks');

    modalContent.innerHTML = `
      <button class="modal__close-btn">
        <img src="./images/svg/x.svg" alt="close modal">
      </button>
      ${template.innerHTML}
    `;

    modalContent
      .querySelector('.modal__close-btn')
      .addEventListener('click', closeModal);
  }
});