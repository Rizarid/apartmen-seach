import * as $ from "jquery"

import { ControlPanel } from "../../control-panel/control-panel.js";
import {DropdownItem} from "../__item/dropdown__item.js";

class List {
  constructor (options) {
    const { list, items } = options;
    this._parent = list;
    this._list = [];
    this._initItems(items);
  }

  getList = () => {return this._parent}

  clean = () => this._list.map((item) => item.clean());

  _initItems = (items) => {
    Object.entries(items).map(([key, value]) => (
      this._list.push(new DropdownItem({ titleText: key, quantity: value })))
    );

    this._list.map( (item) => this._parent.appendChild(item.getItem()));
  }
    
}
  
class ListConvenience extends  List {
  getListValue = () => (
    this._list.map( (item) => item.getItemToString()).join(", ").slice(0, 20) + "..."
  );
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

    if (!guests & !babies) return "Сколько гостей";

    if (!guests) return "Нельзя бронировать только для младенцев";
    
    if (babies === 0) return `${guests} ${this._getDeclineGuest(guests)}`;

    return `${guests} ${this._getDeclineGuest(guests)}, ${babies} ${this._getDeclineBabies(babies)}`;
        
  }

  _getDecline = function(numb){
    const quantity = String(numb);
    const length = quantity.length;
    const isNominative = quantity[length - 1] === "1" & quantity[length - 2] != "1";

    const isGenitive = (((quantity[length-1] === "2") | (quantity[length-1] === "3") | (
      quantity[length-1] === "4")) & quantity[length - 2] != "1"
    );
    
    return isNominative ? 0 : isGenitive ? 1 : 2; 
  }

  _getDeclineGuest = (numb) => {
    const guest = ["гость", "гостя", "гостей"];
    return guest[this._getDecline(numb)]
  }

  _getDeclineBabies = (numb) => {
    const guest = ["младенец", "младенца", "младенцев"];
    return guest[this._getDecline(numb)]
  }
}

export { ListConvenience, ListGuests}