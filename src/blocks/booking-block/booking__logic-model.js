import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import { DropdownClass } from '../../components/dropdown/DropdownClass';

class LogicModel {
  constructor(roomPrice, discount, servicesTotal, additionalServicesPrice) {
    this._price = roomPrice;
    this._discount = discount;
    this._servicesTotal = servicesTotal;
    this._additionalServicesPrice = additionalServicesPrice;

    this._dateDropdown = new DateDropdown({ parentSelector: 'date-select', initDates: ['+1d', '+5d'] });
    this._guests = new DropdownClass({ parentSelector: 'guests' });

    this.calculate();
  }

  calculate = () => {
    this._days = this._dateDropdown.getQuantityDays();
    this._basicPriceResult = this._price * this._days;
    this._totalPriceValue = (this._days > 0) ? this._basicPriceResult - this._discount
      + this._servicesTotal + this._additionalServicesPrice : 0;
  };

  getPrice = () => this._price;

  getDiscount = () => this._discount;

  getServicesTotal = () => this._servicesTotal;

  getAdditionalServicesPrice = () => this._additionalServicesPrice;

  getDays = () => this._days;

  getBasicPriceResult = () => this._basicPriceResult;

  getTotalPriceValue = () => this._totalPriceValue;
}

export { LogicModel };
