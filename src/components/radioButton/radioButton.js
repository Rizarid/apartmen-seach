import './radioButton.sass'
import * as $ from 'jquery'

const radioButtons = $(".radioButton__item");

if(radioButtons.length){
  radioButtons.click(radioButtonClick)
}

function radioButtonClick(){
  $(this).parent().children().removeClass("checked")
  $(this).toggleClass("checked")
}