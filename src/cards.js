/* eslint-disable no-unused-vars */

import './fonts/fonts.css';
import './fonts/scss/_path.scss';
import { Datepicker } from './components/datepicker/datepicker';
import { SearchForm } from './blocks/search-block/search-block';
import './blocks/registration-block/registration-block';
import { Booking } from './blocks/booking-block/booking-block';
import './blocks/sign-in-block/sign-in-block';
import { RoomCard } from './blocks/room-card-block/room-card';
import './styles/cards.sass';

{
  const booking = new Booking({
    roomPrice: 9990, discount: 2179, servicesTotal: 0, additionalServicesPrice: 300,
  });
  const datepickerContainer = document.querySelector('.main__date-picker-container');
  const datepicker = new Datepicker(datepickerContainer);
  const searchForm = new SearchForm({ dateDropdownSelector: 'date-selection', dropdownSelector: 'guests-quantity' });

  const roomCardsSelection = Array.prototype.slice.call(document.querySelectorAll('.js-room-card-block'));
  let roomCards;
  if (roomCardsSelection) {
    roomCards = roomCardsSelection.map((item) => new RoomCard(item))
  }
}
