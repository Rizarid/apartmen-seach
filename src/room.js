import './styles/room.sass';
import './fonts/fonts.css';
import './fonts/scss/_path.scss';
import './blocks/header/header.js';
import { Booking } from './blocks/booking-block/booking-block.js';

import './blocks/footer/footer.js';
import './blocks/information-about-room/information-about-room.js';
import './components/room-gallery/room-gallery.js';

const booking = new Booking({
  roomPrice: 9990, discount: 2179, servicesTotal: 0, additionalServicesPrice: 300,
});
