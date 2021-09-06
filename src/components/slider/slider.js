import * as $ from 'jquery';
import 'jquery-ui-slider/jquery-ui';
import 'jquery-ui-slider/jquery-ui.css';

import { numberMargins } from '../../scripts/numberMargins';
import './touch-punch';
import './slider.sass';

class Slider {
  constructor(options = {}) {
    this._init(options);
    this._parent = this._getParent();
    this._$body = $(this._parent).children('.slider__body');
    this._$value = $(this._parent).find('.slider__values');
    this._initSlider();
  }

  _getParent = () => document.querySelector(`.js-${this._parentSelector}`);

  _init = (options) => {
    const { parentSelector = 'slider-selector', min = 0, max = 15000, initValues = [min, max] } = options;
    this._parentSelector = parentSelector;
    this._min = min;
    this._max = max;
    this._initValues = initValues;
  }

  _initSlider = () => {
    this._$body.slider({
      range: true,
      min: this._min,
      max: this._max,
      values: this._initValues,
      slide: this._handleSliderChange,
    });

    const min = this._$body.slider('values', 0);
    const max = this._$body.slider('values', 1);
    this._$value.html(`${numberMargins(min)}&#8381 - ${numberMargins(max)}&#8381`);
  }

  _handleSliderChange = (event, ui) => {
    const [min, max] = ui.values;
    const value = `${numberMargins(min)}&#8381 - ${numberMargins(max)}&#8381`;
    this._$value.html(value);
  }
}

export { Slider };
