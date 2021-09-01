import './slider-of-background.sass';
import { BGSlider } from './bg-slider';

{
  const slider = document.querySelector('.js-slider-of-background');
  const bgSlider = new BGSlider(slider, 6000);
}
