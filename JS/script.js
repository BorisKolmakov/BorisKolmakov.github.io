// service-devices__swiper

const swiper = new Swiper('.swiper', {
  // slidesPerView: 11,
  slidesPerView: 1,
  spaceBetween: 20,
  longSwipes: false,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    760: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    mousewheel: true,
      keyboard: true,
  },

});

// service-devices__more

const serviceDevicesMore = document.querySelector('.service-devices__more');
const serviceDevicesBlocks = document.querySelector('.service-devices__blocks');

serviceDevicesMore.onclick = function() {
  serviceDevicesBlocks.classList.toggle('service-devices__blocks--open');
  serviceDevicesMore.classList.toggle('service-devices__more--open');
  if (serviceDevicesBlocks.classList.contains('service-devices__blocks--open')) {
  serviceDevicesMore.textContent = 'Скрыть';
  } else {
    serviceDevicesMore.textContent = 'Показать все';
  };
};

// service__more

const serviceMore = document.querySelector('.service__more');
const serviceParagraph = document.querySelector('.service__paragraph');

serviceMore.onclick = function() {
  serviceParagraph.classList.toggle('service__paragraph--open');
  serviceMore.classList.toggle('service__more--open');
  if (serviceParagraph.classList.contains('service__paragraph--open')) {
    serviceMore.textContent = 'Свернуть';
  }else {
    serviceMore.textContent = 'Читать далее';
  };
};

// asside-menu

const headerBurger = document.querySelector('.header__burger');
const asideMenuBurger = document.querySelector('.aside-menu__burger');
const asideMenuWrap = document.querySelector('.aside-menu__wrapper');

headerBurger.addEventListener('click', function () {
  asideMenuWrap.classList.add('aside-menu__wrapper--show');
});

asideMenuBurger.addEventListener('click', function () {
  asideMenuWrap.classList.remove('aside-menu__wrapper--show');
});

