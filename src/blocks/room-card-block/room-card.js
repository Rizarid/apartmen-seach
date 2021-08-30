import * as $ from 'jquery';

import { ImageSlider } from '../../components/image-slider/image-slider';
import { numberMargins } from '../../scripts/numberMargins';

class RoomCard {
  constructor(card) {
    this.card = card;
    this.slider = new ImageSlider($(this.card).find('.js-image-slider')[0]);
    [this.price] = $(this.card).find('.js-room-card-block__price');
    this.price.innerHTML = `${numberMargins(this.price.innerHTML)}&#8381 `;
  }
}

export { RoomCard };
