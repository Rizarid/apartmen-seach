import { SearchBlock } from '../../blocks/search-block/search-block';
import { Booking } from '../../blocks/booking-block/booking-block';
import { RegistrationBlock } from '../../blocks/registration-block/registration-block';
import { DatePicker } from '../../components/date-picker/date-picker';
import { RoomCard } from '../../blocks/room-card-block/room-card-block';
import '../../blocks/sign-in-block/sign-in-block';

class Cards {
  constructor() {
    this._body = this._getBody();
    this._getCards();
  }

  _getBody = () => document.querySelector('.js-cards');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getCards = () => {
    this._searchBlock = new SearchBlock(this._getTarget('.js-cards__search-form-container'));
    this._booking = new Booking(this._getTarget('.js-cards__booking-form-container'));
    this._registration = new RegistrationBlock(this._getTarget('.js-cards__registration-form-container'));
    this._datePicker = new DatePicker(this._getTarget('.js-cards__date-picker-container'));
    this._roomCards = this._getRoomCards(); 
  };

  _getRoomCards = () => {
    const roomCardsTargets = Array.from(this._body.querySelectorAll('.js-cards__room-card-container'));
    return roomCardsTargets.map((item) => new RoomCard(item));
  };
}

export { Cards };
