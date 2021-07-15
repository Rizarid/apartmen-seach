import * as $ from 'jquery';

import '../../scripts/jquery-ui/jquery-ui.js';
import '../../scripts/jquery-ui/jquery-ui.css';
import './slider.sass';


class Slider {
  constructor(options){
    
    this._init(options);
    
    this._parent = this._getParent();
    this._$body = $(this._parent).children(".slider__body");
    this._$value = $(this._parent).find(".slider__values");

    this._initSlider(this); 
  }

    _getParent = () => {
      return document.querySelector(`.js-${this._parentSelector}`)   
    }

    _init = (options) => {
        this._parentSelector = options.parentSelector || "slider-selector";
        this.min = options.min || 0;
        this.max = options.max || 15000;
        this.initValues = options.initValues || [min, max];
      }

    _initSlider = (_this) => {

      this._$body.slider({
        range: true,
        min: _this.min,
        max: _this.max,
        values: _this.initValues,

        slide: function(event, ui) {
          let value = `${_this._numberMargins(ui.values[0])}&#8381 - ${_this._numberMargins(ui.values[1])}&#8381`;
          _this._$value.html(value);
        }
      })

      this._$value.html(`${this._numberMargins(this._$body.slider("values", 0))}&#8381 - ${this._numberMargins(this._$body.slider("values", 1))}&#8381`);
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

export {Slider}