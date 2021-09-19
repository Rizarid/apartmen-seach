/* eslint-disable no-unused-vars */

import { Booking } from './booking-block';

{
  const bookingTarget = document.querySelector('.js-booking');
  if (bookingTarget) {
    const booking = new Booking(bookingTarget);
  }
}
