import * as $ from 'jquery';

class Header {
  constructor(header) {
    this._header = header;
    this._isHidden = false;
    this._getElements();
    this._init();
  }

  _getElements = () => {
    [this._buttons] = $(this._header).find('.js-header__authorization');
    [this._content] = $(this._header).find('.js-header__content');
    [this._navContainer] = $(this._header).find('.js-nav__container');
    [this._navList] = $(this._header).find('.js-nav__list');
  }

  _hiddenButtons = () => {
    if (window.innerWidth < 580 && !this._isHidden) {
      this._navContainer.insertBefore(this._buttons, this._navList);
      this._isHidden = true;
    }

    if (window.innerWidth >= 580 && this._isHidden) {
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
