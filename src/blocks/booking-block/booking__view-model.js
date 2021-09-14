import { numberMargins } from '../../scripts/numberMargins';
import { getDecline } from '../../scripts/getDecline';
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import { DropdownClass } from '../../components/dropdown/DropdownClass';

class ViewModel {
  constructor(target) {
    this._body = target;
    this._getElements();
  }

  getBooking = () => this._body;

  getQuantityDays = () => this._dateDropdown.getQuantityDays();

  setPrice = (price) => { this._price.innerHTML = `${numberMargins(price)}&#8381 `; };

  setBasicPriceCalculate = (price, days) => {
    this._basicPriceCalculate.innerHTML = (
      `${numberMargins(price)}&#8381 x ${days} ${getDecline(days, ['сутки', 'суток', 'суток'])}`
    );
  };

  setBasicPriceResult = (price) => {
    this._basicPriceResult.innerHTML = `${numberMargins(price)}&#8381`;
  };

  setDiscount = (price) => { this._discount.innerHTML = `${numberMargins(price)}&#8381`; };

  setServicesTotal = (price) => { this._servicesTotal.innerHTML = `${numberMargins(price)}&#8381`; };

  setAdditionalServicesTotal = (price) => {
    this._additionalServicesTotal.innerHTML = `${numberMargins(price)}&#8381`;
  };

  setTotalPriceValue = (price) => {
    this._totalPriceValue.innerHTML = `${numberMargins(price)}&#8381`;
  };

  _getTarget = (selector) => this._body.querySelector(selector);

  _getElements = () => {
    this._price = this._getTarget('.js-booking__price');
    this._basicPriceCalculate = this._getTarget('.js-booking__basic-price-calculate');
    this._basicPriceResult = this._getTarget('.js-booking__basic-price-result');
    this._discount = this._getTarget('.js-booking__services-prices');
    this._servicesTotal = this._getTarget('.js-booking__services-total');
    this._additionalServicesTotal = this._getTarget('.js-booking__additional-services-total');
    this._totalPriceValue = this._getTarget('.js-booking__total-price-value');

    this._dateDropdown = new DateDropdown({
      target: this._getTarget('.js-date-select'),
      initDates: ['+1d', '+5d'],
    });
    this._guests = new DropdownClass({ target: this._getTarget('.js-guests') });
  };
}

export { ViewModel };
