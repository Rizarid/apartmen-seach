import './slider-of-background.sass';

{
  const slider = document.querySelector('.js-slider-of-background');
  const slides = slider.children;
  let i = 0;

  const nextSlide = function () {
    slides[i].classList.remove('slider-of-background__image_active');
    i = (i + 1 < slides.length) ? i + 1 : 0;
    slides[i].classList.add('slider-of-background__image_active');
  };

  setInterval(nextSlide, 10000);
}
