import '../../components/date-dropdown/date-dropdown';
import '../../components/dropdown/dropdown';
import '../../components/button/button';
import { LogicModel } from './booking__logic-model';
import { ViewModel } from './booking__view-model';
import './booking-block.sass';

class Booking {
  constructor(options = {}) {
    const { 
      target, roomPrice = 9990, discount = 2179, servicesTotal = 0, additionalServicesPrice = 300,
    } = options;

    this._view = new ViewModel(target);
    this._model = new LogicModel({ 
      roomPrice, discount, servicesTotal, additionalServicesPrice, getQuantityDays: this.getQuantityDays,
    });
    
    this.updateView();
    this._addListeners();
  }

  updateView = () => {
    this._view.setPrice(this._model.getPrice());
    this._view.setBasicPriceCalculate(this._model.getPrice(), this._model.getDays());
    this._view.setBasicPriceResult(this._model.getBasicPriceResult());
    this._view.setDiscount(this._model.getDiscount());
    this._view.setServicesTotal(this._model.getServicesTotal());
    this._view.setAdditionalServicesTotal(this._model.getAdditionalServicesPrice());
    this._view.setTotalPriceValue(this._model.getTotalPriceValue());
  }

  getQuantityDays = () => this._view.getQuantityDays();

  _addListeners = () => {
    this._view.getBooking().addEventListener('datepickerOnSelect', this._handleBookingBlockDatepickerOnSelect);
  }

  _handleBookingBlockDatepickerOnSelect = () => {
    this._model.calculate();
    this.updateView();
  }
}

export { Booking };
