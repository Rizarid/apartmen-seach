import './menu.sass';

const menu = new Menu();

function Menu() {
  this.body = document.querySelector('nav.js-nav');
  this.burger = this.body.querySelector('.js-nav__burger');
  this.navigation = this.body.querySelector('.js-nav__container');
  this.darkening = this.body.querySelector('.js-nav__darkening');

  this.arrows = this.body.querySelectorAll('.js-nav__arrow');
  this.subLists = this.body.querySelectorAll('.js-nav__sub-list');

  this.visibleItem = undefined;

  this.activateBurger = () => {
    this.burger.classList.toggle('nav__burger_active');
    this.navigation.classList.toggle('nav__container_active');
    this.darkening.classList.toggle('nav__darkening_active');
  };

  this.showSubMenu = (event) => {
    for (let i = 0; i < this.subLists.length; i += 1) {
      this.subLists[i].classList.remove('nav__sub-list_visible');
    }

    if (this.visibleItem !== this) {
      event.target.parentNode.nextElementSibling.classList.toggle('nav__sub-list_visible');
      this.visibleItem = this;
    } else {
      this.visibleItem = undefined;
    }
  }

  this.burger.addEventListener('click', this.activateBurger);

  for (let i = 0; i < this.arrows.length; i += 1) {
    this.arrows[i].addEventListener('click', this.showSubMenu);
  }
}
