class BGSlider {
  constructor(slider, interval) {
    this.slider = slider;
    this.interval = interval;
    this.slidesNumber = 0;
    this.slides = this.slider.children;
    setInterval(this.nextSlide, this.interval);
  }

  nextSlide = () => {
    this.slides[this.slidesNumber].classList.remove('slider-of-background__image_active');
    this.slidesNumber = (this.slidesNumber + 1 < this.slides.length) ? this.slidesNumber + 1 : 0;
    this.slides[this.slidesNumber].classList.add('slider-of-background__image_active');
  };
}

export { BGSlider };
