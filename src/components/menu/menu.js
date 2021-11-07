import './menu.scss';

class Menu {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._getElements();
    this._addListeners();
  }

  getNavigation = () => this._navigation;

  getMenuList = () => this._list;

  _getBody = (parent) => parent.querySelector('.js-menu');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getElements = () => {
    this._burger = this._body.querySelector('.js-menu__burger');
    this._navigation = this._body.querySelector('.js-menu__container');
    this._darkening = this._body.querySelector('.js-menu__darkening');
    this._list = this._getTarget('.js-menu__list');

    this._dropItems = [...this._body.querySelectorAll('.js-menu__link-container')];
    this._subLists = [...this._body.querySelectorAll('.js-menu__sub-list')];

    this._visibleItem = undefined;
  }

  _addListeners = () => {
    this._burger.addEventListener('click', this._handleBurgerClick);
    this._dropItems.map((item) => item.addEventListener('click', this._handleArrowClick));
  }

  _handleBurgerClick = () => {
    this._burger.classList.toggle('menu__burger_active');
    this._navigation.classList.toggle('menu__container_active');
    this._darkening.classList.toggle('menu__darkening_active');
  };

  _handleArrowClick = (event) => {
    this._subLists.map((item) => item.classList.remove('menu__sub-list_visible'));

    if (this._visibleItem !== event.target) {
      event.target.parentNode.nextElementSibling.classList.toggle('menu__sub-list_visible');
      this._visibleItem = event.target;
    } else {
      this._visibleItem = undefined;
    }
  }
}

export default Menu;
