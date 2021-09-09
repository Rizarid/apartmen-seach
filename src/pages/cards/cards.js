/* eslint-disable no-unused-vars */

import '../../fonts/fonts.css';
import '../../fonts/scss/_path.scss';
import { Datepicker } from '../../components/datepicker/datepicker';
import { SearchForm } from '../../blocks/search-block/search-block';
import { RegistrationForm } from '../../blocks/registration-block/registration-block';
import { Booking } from '../../blocks/booking-block/booking-block';
import '../../blocks/sign-in-block/sign-in-block';
import { RoomCard } from '../../blocks/room-card-block/room-card';
import './cards.sass';

{
  const _body = document.querySelector('.js-cards');
  const getTarget = (selector) => _body.querySelector(selector);

  const booking = new Booking({
    target: getTarget('.js-booking'),
    roomPrice: 9990, 
    discount: 2179, 
    servicesTotal: 0, 
    additionalServicesPrice: 300,
  });

  const datepicker = new Datepicker(getTarget('.js-datepicker'));
  const searchForm = new SearchForm({ target: getTarget('.js-search-block') });
  const registration = new RegistrationForm(getTarget('.js-registration-block'));

  const roomCardsSelection = Array.prototype.slice.call(document.querySelectorAll('.js-room-card-block'));
  let roomCards;
  if (roomCardsSelection) {
    roomCards = roomCardsSelection.map((item) => new RoomCard(item))
  }
}
