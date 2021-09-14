import '../../scripts/create-element';
import { ModelDropdownItem } from './ModelDropdownItem';
import { ViewDropdownItem } from './ViewDropdownItem';
import { ControllerDropdownItem } from './ControllerDropdownItem';
import './item-of-dropdown.sass';

class DropdownItem {
  constructor(target) {
    this._view = new ViewDropdownItem(target);
    this._model = this._getModel();
    this._controller = new ControllerDropdownItem({ model: this._model, view: this._view });
  }

  getItemToString = () => this._model.getItemToString();

  getQuantity = () => this._model.getQuantity();

  clean = () => this._controller.clean();

  getTitle = () => this._model.getTitle();

  getItem = () => this._view.getItem();

  _getModel = () => {
    const title = this._view.getTitle();
    const quantity = this._view.getQuantity();
    return new ModelDropdownItem({ title, quantity });
  };
}

export { DropdownItem };
