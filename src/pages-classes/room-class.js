import { getRoundChart } from '../components/round-chart/round-chart';
import { Booking } from '../blocks/booking-block/booking-block';


class Room {
  constructor() {
    this._booking = new Booking({
      roomPrice: 9990, discount: 2179, servicesTotal: 0, additionalServicesPrice: 300,
    });

    this._chart = this._getChart();
    this._chart.innerHTML = getRoundChart([0, 65, 65, 130]);
  }

  _getChart = () => document.querySelector('.js-round-chart__content');
}

export { Room };
