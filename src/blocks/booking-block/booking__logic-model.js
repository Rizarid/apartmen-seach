import { DateDropdown } from "../../components/date-dropdown/date-dropdown";
import {DropdownClass} from "../../components/dropdown/DropdownClass.js";

class LogicModel {
  
  constructor(roomPrice, discount, servicesTotal, additionalServicesPrice){

    this._price = roomPrice;
    this._discount = discount;
    this._servicesTotal = servicesTotal;
    this._additionalServicesPrice = additionalServicesPrice;

    this._dateDropdown = new DateDropdown({parentSelector: "date-select", initDates:["+1d", "+5d"]});

    this._guests = new DropdownClass({parentSelector: "guests"}); 

    this.calculate();
  }

  calculate = () => {

    this._days = this._dateDropdown.getQuantityDays();
    this._basicPriceResult = this._price * this._days;
    this._totalPriceValue = (this._days > 0) ? this._basicPriceResult - this._discount + 
      this._servicesTotal + this._additionalServicesPrice : 0;
  }

  getPrice = () => {
    return this._price;
  }

  getDiscount = () => {
    return this._discount;
  }

  getServicesTotal = () => {
    return this._servicesTotal;
  }

  getAdditionalServicesPrice = () => {
    return this._additionalServicesPrice;
  }

  getDays = () => {
    return this._days;
  }

  getBasicPriceResult = () => {
    return this._basicPriceResult;
  }

  getTotalPriceValue = () => {
    return this._totalPriceValue;
  }
}

export {LogicModel}