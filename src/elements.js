import "./fonts/fonts.css";
import "./fonts/scss/_path.scss";
import "./components/text-field/text-field.js";
import "./components/masked-text-field/masked-text-field.js";
import "./components/expandable-checkbox-list/expandable-checkbox-list.js";
import {DateDropdown} from "./components/date-dropdown/date-dropdown.js";
import {FilterDateDropdown} from "./components/filter-date-dropdown/filter-date-dropdown.js"
import "./components/checkbox-buttons/checkbox-buttons.js";
import "./components/subscription-field/subscription-field.js"
import "./components/radio-button/radio-button.js";
import "./components/like-button/like-button.js";
import "./components/rich-checkbox-buttons/rich-checkbox-buttons.js" ;
import {Slider} from "./components/slider/slider.js";
import "./components/button/button.js";
import "./components/bullet-list/bullet-list.js";
import "./components/information-block/information-block.js";
import "./components/review/review.js";
import "./components/pagination/pagination.js";
import "./components/toggle/toggle.js";
import "./components/rate-button/rate-button.js";
import "./components/dropdown/dropdown.js";
import {DropdownClass} from "./components/dropdown/DropdownClass.js";
import {ListConvenience, ListGuests} from "./components/dropdown/__list/dropdown__list.js";
import "./styles/elements.sass";


{
  const guestsQuantity = new DropdownClass({ parentSelector: "guests-quantity"});
  const convenience = new DropdownClass({parentSelector: "convenience", items: {"спальни":  2, "кровати": 2 , "ванные комнаты": 0}, getListClass: (items) => {return new ListConvenience(items)}});
  const dateDropdown = new DateDropdown({parentSelector: "date-selection"});
  const dateFilter = new FilterDateDropdown({parentSelector: "date-filter", initDate: ["19.08.2021", "23.08.2021"]})
  const priceFilter = new Slider({parentSelector: "price-filter", min: 0, max:16000, initValues: ["5000", "10000"]});
}