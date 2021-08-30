import { DropdownItem } from '../__item/dropdown__item';

class List {
  constructor(options) {
    const { list, items } = options;
    this._parent = list;
    this._list = [];
    this._initItems(items);
  }

  getList = () => this._parent

  clean = () => this._list.map((item) => item.clean());

  _initItems = (items) => {
    Object.entries(items).map(([key, value]) => (
      this._list.push(new DropdownItem({ titleText: key, quantity: value }))));

    this._list.map((item) => this._parent.appendChild(item.getItem()));
  }
}

export { List };
