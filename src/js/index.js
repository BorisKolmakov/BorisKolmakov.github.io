import '../scss/main.scss'

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

const serviceDevicesMore = document.querySelector('.service-devices__more')
const serviceDevicesBlocks = document.querySelector('.service-devices__buttons')
const body = document.querySelector('body')
const servicelist = document.querySelectorAll('.service__list li a')
const serviceMore = document.querySelector('.service__more')
const serviceParagraph = document.querySelector('.service__paragraph')
const headerBurger = document.querySelector('.header__burger')
const asideMenuBurger = document.querySelector('.aside-menu__burger')
const asideMenuWrap = document.querySelector('.aside-menu__wrapper')
const asideMenu = document.querySelector('.aside-menu')
const asideMenuOver = document.querySelector('.aside-menu__overlay')
const list = document.querySelectorAll('.aside-menu__list li a')
const serviceAdvantagesMore = document.querySelector(
  '.service-advantages__more'
)
const serviceAdvantagesBlocks = document.querySelector(
  '.service-advantages__buttons'
)
const chatFeedback = document.querySelector('.chat__feedback')
const modalFeedbackWrap = document.querySelector('.modal-feedback__wrapper')
const modalFeedbackBurger = document.querySelector('.modal-feedback__burger')
const modalFeedback = document.querySelector('.modal-feedback')
const asideMenuChat = document.querySelector('.aside-menu__chat')
const modalFeedbackOver = document.querySelector('.modal-feedback__overlay')
const modalCall = document.querySelector('.modal-call')
const modalCallWrap = document.querySelector('.modal-call__wrapper')
const modalCallBurger = document.querySelector('.modal-call__burger')
const headerCall = document.querySelector('.header__call')
const asideMenuCall = document.querySelector('.aside-menu__call')
const modalCallOver = document.querySelector('.modal-call__overlay')

serviceDevicesMore.onclick = function () {
  serviceDevicesBlocks.classList.toggle('service-devices__buttons--open')
  serviceDevicesMore.classList.toggle('service-devices__more--open')
  if (
    serviceDevicesBlocks.classList.contains('service-devices__buttons--open')
  ) {
    serviceDevicesMore.textContent = 'Скрыть'
  } else {
    serviceDevicesMore.textContent = 'Показать все'
  }
}

servicelist.forEach((item) => {
  item.addEventListener('click', (e) => {
    servicelist.forEach((el) => {
      el.classList.remove('active')
    })
    item.classList.add('active')
  })
})

serviceMore.onclick = function () {
  serviceParagraph.classList.toggle('service__paragraph--open')
  serviceMore.classList.toggle('service__more--open')
  if (serviceParagraph.classList.contains('service__paragraph--open')) {
    serviceMore.textContent = 'Свернуть'
  } else {
    serviceMore.textContent = 'Читать далее'
  }
}

list.forEach((item) => {
  item.addEventListener('click', (e) => {
    list.forEach((el) => {
      el.classList.remove('active')
    })
    item.classList.add('active')
  })
})

const handleHeaderBurgerClick = (event) => {
  asideMenuWrap.classList.add('aside-menu__wrapper--show')
  asideMenu.classList.add('aside-menu--show')
  body.classList.add('disable-scroll')
}
headerBurger.addEventListener('click', handleHeaderBurgerClick)

const handleBurgerClick = (event) => {
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
  asideMenu.classList.remove('aside-menu--show')
  body.classList.remove('disable-scroll')
}
asideMenuBurger.addEventListener('click', handleBurgerClick)

const handleAsideOverClick = (event) => {
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
  asideMenu.classList.remove('aside-menu--show')
  body.classList.remove('disable-scroll')
}
asideMenuOver.addEventListener('click', handleAsideOverClick)

serviceAdvantagesMore.onclick = function () {
  serviceAdvantagesBlocks.classList.toggle('service-advantages__buttons--open')
  serviceAdvantagesMore.classList.toggle('service-advantages__more--open')
  if (
    serviceAdvantagesBlocks.classList.contains(
      'service-advantages__buttons--open'
    )
  ) {
    serviceAdvantagesMore.textContent = 'Скрыть'
  } else {
    serviceAdvantagesMore.textContent = 'Показать все'
  }
}

const handleChatFeedbackClick = (event) => {
  modalFeedbackWrap.classList.add('modal-feedback__wrapper--show')
  modalFeedback.classList.add('modal-feedback--show')
  body.classList.add('disable-scroll')
}
chatFeedback.addEventListener('click', handleChatFeedbackClick)

const handleAsideChatClick = (event) => {
  modalFeedbackWrap.classList.add('modal-feedback__wrapper--show')
  modalFeedback.classList.add('modal-feedback--show')
  body.classList.add('disable-scroll')
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
}
asideMenuChat.addEventListener('click', handleAsideChatClick)

const handleFeedBurgerClick = (event) => {
  modalFeedbackWrap.classList.remove('modal-feedback__wrapper--show')
  modalFeedback.classList.remove('modal-feedback--show')
  body.classList.remove('disable-scroll')
}
modalFeedbackBurger.addEventListener('click', handleFeedBurgerClick)

const handleFeedOverClick = (event) => {
  modalFeedbackWrap.classList.remove('modal-feedback__wrapper--show')
  modalFeedback.classList.remove('modal-feedback--show')
  body.classList.remove('disable-scroll')
}
modalFeedbackOver.addEventListener('click', handleFeedOverClick)

const handleHeaderCallClick = (event) => {
  modalCallWrap.classList.add('modal-call__wrapper--show')
  modalCall.classList.add('modal-call--show')
  body.classList.add('disable-scroll')
}
headerCall.addEventListener('click', handleHeaderCallClick)

const handleAsideCallClick = (event) => {
  modalCallWrap.classList.add('modal-call__wrapper--show')
  modalCall.classList.add('modal-call--show')
  body.classList.add('disable-scroll')
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
}
asideMenuCall.addEventListener('click', handleAsideCallClick)

const handleCallBurgerClick = (event) => {
  modalCallWrap.classList.remove('modal-call__wrapper--show')
  modalCall.classList.remove('modal-call--show')
  body.classList.remove('disable-scroll')
}
modalCallBurger.addEventListener('click', handleCallBurgerClick)

const handleCallOverClick = (event) => {
  modalCallWrap.classList.remove('modal-call__wrapper--show')
  modalCall.classList.remove('modal-call--show')
  body.classList.remove('disable-scroll')
}
modalCallOver.addEventListener('click', handleCallOverClick)
