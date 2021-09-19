/* eslint-disable no-unused-vars */

import { Slider } from './slider';

{
  const sliderTargets = [...document.querySelectorAll('.js-slider')];
  if (sliderTargets) {
    const sliderCollection = sliderTargets.map((item) => new Slider(item));
  }
}
