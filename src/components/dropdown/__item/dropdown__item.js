import '../../../scripts/create-element';
import { ModelDropdownItem } from './ModelDropdownItem';
import { ViewDropdownItem } from './ViewDropdownItem';
import { ControllerDropdownItem } from './ControllerDropdownItem';

class DropdownItem {
  constructor(options = {}) {
    const { titleText: title = 'Item title', quantity = 0 } = options;
    this._model = new ModelDropdownItem({ title, quantity });
    this._view = new ViewDropdownItem({ title, quantity });
    this._controller = new ControllerDropdownItem({ model: this._model, view: this._view });
  }

  getItemToString = () => this._model.getItemToString();

  getQuantity = () => this._model.getQuantity();

  clean = () => this._controller.clean();

  getTitle = () => this._model.getTitle();

  getItem = () => this._view.getItem();
}

export { DropdownItem };
