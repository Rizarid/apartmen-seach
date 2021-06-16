import './searchBlock.sass';
import {DateDropdown} from '../../components/dateDropdown/dateDropdown.js';
import '../../components/dropdown/dropdown.js';
import {Guests} from '../../components/dropdown/_guests/dropdown__Guests.js'
import '../../components/button/button.js';


const dateDropdown = new DateDropdown(".dateSelection", ["прибытие", "выезд"], ["dateComing, dateLeave"]);

const dropdown = new Guests(".guestsQuantity", "гости", "guestsQuantity"); 