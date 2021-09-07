import './checkbox.sass';

class Checkbox {
  constructor(target) {
    this._body = target;
    this._isClickBlocked = false;
    this._checkbox = this._getCheckbox();
    this._addListener();
  }

  _addListener = () => { this._checkbox.addEventListener('click', this._handleCheckboxClick); }

  _getCheckbox = () => this._body.querySelector('.checkbox__checkbox');

  _handleCheckboxClick = () => { this._body.classList.toggle('checkbox_checked'); };
}

export { Checkbox };
