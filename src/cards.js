import * as $ from "jquery";

import "./fonts/fonts.css";
import "./fonts/scss/_path.scss";
import {Datepicker} from "./components/datepicker/datepicker.js";
import "./blocks/search-block/search-block.js";
import "./blocks/registration-block/registration-block.js"
import {Booking} from "./blocks/booking-block/booking-block.js";
import "./blocks/sign-in-block/sign-in-block.js";
import "./blocks/room-card-block/room-card-block.js";
import "./scripts/jquery-ui/jquery-ui.js";
import "./scripts/jquery-ui/jquery-ui.css";
import "./scripts/datepicke-russification.js";
import "./styles/cards.sass";



{
  const booking = new Booking(9990, 2179, 0, 300);
  
  const datepickerContainer = document.querySelector(".main__date-picker-container");
  const datepicker = new Datepicker(datepickerContainer);
}
