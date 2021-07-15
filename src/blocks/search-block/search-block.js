import "../../components/button/button.js";
import {DateDropdown} from "../../components/date-dropdown/date-dropdown.js";
import "../../components/dropdown/dropdown.js";
import { DropdownClass } from "../../components/dropdown/DropdownClass";
import {ListGuests} from "../../components/dropdown/__list/dropdown__list.js";
import "./search-block.sass";

{
  const dateDropdown = new DateDropdown({parentSelector: "date-selection"});
  const dropdown = new DropdownClass({parentSelector: "guests-quantity", items: {"взрослые": 0, "дети": 0, "младенцы": 0}, getListClass: (items) => {return new ListGuests(items)}}); 
}