import '../scss/style.scss'
import '../scss/header.scss'
import '../scss/aside-menu.scss'
import '../scss/service.scss'
import '../scss/service-devices.scss'
import '../scss/swiper.scss'
import '../scss/service-advantages.scss'
import '../scss/fonts.scss'
import '../scss/service-prices.scss'
import '../scss/footer.scss'
import '../scss/modal-feedback.scss'
import '../scss/modal-call.scss'
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
    keyboard: true
  }
})

// service-devices__more

const serviceDevicesMore = document.querySelector('.service-devices__more')
const serviceDevicesBlocks = document.querySelector('.service-devices__blocks')

serviceDevicesMore.onclick = function () {
  serviceDevicesBlocks.classList.toggle('service-devices__blocks--open')
  serviceDevicesMore.classList.toggle('service-devices__more--open')
  if (
    serviceDevicesBlocks.classList.contains('service-devices__blocks--open')
  ) {
    serviceDevicesMore.textContent = 'Скрыть'
  } else {
    serviceDevicesMore.textContent = 'Показать все'
  }
}

// service__more

const serviceMore = document.querySelector('.service__more')
const serviceParagraph = document.querySelector('.service__paragraph')

serviceMore.onclick = function () {
  serviceParagraph.classList.toggle('service__paragraph--open')
  serviceMore.classList.toggle('service__more--open')
  if (serviceParagraph.classList.contains('service__paragraph--open')) {
    serviceMore.textContent = 'Свернуть'
  } else {
    serviceMore.textContent = 'Читать далее'
  }
}

// asside-menu

const headerBurger = document.querySelector('.header__burger')
const asideMenuBurger = document.querySelector('.aside-menu__burger')
const asideMenuWrap = document.querySelector('.aside-menu__wrapper')
const asideMenu = document.querySelector('.aside-menu')
const asideMenuOver = document.querySelector('.aside-menu__overlay')

headerBurger.addEventListener('click', function (e) {
  asideMenuWrap.classList.add('aside-menu__wrapper--show')
  asideMenu.classList.add('aside-menu--show')
})

asideMenuBurger.addEventListener('click', function () {
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
  asideMenu.classList.remove('aside-menu--show')
})

asideMenuOver.addEventListener('click', function () {
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
  asideMenu.classList.remove('aside-menu--show')
})

// service-advantages__more

const serviceAdvantagesMore = document.querySelector(
  '.service-advantages__more'
)
const serviceAdvantagesBlocks = document.querySelector(
  '.service-advantages__blocks'
)

serviceAdvantagesMore.onclick = function () {
  serviceAdvantagesBlocks.classList.toggle('service-advantages__blocks--open')
  serviceAdvantagesMore.classList.toggle('service-advantages__more--open')
  if (
    serviceAdvantagesBlocks.classList.contains(
      'service-advantages__blocks--open'
    )
  ) {
    serviceAdvantagesMore.textContent = 'Скрыть'
  } else {
    serviceAdvantagesMore.textContent = 'Показать все'
  }
}
// modal-feedback

const chatFeedback = document.querySelector('.chat__feedback')
const modalFeedbackWrap = document.querySelector('.modal-feedback__wrapper')
const modalFeedbackBurger = document.querySelector('.modal-feedback__burger')
const modalFeedback = document.querySelector('.modal-feedback')
const asideMenuChat = document.querySelector('.aside-menu__chat')
const modalFeedbackOver = document.querySelector('.modal-feedback__overlay')

chatFeedback.addEventListener('click', function () {
  modalFeedbackWrap.classList.add('modal-feedback__wrapper--show')
  modalFeedback.classList.add('modal-feedback--show')
})

asideMenuChat.addEventListener('click', function () {
  modalFeedbackWrap.classList.add('modal-feedback__wrapper--show')
  modalFeedback.classList.add('modal-feedback--show')
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
})

modalFeedbackBurger.addEventListener('click', function () {
  modalFeedbackWrap.classList.remove('modal-feedback__wrapper--show')
  modalFeedback.classList.remove('modal-feedback--show')
})

modalFeedbackOver.addEventListener('click', function () {
  modalFeedbackWrap.classList.remove('modal-feedback__wrapper--show')
  modalFeedback.classList.remove('modal-feedback--show')
})

// modal-call

const modalCall = document.querySelector('.modal-call')
const modalCallWrap = document.querySelector('.modal-call__wrapper')
const modalCallBurger = document.querySelector('.modal-call__burger')
const headerCall = document.querySelector('.header__call')
const asideMenuCall = document.querySelector('.aside-menu__call')
const modalCallOver = document.querySelector('.modal-call__overlay')

headerCall.addEventListener('click', function () {
  modalCallWrap.classList.add('modal-call__wrapper--show')
  modalCall.classList.add('modal-call--show')
})

asideMenuCall.addEventListener('click', function () {
  modalCallWrap.classList.add('modal-call__wrapper--show')
  modalCall.classList.add('modal-call--show')
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
})

modalCallBurger.addEventListener('click', function () {
  modalCallWrap.classList.remove('modal-call__wrapper--show')
  modalCall.classList.remove('modal-call--show')
})

modalCallOver.addEventListener('click', function () {
  modalCallWrap.classList.remove('modal-call__wrapper--show')
  modalCall.classList.remove('modal-call--show')
})
