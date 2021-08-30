import * as $ from 'jquery';

class Header {
  constructor(header) {
    this._header = header;
    this._isHidden = false;
    this._getElements();
    this._init();
  }

  _getElements = () => {
    this._buttons = $(this._header).find('.js-header__authorization')[0];
    this._content = $(this._header).find('.js-header__content')[0];
    this._navContainer = $(this._header).find('.js-nav__container')[0];
    this._navList = $(this._header).find('.js-nav__list')[0];
  }

  _hiddenButtons = () => {
    if (window.innerWidth < 530 & !this._isHidden) {
      this._navContainer.insertBefore(this._buttons, this._navList);
      this._isHidden = true;
    }

    if (window.innerWidth >= 530 & this._isHidden) {
      this._content.appendChild(this._buttons);
      this._isHidden = false;
    }
  }

  _init = () => {
    window.addEventListener('resize', this._hiddenButtons);
    this._hiddenButtons();
    this._buttons.classList.add('header__authorization_activated');
  }
}

export { Header };
