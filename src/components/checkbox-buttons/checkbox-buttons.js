import { ItemOfCheckboxList } from '../item-of-checkbox-list/item-of-checkbox-list';
import './checkbox-buttons.sass';

class CheckboxButtons {
  constructor(target) {
    this._body = target;
    this._createItems();
    if (this._isExpandable()) this._addListener();
  }

  _createItems = () => {
    const itemsTarget = Array.prototype.slice.call(this._body.querySelectorAll('.js-item-of-checkbox-list'));
    this._items = itemsTarget.map((item) => new ItemOfCheckboxList(item));
  }

  _addListener = () => { this._body.addEventListener('click', this._handleCheckboxButtonsClick); };

  _handleCheckboxButtonsClick = () => {
    this._body.classList.toggle('checkbox-buttons_visible');
  };

  _isExpandable = () => this._body.classList.contains('checkbox-buttons_expandable');
}

export { CheckboxButtons };
