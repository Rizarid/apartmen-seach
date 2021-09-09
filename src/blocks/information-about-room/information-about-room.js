import '../../components/information-block/information-block';
import { Reviews } from '../../components/reviews/reviews';
import { RoundChart } from '../../components/round-chart/round-chart';
import '../../components/bullet-list/bullet-list';
import './information-about-room.sass';

class InformationAboutRoom {
  constructor(options) {
    const { target, votes } = options;
    this._body = target;
    this._reviews = new Reviews(this._getTarget('.js-reviews'));
    this._roundChart = new RoundChart(votes);
    this._appendChart();
  }

  _getTarget = (selector) => this._body.querySelector(selector);

  _appendChart = () => {
    const chart = this._getTarget('.js-round-chart__content');
    chart.innerHTML = this._roundChart.getChart();
  };
}

export { InformationAboutRoom };
