import * as $ from "jquery";

import "../../scripts/create-element.js"
import "./image-slider.sass"
import {Slide} from "./__image/image-slider__image.js"


class ImageSlider{
  
  constructor(slider){

    this._slider = slider;

    this._createSlides();
    this._createDotsBlock();

    this._initSlides();
    this._initDots();

    this._initPrevButton();
    this._initNextButton();

    this._addListeners();

    this._createResizeObserver();
    this._addResizeObserver();

    this._updateHeight(this._slider);

    if (this._isTouch()) this._activateTouchOptions();
  }

  _createSlides = () => {
    let $images = $(this._slider).children(".image-slider__slides").children(".image-slider__image");
    this._slides = $.map($images, (item) => new Slide(item));
  }

  _createDotsBlock = () => {
    this._dots = createElement("div", "image-slider__dots");
    this._slides.map( (item) => this._dots.appendChild(item.getDot()));
    this._slider.appendChild(this._dots);
  }

  _initSlides = () => {
    this._previousSlide = this._slides[0].getSlide();
    this._activeSlide = this._slides[0].getSlide();
    this._activeSlide.classList.add("image-slider__image_active");
  }

  _initDots = () => {
    this._previousDot = this._slides[0].getDot();
    this._activeDot = this._slides[0].getDot();
    this._activeDot.classList.add("image-slider__slide-dote_active");
  }

  _switchSlide = (slide) => {
    this._previousSlide = this._activeSlide;
    this._activeSlide = slide;
    this._previousSlide.classList.remove("image-slider__image_active");
    this._activeSlide.classList.add("image-slider__image_active");
  }

  _switchDot = (dot) => {
    this._previousDot = this._activeDot;
    this._activeDot = dot;
    this._previousDot.classList.remove("image-slider__slide-dote_active");
    this._activeDot.classList.add("image-slider__slide-dote_active");
  }

  _initPrevButton = () => this._prev = $(this._slider).children(".image-slider__prev")[0]; 

  _initNextButton = () => this._next = $(this._slider).children(".image-slider__next")[0];
 
  _addListeners = () => {

    this._slider.addEventListener("dotSwitch", this._handleDotSwitch);
    this._slider.addEventListener("slideSwitch", this._handleSlideSwitch);

    this._slider.addEventListener("dotReturn", this._handleDotReturn);
    this._slider.addEventListener("slideReturn", this._handleSlideReturn);

    this._prev.addEventListener("click", this._handlePrevClick);
    this._next.addEventListener("click", this._handleNextClick);
  }

  _handleSlideSwitch = (e) => this._switchSlide(e.target)

  _handleDotSwitch =  (e) => this._switchDot(e.target)

  _handleSlideReturn = () => {
    this._activeSlide.classList.remove("image-slider__image_active"); 
    this._activeSlide = this._previousSlide;
    this._activeSlide.classList.add("image-slider__image_active");
  }

  _handleDotReturn = () => {
    this._activeDot.classList.remove("image-slider__slide-dote_active");
    this._activeDot = this._previousDot;
    this._activeDot.classList.add("image-slider__slide-dote_active");
  }

  _handleNextClick = () => {
    const nextSlide = $(this._activeSlide).next()[0];
    const nextDot = $(this._activeDot).next()[0];

    if (nextSlide){

      this._switchSlide(nextSlide);
      this._switchDot(nextDot);

    } else{

      this._switchSlide($(this._activeSlide).parent().children().first()[0]);
      this._switchDot($(this._activeDot).parent().children().first()[0]);

    }
  }

  _handlePrevClick = () => {
    const prevSlide = $(this._activeSlide).prev()[0];
    const prevDot = $(this._activeDot).prev()[0];

    if (prevSlide){

      this._switchSlide(prevSlide);
      this._switchDot(prevDot);

    } else{

      this._switchSlide($(this._activeSlide).parent().children().last()[0]);
      this._switchDot($(this._activeDot).parent().children().last()[0]);

    }
  }

  _isTouch = () => {
    return ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch;
  }

  _activateTouchOptions = () => {
    this._prev.classList.add("image-slider__prev_touch");
    this._next.classList.add("image-slider__next_touch");
  }

  _updateHeight = (target) => {
    target.style.height = `${target.offsetWidth * 0.55925}px` ;
  }

  _createResizeObserver = () => this.resizeObserver = new ResizeObserver(entries => this._updateHeight(entries[0].target));

  _addResizeObserver = () => this.resizeObserver.observe(this._slider);

}

export{ImageSlider}