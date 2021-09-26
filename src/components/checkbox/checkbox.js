import './checkbox.sass';

class Checkbox {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._isClickBlocked = false;
    this._checkbox = this._getCheckbox();
    this._addListener();
  }

  _getBody = (parent) => parent.querySelector('.js-checkbox');

  _addListener = () => { this._checkbox.addEventListener('click', this._handleCheckboxClick); }

  _getCheckbox = () => this._body.querySelector('.js-checkbox__checkbox');

  _handleCheckboxClick = () => { this._body.classList.toggle('checkbox_checked'); };
}

export { Checkbox };
