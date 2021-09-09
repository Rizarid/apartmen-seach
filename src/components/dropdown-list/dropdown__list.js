import { DropdownItem } from '../item-of-dropdown/dropdown__item';
import './dropdown-list.sass';

class List {
  constructor(target) {
    this._body = target;
    this._items = this._getItems();
  }

  getList = () => this._body;

  clean = () => this._items.map((item) => item.clean());

  _getItems = () => {
    const items = Array.prototype.slice.call(this._body.querySelectorAll('.js-item-of-dropdown'));
    return items.map((item) => new DropdownItem(item));
  }
}

export { List };
