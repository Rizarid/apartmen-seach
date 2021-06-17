import './bookingBlock.sass';
import * as $ from 'jquery';
import { Booking } from './Booking.js'
import { DateDropdown } from '../../components/dateDropdown/dateDropdown';
import '../../components/dateDropdown/dateDropdown';
import '../../components/dropdown/dropdown.js';
import {Guests} from '../../components/dropdown/_guests/dropdown__Guests.js';
import '../../components/button/button.js'

const booking = new Booking(9990, 2179, 0, 300);
