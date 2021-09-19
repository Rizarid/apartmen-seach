import { numberMargins } from '../../scripts/numberMargins';
import { getDecline } from '../../scripts/getDecline';
import '../../components/button/button';
import '../../components/dropdown/dropdown-init';
import '../../components/date-dropdown/date-dropdown-init';
import './booking-block.sass';

class Booking {
  constructor(target) {
    this._body = target;
    this._getElements();
    this._getValues();
    this._calculate();
    this._update();
    this._addListeners();
  }

  _getTarget = (selector) => this._body.querySelector(selector);

  _getElements = () => {
    this._price = this._getTarget('.js-booking__price');
    this._basicPriceCalculate = this._getTarget('.js-booking__basic-price-calculate');
    this._basicPriceResult = this._getTarget('.js-booking__basic-price-result');
    this._discount = this._getTarget('.js-booking__services-prices');
    this._servicesTotal = this._getTarget('.js-booking__services-total');
    this._additionalServicesTotal = this._getTarget('.js-booking__additional-services-total');
    this._totalPrice = this._getTarget('.js-booking__total-price-value');
  };

  _getValues = () => {
    this._priceValue = parseInt(this._price.innerText.replace(/\s/g, ''), 10);
    this._discountValue = parseInt(this._discount.innerText.replace(/\s/g, ''), 10);
    this._servicesTotalValue = parseInt(this._servicesTotal.innerText.replace(/\s/g, ''), 10);
    this._additionalServicesTotalValue = parseInt(this._additionalServicesTotal.innerText.replace(/\s/g, ''), 10);
    this._days = 0;
  }

  _calculate = () => {
    this._basicPriceResult = this._priceValue * this._days;
    this._totalPriceValue = (this._days > 0) ? this._basicPriceResult - this._discountValue
      + this._servicesTotalValue + this._additionalServicesTotalValue : 0;
  };

  _update = () => {
    const { _priceValue: price, _days: days } = this;
    this._basicPriceCalculate.innerHTML = (
      `${numberMargins(price)}&#8381 x ${days} ${getDecline(days, ['сутки', 'суток', 'суток'])}`
    );

    this._totalPrice.innerHTML = `${numberMargins(this._totalPriceValue)}&#8381`;
  }

  _addListeners = () => {
    this._body.addEventListener('dateDropdownSelected', this._handleDateDropdownOnSelect);
  };

  _handleDateDropdownOnSelect = (event) => {
    event.stopPropagation();
    this._days = event.detail.daysCount;
    this._calculate();
    this._update();
  };
}

export { Booking };
