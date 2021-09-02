import './slider-of-background.sass';
class BGSlider {
  constructor(slider, interval) {
    this._slider = slider;
    this._interval = interval;
    this._slidesNumber = 0;
    this._slides = this._slider.children;
    setInterval(this._nextSlide, this._interval);
  }

  _nextSlide = () => {
    this._slides[this._slidesNumber].classList.remove('slider-of-background__image_active');
    this._slidesNumber = ((this._slidesNumber + 1 < this._slides.length)
      ? this._slidesNumber + 1 : 0
    );
    this._slides[this._slidesNumber].classList.add('slider-of-background__image_active');
  };
}

export { BGSlider };
