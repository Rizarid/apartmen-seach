import '../../components/button/button';
import '../../components/rate-button/rate-button';
import { ImageSlider } from '../../components/image-slider/image-slider';
import { numberMargins } from '../../scripts/numberMargins';
import './room-card-block.sass';

class RoomCard {
  constructor(target) {
    this._body = target;
    this._slider = new ImageSlider(this._getTarget('.js-image-slider'));
    this._price = this._getTarget('.js-room-card-block__price');
    this._price.innerHTML = `${numberMargins(this._price.innerHTML)}&#8381 `;
  }

  _getTarget = (selector) => this._body.querySelector(selector);
}

export { RoomCard };
