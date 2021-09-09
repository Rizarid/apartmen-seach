
class LogicModel {
  constructor(options) {
    const { 
      roomPrice, discount, servicesTotal, additionalServicesPrice, getQuantityDays 
    } = options;
    
    this._price = roomPrice;
    this._discount = discount;
    this._servicesTotal = servicesTotal;
    this._additionalServicesPrice = additionalServicesPrice;
    this._getQuantityDays = getQuantityDays;

    this.calculate();
  }

  calculate = () => {
    this._days = this._getQuantityDays();
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
