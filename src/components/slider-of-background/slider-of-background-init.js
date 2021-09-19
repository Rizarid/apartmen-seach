/* eslint-disable no-unused-vars */

import { SliderOfBackground } from './slider-of-background';

{
  const sliderOfBackgroundTargets = [...document.querySelectorAll('.js-slider-of-background')];
  if (sliderOfBackgroundTargets) {
    const sliderOfBackgroundCollection = sliderOfBackgroundTargets.map((item) => (
      new SliderOfBackground(item)
    ));
  }
}
