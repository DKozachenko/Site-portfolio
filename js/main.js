'use strict'

const burger = document.querySelector('.burger'),
  nav = document.querySelector('.nav'),
  
  home = document.querySelector('.home'),
  header = document.querySelector('.header'),
  
  navLinks = document.querySelectorAll('.nav__link'),
  
  contactsButton = document.querySelector('.contacts__inner > .button'), 
  modal = document.querySelector('.modal'),
  modalWindowClose = modal.querySelector('.modal__window-close');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav_show');
  burger.classList.toggle('burger_active');
})

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const needHeight = header.offsetHeight + home.offsetHeight;

  if (scrollTop >= needHeight) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
})

navLinks.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('nav_show');
    burger.classList.remove('burger_active');

    const blockScrollTop = document.querySelector(`.${item.dataset.link}`).offsetTop;
    const headerHeight = header.offsetHeight;

    window.scrollTo({
      top: blockScrollTop - headerHeight,
      behavior: "smooth"
    });
  })
})

contactsButton.addEventListener('click', () => {
  modal.classList.add('modal_show');
})

modalWindowClose.addEventListener('click', () => {
  modal.classList.remove('modal_show');
  modal.querySelector('textarea').value = '';
})

window.addEventListener('click', (e) => {
  const target = e.target;

  if (modal.classList.contains('modal_show') && target !== contactsButton) {
    if (!target.closest('.modal__window')) {
      modal.classList.remove('modal_show');
      modal.querySelector('textarea').value = '';
    }
  }
})

var typed = new Typed('.home__inner-info > .title', {
  strings: ["Denis Novak", "Novak Denis"],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true
});

new WOW().init();
