import './roomCardBlock.sass'
import '../../components/button/button.js'
import '../../components/rateButton/rateButton.js'
import {ImageSlider} from '../../components/imageSlider/imageSlider.js'
import * as $ from 'jquery';


const sliderConteiners = $(".imageSlider");
if(sliderConteiners.length){

  const sliders = [];
  for (let i = 0; i < sliderConteiners.length; i++){
    sliders.push(new ImageSlider(sliderConteiners[i]));
  }
}

const numberMargins = function(number){
  
  let arr = String(number).split("");
  let len = Math.trunc(arr.length/3);

  for (let i=1; i<=len; i++) {
      arr.splice(arr.length - (i * 3 + i - 1), 0, " ");
  }

  return arr.join("");
}

const prices = $(".roomCardBlock__price");
if(prices.length){
  
  for (let i = 0; i < prices.length; i++) {
    prices[i].innerHTML = numberMargins(prices[i].innerHTML) + "&#8381 ";
  }
}


