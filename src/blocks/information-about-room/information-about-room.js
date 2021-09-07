import '../../components/information-block/information-block';
import { Reviews } from '../../components/reviews/reviews';
import { RoundChart } from '../../components/round-chart/round-chart';
import '../../components/bullet-list/bullet-list';
import './information-about-room.sass';

class InformationAboutRoom {
  constructor(options) {
    const { target, votes } = options;
    this._body = target;
    this._reviews = this._getReviews(); 
    this._roundChart = new RoundChart(votes);
    this._appendChart();
  }

  _getReviews = () => {
    const reviews = this._body.querySelector('.js-reviews');
    return new Reviews(reviews);
  };

  _appendChart = () => {
    const chart = this._body.querySelector('.js-round-chart__content');
    chart.innerHTML = this._roundChart.getChart()
  }
}

export { InformationAboutRoom };
