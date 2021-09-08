import './menu.sass';

class Menu {
  constructor(target) {
  this._body = target;
  this._getElements();
  this._addListeners();
  }

  _getElements = () => {
    this._burger = this._body.querySelector('.js-nav__burger');
    this._navigation = this._body.querySelector('.js-nav__container');
    this._darkening = this._body.querySelector('.js-nav__darkening');

    this._arrows = Array.prototype.slice.call(this._body.querySelectorAll('.js-nav__arrow'));
    this._subLists = Array.prototype.slice.call(this._body.querySelectorAll('.js-nav__sub-list'));

    this._visibleItem = undefined;
  }

  _addListeners = () => {
    this._burger.addEventListener('click', this._activateBurger);
    this._arrows.map((item) => item.addEventListener('click', this._showSubMenu));
  }

  _activateBurger = () => {
    this._burger.classList.toggle('nav__burger_active');
    this._navigation.classList.toggle('nav__container_active');
    this._darkening.classList.toggle('nav__darkening_active');
  };

  _showSubMenu = (event) => {
    this._subLists.map((item) => item.classList.remove('nav__sub-list_visible'))

    if (this._visibleItem !== event.target) {
      event.target.parentNode.nextElementSibling.classList.toggle('nav__sub-list_visible');
      this._visibleItem = event.target;
    } else {
      this._visibleItem = undefined;
    }
  }
}

export { Menu };
