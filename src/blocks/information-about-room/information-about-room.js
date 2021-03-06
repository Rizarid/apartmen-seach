import '../../components/information-block/information-block';
import '../../components/bullet-list/bullet-list';
import Reviews from '../../components/reviews/reviews';
import RoundChart from '../../components/round-chart/round-chart';
import './information-about-room.scss';

class InformationAboutRoom {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._reviews = new Reviews(this._getTarget('.js-information-about-room__reviews'));
    this._roundChart = new RoundChart(this._getTarget('.js-information-about-room__review-statistics'));
  }

  _getBody = (parent) => parent.querySelector('.js-information-about-room');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export default InformationAboutRoom;
