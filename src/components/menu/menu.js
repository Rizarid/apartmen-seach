import './menu.sass';

class Menu {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._getElements();
    this._addListeners();
  }

  _getBody = (parent) => parent.querySelector('.js-nav');

  _getElements = () => {
    this._burger = this._body.querySelector('.js-nav__burger');
    this._navigation = this._body.querySelector('.js-nav__container');
    this._darkening = this._body.querySelector('.js-nav__darkening');

    this._dropItems = [...this._body.querySelectorAll('.js-nav__link-container')];
    this._subLists = [...this._body.querySelectorAll('.js-nav__sub-list')];

    this._visibleItem = undefined;
  }

  _addListeners = () => {
    this._burger.addEventListener('click', this._handleBurgerClick);
    this._dropItems.map((item) => item.addEventListener('click', this._handleArrowClick));
  }

  _handleBurgerClick = () => {
    this._burger.classList.toggle('nav__burger_active');
    this._navigation.classList.toggle('nav__container_active');
    this._darkening.classList.toggle('nav__darkening_active');
  };

  _handleArrowClick = (event) => {
    this._subLists.map((item) => item.classList.remove('nav__sub-list_visible'));

    if (this._visibleItem !== event.target) {
      event.target.parentNode.nextElementSibling.classList.toggle('nav__sub-list_visible');
      this._visibleItem = event.target;
    } else {
      this._visibleItem = undefined;
    }
  }
}

export { Menu };
