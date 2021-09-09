import { InformationAboutRoom } from '@/blocks/information-about-room/information-about-room';
import { Booking } from '@/blocks/booking-block/booking-block';

class Room {
  constructor() {
    this._body = this._getBody();
    this._booking = this._getBooking();
    this._information = this._getInformation();
  }

  _getBody = () => document.querySelector('.room');

  _getTarget = (selector) => this._body.querySelector(selector);

  _getBooking = () => {
    const target = this._getTarget('.js-booking');
    return new Booking({
      target, roomPrice: 9990, discount: 2179, servicesTotal: 0, additionalServicesPrice: 300,
    });
  }

  _getInformation = () => {
    const target = this._getTarget('.information-about-room');
    return new InformationAboutRoom({ target, votes: [0, 65, 65, 130] });
  }
}

export { Room };
