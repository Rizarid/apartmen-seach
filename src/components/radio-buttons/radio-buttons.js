import './radio-buttons.sass';

class RadioButtons {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._items = this._getItems();
    this._addListeners();
  }

  _getBody = (parent) => parent.querySelector('.js-radio-buttons');

  _getItems = () => Array.from(this._body.querySelectorAll('.js-radio-buttons__item'));

  _addListeners = () => {
    this._items.map((item) => item.addEventListener('click', this._handleItemClick));
  }

  _handleItemClick() {
    const items = Array.from(this.parentElement.children);
    items.map((item) => item.classList.remove('radio-buttons__item_checked'));
    this.classList.add('radio-buttons__item_checked');
  }
}

export { RadioButtons };
