import './radio-buttons.sass';

class RadioButtons {
  constructor(target) {
    this._body = target;
    this._items = this._getItems();
    this._addListeners();
  }

  _getItems = () => Array.prototype.slice.call(this._body.querySelectorAll('.js-radio-buttons__item'));

  _addListeners = () => {
    this._items.map((item) => item.addEventListener('click', this._handleItemClick));
  }

  _handleItemClick() {
    const items = Array.prototype.slice.call(this.parentElement.children);
    items.map((item) => item.classList.remove('radio-buttons__item_checked'));
    this.classList.add('radio-buttons__item_checked');
  }
}

export { RadioButtons };
