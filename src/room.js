/* eslint-disable no-unused-vars */
import './styles/room.sass';
import './fonts/fonts.css';
import './fonts/scss/_path.scss';
import './blocks/header/header';
import { Booking } from './blocks/booking-block/booking-block';
import './blocks/footer/footer';
import './blocks/information-about-room/information-about-room';
import './components/room-gallery/room-gallery';

const booking = new Booking({
  roomPrice: 9990, discount: 2179, servicesTotal: 0, additionalServicesPrice: 300,
});
