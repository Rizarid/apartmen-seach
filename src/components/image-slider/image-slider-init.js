/* eslint-disable no-unused-vars */

import { ImageSlider } from './image-slider';

{
  const sliderTargets = [...document.querySelectorAll('.js-image-slider')];
  if (sliderTargets) {
    const sliderCollection = sliderTargets.map((item) => new ImageSlider(item));
  }
}
