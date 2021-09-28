import { Booking } from '../../blocks/booking-block/booking-block';
import { InformationAboutRoom } from '../../blocks/information-about-room/information-about-room';
import { Header } from '../../blocks/header/header';

class Room {
  constructor() {
    this._body = this._getBody();
    this._header = new Header(this._getTarget('.js-room__header'));
    this._information = new InformationAboutRoom(this._getTarget('.js-room__room-information-container'));
    this._booking = new Booking(this._getTarget('.js-room__booking-container'));
  }

  _getBody = () => document.querySelector('.js-room');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export { Room };