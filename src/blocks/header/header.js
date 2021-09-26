import { Menu } from '../../components/menu/menu';
import '../../components/logo/logo';
import '../../components/button/button';
import './header.sass';

class Header {
  constructor(target) {
    this._body = target;
    this._isHidden = false;
    this._getElements();
    this._init();
    if (this._body.classList.contains('header_with-filter-button')) {
      this._getFilterButton();
      this._createEvent();
      this._addListener();
    }
  }

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getElements = () => {
    this._buttons = this._getTarget('.js-header__authorization');
    this._content = this._getTarget('.js-header__content');
    this._navContainer = this._getTarget('.js-nav__container');
    this._navList = this._getTarget('.js-nav__list');
    this._menu = new Menu(this._getTarget('.js-header__navigation'));
  };

  _hiddenButtons = () => {
    if (window.innerWidth < 580 && !this._isHidden) {
      this._navContainer.insertBefore(this._buttons, this._navList);
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
    this._buttons.classList.add('header__authorization_activated');
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

export { Header };
