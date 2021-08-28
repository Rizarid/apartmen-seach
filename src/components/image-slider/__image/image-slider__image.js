import "../../../scripts/create-element.js"

function Slide(img){

  this._slide = img;
  this._dot = createElement("div", "image-slider__slide-dote");

  this.getSlide = () => this._slide;
  this.getDot = () => this._dot;

  this._onDotSwitch = new Event("dotSwitch", { bubbles: true });
  this._onSlideSwitch = new Event("slideSwitch", { bubbles: true });

  this._onDotReturn = new Event("dotReturn", { bubbles: true });
  this._onSlideReturn = new Event("slideReturn", { bubbles: true });

  this._handleDotMouseover = () => {
    this._dot.dispatchEvent(this._onDotSwitch);
    this._slide.dispatchEvent(this._onSlideSwitch);
  }

  this._handleDotMouseout = () => {
    this._dot.dispatchEvent(this._onDotReturn);
    this._slide.dispatchEvent(this._onSlideReturn);
  }

  this._dot.addEventListener("mouseover", this._handleDotMouseover);
  this._dot.addEventListener("mouseout", this._handleDotMouseout);
}

export {Slide}