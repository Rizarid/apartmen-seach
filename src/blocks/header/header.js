import Menu from '../../components/menu/menu';
import '../../components/logo/logo';
import '../../components/button/button';
import './header.sass';

class Header {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._isHidden = false;
    this._getElements();
    this._init();
    if (this._body.classList.contains('header_with-filter-button')) {
      this._getFilterButton();
      this._createEvent();
      this._addListener();
    }
  }

  _getBody = (parent) => parent.querySelector('.js-header');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getElements = () => {
    this._buttons = this._getTarget('.js-header__authorization');
    this._content = this._getTarget('.js-header__content');
    this._menu = new Menu(this._getTarget('.js-header__navigation'));
    this._navigation = this._menu.getNavigation();
    this._menuList = this._menu.getMenuList();
  };

  _hiddenButtons = () => {
    if (window.innerWidth < 580 && !this._isHidden) {
      this._navigation.insertBefore(this._buttons, this._menuList);
      this._isHidden = true;
    }

    if (window.innerWidth >= 580 && this._isHidden) {
      this._content.appendChild(this._buttons);
      this._isHidden = false;
    }
  };

  _init = () => {
    window.addEventListener('resize', this._hiddenButtons);
    this._hiddenButtons();
    if (this._buttons) this._buttons.classList.add('header__authorization_activated');
  }

  _getFilterButton = () => {
    this._filterButton = this._body.querySelector('.js-header__filters-button');
  }

  _createEvent = () => {
    this._onFilterButtonClick = new CustomEvent('filterButtonClick');
  };

  _addListener = () => {
    this._filterButton.addEventListener('click', this._handleFilterButtonClick);
  }

  _handleFilterButtonClick = () => document.dispatchEvent(this._onFilterButtonClick);
}

export default Header;
