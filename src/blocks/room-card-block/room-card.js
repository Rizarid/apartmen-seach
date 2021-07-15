import * as $ from "jquery";

import {ImageSlider} from "../../components/image-slider/image-slider.js";


class RoomCard {
  constructor(card){
    this.card = card;
    this.slider = new ImageSlider($(this.card).find(".js-image-slider")[0]);
    this.price = $(this.card).find(".js-room-card-block__price")[0];
    this.price.innerHTML = this._numberMargins(this.price.innerHTML) + "&#8381 ";
  }

  _numberMargins = function(number){

    let arr = String(number).split("");
    let len = Math.trunc(arr.length/3);

    for (let i=1; i<=len; i++) {
        arr.splice(arr.length - (i * 3 + i - 1), 0, " ");
    }

    return arr.join("");
  }
}

export {RoomCard}