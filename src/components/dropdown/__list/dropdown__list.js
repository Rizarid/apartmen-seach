import * as $ from "jquery"

import { getDecline } from '../../../scripts/getDecline'
import { ControlPanel } from "../../control-panel/control-panel.js";
import { DropdownItem } from '../__item/dropdown__item';

class List {
  constructor (options) {
    const { list, items } = options;
    this._parent = list;
    this._list = [];
    this._initItems(items);
  }

  getList = () => this._parent

  clean = () => this._list.map((item) => item.clean());

  _initItems = (items) => {
    Object.entries(items).map(([key, value]) => (
      this._list.push(new DropdownItem({ titleText: key, quantity: value })))
    );

    this._list.map((item) => this._parent.appendChild(item.getItem()));
  }
}

class ListConvenience extends  List {
  getListValue = () => {
    const values = this._list.map((item) => item.getItemToString());
    return values.join(", ").slice(0, 20) + "...";
  };
}
 
class ListGuests extends List {
  constructor (options) {
    super(options);
    this._controlPanel = new ControlPanel
    this._parent.appendChild(this._controlPanel.getPanel());
  }
  
  getListValue = () => {
    let babies;
    const guests = this._list.reduce( (sum, current) => {
      const isBabes = current.getTitle() === "младенцы";

      if (isBabes)  {
        babies = current.getQuantity();
        return sum + 0;
      } else  return sum + current.getQuantity();
      
    } , 0);

    const guestLabel = getDecline(guests, ["гость", "гостя", "гостей"]);
    const babiesLabel = getDecline(babies, ["младенец", "младенца", "младенцев"]);

    if (!guests & !babies) return "Сколько гостей";
    if (!guests) return "Нельзя бронировать только для младенцев";
    return (babies === 0) ? `${guests} ${guestLabel}` : `${guests} ${guestLabel}, ${babies} ${babiesLabel}`;
        
  }
}

export { ListConvenience, ListGuests }