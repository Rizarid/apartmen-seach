/* eslint-disable no-unused-vars */

import { SliderOfBackground } from './slider-of-background';

{
  const sliderOfBackgroundTargets = [...document.querySelectorAll('.js-slider-of-background')];
  let sliderOfBackgroundCollection = [];
  if (sliderOfBackgroundTargets) {
    sliderOfBackgroundCollection = sliderOfBackgroundTargets.map((item) => (
      new SliderOfBackground(item, 6000)
    ));
  }
}