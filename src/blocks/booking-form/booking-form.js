import { numberMargins, getDecline } from '../../utilities/utilities';
import '../../components/button/button';
import DateDropdown from '../../components/date-dropdown/date-dropdown';
import Dropdown from '../../components/dropdown/dropdown';
import './booking-form.scss';

class BookingForm {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._getElements();
    this._getValues();
    this._calculate();
    this._update();
    this._addListeners();
    this._dateDropdown = new DateDropdown(this._getTarget('.js-booking-form__date'));
    this._dropdown = new Dropdown(this._getTarget('.js-booking-form__guests'));
  }

  _getBody = () => document.querySelector('.js-booking-form');

  _getTarget = (selector) => this._body.querySelector(selector);

  _getElements = () => {
    this._price = this._getTarget('.js-booking-form__price');
    this._basicPriceCalculate = this._getTarget('.js-booking-form__basic-price-calculate');
    this._basicPriceResult = this._getTarget('.js-booking-form__basic-price-result');
    this._discount = this._getTarget('.js-booking-form__services-prices');
    this._servicesTotal = this._getTarget('.js-booking-form__services-total');
    this._additionalServicesTotal = this._getTarget('.js-booking-form__additional-services-total');
    this._totalPrice = this._getTarget('.js-booking-form__total-price-value');
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

export default BookingForm;
