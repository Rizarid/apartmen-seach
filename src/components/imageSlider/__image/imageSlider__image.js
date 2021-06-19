import '../../../scripts/createElem.js'

function Slide(img, slider){
    this.slide = img;
    this.dot = createElement("div", "imageSlider__slideDote");
    this.dot.addEventListener("mouseover", () => slider.showSlide(this));
    this.dot.addEventListener("mouseout", slider.returnSlide);
}
export {Slide}