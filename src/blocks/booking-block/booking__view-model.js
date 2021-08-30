import * as $ from 'jquery';

import { numberMargins } from '../../scripts/numberMargins';
import { getDecline } from '../../scripts/getDecline';

class ViewModel {
  constructor() {
    this._$parent = $('.js-booking');
    this._$price = this._$parent.find('.js-booking__price');
    this._$basicPriceCalculate = this._$parent.find('.js-booking__basic-price-calculate');
    this._$basicPriceResult = this._$parent.find('.js-booking__basic-price-result');
    this._$discount = this._$parent.find('.js-booking__services-prices');
    this._$servicesTotal = this._$parent.find('.js-booking__services-total');
    this._$additionalServicesTotal = this._$parent.find('.js-booking__additional-services-total');
    this._$totalPriceValue = this._$parent.find('.js-booking__total-price-value');
  }

  getBooking = () => this._$parent[0];

  setPrice = (price) => this._$price.html(`${numberMargins(price)}&#8381 `) ;

  setBasicPriceCalculate = (price, days) => {
    this._$basicPriceCalculate.html(
      `${numberMargins(price)}&#8381 x ${days} ${getDecline(days, ['сутки', 'суток', 'суток'])}`,
    );
  }

  setBasicPriceResult = (price) => this._$basicPriceResult.html(`${numberMargins(price)}&#8381`);

  setDiscount = (price) => this._$discount.html(`${numberMargins(price)}&#8381`);

  setServicesTotal = (price) => this._$servicesTotal.html(`${numberMargins(price)}&#8381`);

  setAdditionalServicesTotal = (price) => {
    this._$additionalServicesTotal.html(`${numberMargins(price)}&#8381`);
  }

  setTotalPriceValue = (price) => this._$totalPriceValue.html(`${numberMargins(price)}&#8381`);
}

export { ViewModel };
