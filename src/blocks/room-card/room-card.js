import '../../components/rate-button/rate-button';
import ImageSlider from '../../components/image-slider/image-slider';
import './room-card.scss';

class RoomCard {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._imageSlider = new ImageSlider(this._body);
  }

  _getBody = (parent) => parent.querySelector('.js-room-card');
}

export default RoomCard;
