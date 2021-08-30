import * as $ from 'jquery';

import { numberMargins } from '../../scripts/numberMargins';
import '../../scripts/jquery-ui/jquery-ui.js';
import '../../scripts/jquery-ui/jquery-ui.css';
import './slider.sass';

class Slider {
  constructor(options = {}) {
    this._init(options);

    this._parent = this._getParent();
    this._$body = $(this._parent).children('.slider__body');
    this._$value = $(this._parent).find('.slider__values');

    this._initSlider(this);
  }

    _getParent = () => document.querySelector(`.js-${this._parentSelector}`)

    _init = (options) => {
      const { parentSelector = 'slider-selector', min = 0, max = 15000, initValues = [min, max] } = options;
      this._parentSelector = parentSelector;
      this.min = min;
      this.max = max;
      this.initValues = initValues;
    }

    _initSlider = (_this) => {
      this._$body.slider({
        range: true,
        min: _this.min,
        max: _this.max,
        values: _this.initValues,
        slide: this.handleSliderChange,
      });

      const min = this._$body.slider('values', 0);
      const max = this._$body.slider('values', 1);
      this._$value.html(`${numberMargins(min)}&#8381 - ${numberMargins(max)}&#8381`);
    }

    handleSliderChange = (event, ui) => {
      const [min, max] = ui.values;
      const value = `${numberMargins(min)}&#8381 - ${numberMargins(max)}&#8381`;
      this._$value.html(value);
    }
}

export { Slider };
