import './menu.sass';

const menu = new Menu();

function Menu() {
  this._body = document.querySelector('nav.js-nav');
  this._burger = this._body.querySelector('.js-nav__burger');
  this._navigation = this._body.querySelector('.js-nav__container');
  this._darkening = this._body.querySelector('.js-nav__darkening');

  this._arrows = this._body.querySelectorAll('.js-nav__arrow');
  this._subLists = this._body.querySelectorAll('.js-nav__sub-list');

  this._visibleItem = undefined;

  this._activateBurger = () => {
    this._burger.classList.toggle('nav__burger_active');
    this._navigation.classList.toggle('nav__container_active');
    this._darkening.classList.toggle('nav__darkening_active');
  };

  this._showSubMenu = (event) => {
    for (let i = 0; i < this._subLists.length; i += 1) {
      this._subLists[i].classList.remove('nav__sub-list_visible');
    }

    if (this._visibleItem !== this) {
      event.target.parentNode.nextElementSibling.classList.toggle('nav__sub-list_visible');
      this._visibleItem = this;
    } else {
      this._visibleItem = undefined;
    }
  }

  this._burger.addEventListener('click', this._activateBurger);

  for (let i = 0; i < this._arrows.length; i += 1) {
    this._arrows[i].addEventListener('click', this._showSubMenu);
  }
}
