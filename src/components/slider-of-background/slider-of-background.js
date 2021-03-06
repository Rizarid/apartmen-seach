import './slider-of-background.scss';

class SliderOfBackground {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._interval = Number(this._body.dataset.interval);
    this._slidesNumber = 0;
    this._slides = this._body.children;
    setInterval(this._nextSlide, this._interval);
  }

  _getBody = (parent) => parent.querySelector('.js-slider-of-background');

  _nextSlide = () => {
    this._slides[this._slidesNumber].classList.remove('slider-of-background__image_active');
    this._slidesNumber = ((this._slidesNumber + 1 < this._slides.length)
      ? this._slidesNumber + 1 : 0
    );
    this._slides[this._slidesNumber].classList.add('slider-of-background__image_active');
  };
}

export default SliderOfBackground;
