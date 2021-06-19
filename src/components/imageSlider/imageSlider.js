import * as $ from 'jquery';
import {Slide} from './__image/imageSlider__image.js'
import './imageSlider.sass'
import '../../scripts/createElem.js'

class ImageSlider{
  
  constructor(slider){

    this._slider = slider;

    this._createSlides();
    this._createDotsBlock();

    this._initSlides();
    this._initDots();

    this._initPrevButton();
    this._initNextButton();
    
  }

  _createSlides = () => {
    let _images = $(this._slider).children(".imageSlider__slides").children(".imageSlider__image");
    this._slides = []
    for (let i = 0; i<_images.length; i++) {
      this._slides.push(new Slide(_images[i], this));
    }
  }

  _createDotsBlock = () => {
    this._dots = createElement("div", "imageSlider__dots");
    for (let i = 0; i < this._slides.length; i++) {
      this._dots.appendChild(this._slides[i].dot);
    }

    this._slider.appendChild(this._dots);
  }

  _initSlides = () => {
    this._previousSlide = this._slides[0].slide;
    this._activeSlide = this._slides[0].slide;
    this._activeSlide.classList.add("active");
  }

  _initDots = () => {
    this._previousDot = this._slides[0].dot;
    this._activeDot = this._slides[0].dot;
    this._activeDot.classList.add("active");
  }

  _initPrevButton = () => {
    this._prev = $(this._slider).children(".imageSlider__prev")[0];
    this._prev.addEventListener("click", this.prevSlide);
  }

  _initNextButton = () => {
    this._next = $(this._slider).children(".imageSlider__next")[0];
    this._next.addEventListener("click", this.nextSlide);
  }

  showSlide = (slide) => {

    this._previousSlide = this._activeSlide;
    this._activeSlide = slide.slide;
    this._previousSlide.classList.remove("active");
    this._activeSlide.classList.add("active");
    
    this._previousDot = this._activeDot;
    this._activeDot = slide.dot;
    this._previousDot.classList.remove("active");
    this._activeDot.classList.add("active");

  }

  returnSlide = () => {
    this._activeSlide.classList.remove("active"); 
    this._activeSlide = this._previousSlide;
    this._activeSlide.classList.add("active");

    this._activeDot.classList.remove("active");
    this._activeDot = this._previousDot;
    this._activeDot.classList.add("active");
  }

  nextSlide = () => {
    if ($(this._activeSlide).next()[0]){

      this._previousSlide = this._activeSlide;
      this._activeSlide = $(this._activeSlide).next()[0];
      this._previousSlide.classList.remove("active");
      this._activeSlide.classList.add("active");

      this._previousDot = this._activeDot;
      this._activeDot = $(this._activeDot).next()[0];
      this._previousDot.classList.remove("active");
      this._activeDot.classList.add("active");

    } else{

      this._previousSlide = this._activeSlide;
      this._activeSlide = $(this._activeSlide).parent().children().first()[0];
      this._previousSlide.classList.remove("active");
      this._activeSlide.classList.add("active");

      this._previousDot = this._activeDot;
      this._activeDot = $(this._activeDot).parent().children().first()[0];
      this._previousDot.classList.remove("active");
      this._activeDot.classList.add("active");
    }
  }

  prevSlide = () => {
    if ($(this._activeSlide).prev()[0]){

      this._previousSlide = this._activeSlide;
      this._activeSlide = $(this._activeSlide).prev()[0];
      this._previousSlide.classList.remove("active");
      this._activeSlide.classList.add("active");

      this._previousDot = this._activeDot;
      this._activeDot = $(this._activeDot).prev()[0];
      this._previousDot.classList.remove("active");
      this._activeDot.classList.add("active");

    } else{

      this._previousSlide = this._activeSlide;
      this._activeSlide = $(this._activeSlide).parent().children().last()[0];
      this._previousSlide.classList.remove("active");
      this._activeSlide.classList.add("active");

      this._previousDot = this._activeDot;
      this._activeDot = $(this._activeDot).parent().children().last()[0];
      this._previousDot.classList.remove("active");
      this._activeDot.classList.add("active");
    }
  }
}

export{ImageSlider}