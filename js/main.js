'use strict'

const burger = document.querySelector('.burger'),
  nav = document.querySelector('.nav'),
  
  home = document.querySelector('.home'),
  header = document.querySelector('.header'),
  
  navLinks = document.querySelectorAll('.nav__link');

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