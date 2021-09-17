/* eslint-disable no-unused-vars */

import { Booking } from './booking-block';

{
  const bookingTarget = document.querySelector('.js-booking');
  let booking;
  if (bookingTarget) booking = new Booking(bookingTarget);
}