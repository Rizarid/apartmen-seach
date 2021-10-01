import { SearchForm } from '../../blocks/search-form/search-form';
import { BookingForm } from '../../blocks/booking-form/booking-form';
import { RegistrationForm } from '../../blocks/registration-form/registration-form';
import { DatePicker } from '../../components/date-picker/date-picker';
import { RoomCard } from '../../blocks/room-card/room-card';
import '../../blocks/sign-in-form/sign-in-form';

class Cards {
  constructor() {
    this._body = this._getBody();
    this._getCards();
  }

  _getBody = () => document.querySelector('.js-cards');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getCards = () => {
    this._searchBlock = new SearchForm(this._getTarget('.js-cards__search-form-container'));
    this._bookingForm = new BookingForm(this._getTarget('.js-cards__booking-form-container'));
    this._registration = new RegistrationForm(this._getTarget('.js-cards__registration-form-container'));
    this._datePicker = new DatePicker(this._getTarget('.js-cards__date-picker-container'));
    this._roomCards = this._getRoomCards(); 
  };

  _getRoomCards = () => {
    const roomCardsTargets = Array.from(this._body.querySelectorAll('.js-cards__room-card-container'));
    return roomCardsTargets.map((item) => new RoomCard(item));
  };
}

export { Cards };
