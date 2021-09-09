import '../../scripts/create-element';

class Slide {
  constructor(target) {
    this._body = target;
    this._dot = createElement('div', 'image-slider__slide-dote');
    this._createEvents();
    this._addListeners();
  }

  getSlide = () => this._body;

  getDot = () => this._dot;

  _createEvents = () => {
    this._onDotSwitch = new Event('dotSwitch', { bubbles: true });
    this._onSlideSwitch = new Event('slideSwitch', { bubbles: true });
    this._onDotReturn = new Event('dotReturn', { bubbles: true });
    this._onSlideReturn = new Event('slideReturn', { bubbles: true });
  }

  _handleDotMouseover = () => {
    this._dot.dispatchEvent(this._onDotSwitch);
    this._body.dispatchEvent(this._onSlideSwitch);
  };

  _handleDotMouseout = () => {
    this._dot.dispatchEvent(this._onDotReturn);
    this._body.dispatchEvent(this._onSlideReturn);
  };

  _addListeners = () => {
    this._dot.addEventListener('mouseover', this._handleDotMouseover);
    this._dot.addEventListener('mouseout', this._handleDotMouseout);
  }
}

export { Slide };
