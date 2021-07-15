import * as $ from "jquery";

class ViewModel {
  
  constructor(){

    this._$parent = $(".js-booking");
    this._$price = this._$parent.find(".js-booking__price");
    this._$basicPriceCalculate = this._$parent.find(".js-booking__basic-price-calculate");
    this._$basicPriceResult = this._$parent.find(".js-booking__basic-price-result");
    this._$discount = this._$parent.find(".js-booking__services-prices");
    this._$servicesTotal = this._$parent.find(".js-booking__services-total");
    this._$additionalServicesTotal = this._$parent.find(".js-booking__additional-services-total");
    this._$totalPriceValue = this._$parent.find(".js-booking__total-price-value");
  }

  getBooking = () => {return this._$parent[0]};
    
  _numberMargins = function(number){

    let arr = String(number).split("");
    let len = Math.trunc(arr.length/3);

    for (let i=1; i<=len; i++) {
        arr.splice(arr.length - (i * 3 + i - 1), 0, " ");
    }

    return arr.join("");
  }

  setPrice = (price) => {
    this._$price.html(this._numberMargins(price) + "&#8381 ") ;
  }

  setBasicPriceCalculate = (price, days) => {
    this._$basicPriceCalculate.html(`${this._numberMargins(price)}&#8381 x ${days} суток`);
  }

  setBasicPriceResult = (price) => {
    this._$basicPriceResult.html(this._numberMargins(price) + "&#8381");
  }

  setDiscount = (price) => {
    this._$discount.html(" " + this._numberMargins(price) + "&#8381");
  } 

  setServicesTotal = (price) => {
    this._$servicesTotal.html(this._numberMargins(price) + "&#8381");
  }

  setAdditionalServicesTotal = (price) => {
    this._$additionalServicesTotal.html(this._numberMargins(price) + "&#8381");
  }

  setTotalPriceValue = (price) => {
    this._$totalPriceValue.html(this._numberMargins(price) + "&#8381");
  }
}

export {ViewModel}