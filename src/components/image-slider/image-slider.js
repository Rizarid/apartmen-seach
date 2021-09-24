import { createElement } from '../../utilities/utilities';
import './image-slider.sass';

class ImageSlider {
  constructor(target) {
    this._body = target;
    this._createSlides();
    this._createDotsBlock();

    this._initSlides();
    this._initDots();

    this._initPrevButton();
    this._initNextButton();

    this._addListeners();
    this._createResizeObserver();
    this._addResizeObserver();

    this._updateHeight(this._body);
    if (this._isTouch()) this._activateTouchOptions();
  }

  _createSlides = () => {
    const images = [...this._body.querySelectorAll('.js-image-slider__image')];
    this._slides = images.map((item) => new this._Slide(item));
  }

  _createDotsBlock = () => {
    this._dots = createElement('div', 'image-slider__dots');
    this._slides.map((item) => this._dots.appendChild(item.getDot()));
    this._body.appendChild(this._dots);
  }

  _initSlides = () => {
    this._previousSlide = this._slides[0].getSlide();
    this._activeSlide = this._slides[0].getSlide();
    this._activeSlide.classList.add('image-slider__image_active');
  }

  _initDots = () => {
    this._previousDot = this._slides[0].getDot();
    this._activeDot = this._slides[0].getDot();
    this._activeDot.classList.add('image-slider__slide-dote_active');
  }

  _switchSlide = (slide) => {
    this._previousSlide = this._activeSlide;
    this._activeSlide = slide;
    this._previousSlide.classList.remove('image-slider__image_active');
    this._activeSlide.classList.add('image-slider__image_active');
  }

  _switchDot = (dot) => {
    this._previousDot = this._activeDot;
    this._activeDot = dot;
    this._previousDot.classList.remove('image-slider__slide-dote_active');
    this._activeDot.classList.add('image-slider__slide-dote_active');
  }

  _initPrevButton = () => { this._prev = this._body.querySelector('.js-image-slider__prev'); };

  _initNextButton = () => { this._next = this._body.querySelector('.js-image-slider__next'); };

  _addListeners = () => {
    this._body.addEventListener('dotSwitch', this._handleDotSwitch);
    this._body.addEventListener('slideSwitch', this._handleSlideSwitch);

    this._body.addEventListener('dotReturn', this._handleDotReturn);
    this._body.addEventListener('slideReturn', this._handleSlideReturn);

    this._prev.addEventListener('click', this._handlePrevClick);
    this._next.addEventListener('click', this._handleNextClick);
  }

  _handleSlideSwitch = (event) => this._switchSlide(event.target)

  _handleDotSwitch = (event) => this._switchDot(event.target)

  _handleSlideReturn = () => {
    this._activeSlide.classList.remove('image-slider__image_active');
    this._activeSlide = this._previousSlide;
    this._activeSlide.classList.add('image-slider__image_active');
  }

  _handleDotReturn = () => {
    this._activeDot.classList.remove('image-slider__slide-dote_active');
    this._activeDot = this._previousDot;
    this._activeDot.classList.add('image-slider__slide-dote_active');
  }

  _handleNextClick = () => {
    let nextSlide = this._activeSlide.nextSibling;
    let nextDot = this._activeDot.nextSibling;

    if (!nextSlide) {
      nextSlide = this._slides[0].getSlide();
      nextDot = this._slides[0].getDot();
    }

    this._switchSlide(nextSlide);
    this._switchDot(nextDot);
  }

  _handlePrevClick = () => {
    let prevSlide = this._activeSlide.previousSibling;
    let prevDot = this._activeDot.previousSibling;

    if (!prevSlide) {
      const len = this._slides.length;
      prevSlide = this._slides[len - 1].getSlide();
      prevDot = this._slides[len - 1].getDot();
    }

    this._switchSlide(prevSlide);
    this._switchDot(prevDot);
  }

  _isTouch = () => ('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch);

  _activateTouchOptions = () => {
    this._prev.classList.add('image-slider__prev_touch');
    this._next.classList.add('image-slider__next_touch');
  }

  _updateHeight = (target) => {
    const { style } = target;
    style.height = `${target.offsetWidth * 0.55925}px`;
  }

  _createResizeObserver = () => {
    this.resizeObserver = new ResizeObserver((entries) => this._updateHeight(entries[0].target));
  }

  _addResizeObserver = () => this.resizeObserver.observe(this._body);

  _Slide = function (target) {
    this._body = target;
    this._dot = createElement('div', 'image-slider__slide-dote');

    this._onDotSwitch = new Event('dotSwitch', { bubbles: true });
    this._onSlideSwitch = new Event('slideSwitch', { bubbles: true });
    this._onDotReturn = new Event('dotReturn', { bubbles: true });
    this._onSlideReturn = new Event('slideReturn', { bubbles: true });

    this.getSlide = () => this._body;
    this.getDot = () => this._dot;

    this._handleDotMouseover = () => {
      this._dot.dispatchEvent(this._onDotSwitch);
      this._body.dispatchEvent(this._onSlideSwitch);
    };

    this._handleDotMouseout = () => {
      this._dot.dispatchEvent(this._onDotReturn);
      this._body.dispatchEvent(this._onSlideReturn);
    };

    this._dot.addEventListener('mouseover', this._handleDotMouseover);
    this._dot.addEventListener('mouseout', this._handleDotMouseout);
  }
}

export { ImageSlider };
