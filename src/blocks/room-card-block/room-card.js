import * as $ from 'jquery';

import './room-card-block.sass';
import '../../components/button/button';
import '../../components/rate-button/rate-button';

import { ImageSlider } from '../../components/image-slider/image-slider';
import { numberMargins } from '../../scripts/numberMargins';

class RoomCard {
  constructor(card) {
    this._card = card;
    this._slider = new ImageSlider($(this._card).find('.js-image-slider')[0]);
    [this._price] = $(this._card).find('.js-room-card-block__price');
    this._price.innerHTML = `${numberMargins(this._price.innerHTML)}&#8381 `;
  }
}

export { RoomCard };
