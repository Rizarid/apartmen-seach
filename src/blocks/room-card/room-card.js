import ImageSlider from '../../components/image-slider/image-slider';
import RateButton from '../../components/rate-button/rate-button';
import './room-card.scss';

class RoomCard {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._imageSlider = new ImageSlider(this._body);
    this._rateButton = new RateButton(this._body);
  }

  _getBody = (parent) => parent.querySelector('.js-room-card');
}

export default RoomCard;
