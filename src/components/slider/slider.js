import * as $ from 'jquery';
import 'jquery-ui-slider/jquery-ui';
import 'jquery-ui-slider/jquery-ui.css';

import { numberMargins } from '../../scripts/numberMargins';
import './touch-punch';
import './slider.sass';

class Slider {
  constructor(options = {}) {
    this._init(options);
    this._$slider = this._getSlider();
    this._value = this._getValue();
    this._initSlider();
  }

  _init = (options) => {
    const { target, min = 0, max = 15000, initValues = [min, max] } = options;
    this._body = target;
    this._min = min;
    this._max = max;
    this._initValues = initValues;
  }

  _getSlider = () => $(this._body).children('.slider__body');

  _getValue = () => this._body.querySelector('.slider__values');

  _initSlider = () => {
    this._$slider.slider({
      range: true,
      min: this._min,
      max: this._max,
      values: this._initValues,
      slide: this._handleSliderChange,
    });

    const min = this._$slider.slider('values', 0);
    const max = this._$slider.slider('values', 1);
    this._value.innerHTML = `${numberMargins(min)}&#8381 - ${numberMargins(max)}&#8381`;
  }

  _handleSliderChange = (event, ui) => {
    const [min, max] = ui.values;
    const value = `${numberMargins(min)}&#8381 - ${numberMargins(max)}&#8381`;
    this._value.innerHTML = value;
  }
}

export { Slider };
