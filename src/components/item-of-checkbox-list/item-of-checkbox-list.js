import { Checkbox } from '../checkbox/checkbox';
import './item-of-checkbox-list.sass';

class ItemOfCheckboxList {
  constructor(target) {
    this._item = target;
    this.createCheckbox();
  }

  createCheckbox = () => {
    const checkboxesBody = this._item.querySelector('.js-checkbox');
    this._checkbox = new Checkbox(checkboxesBody);
  }
}

export { ItemOfCheckboxList };
