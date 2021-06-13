import './likeButton.sass';
import * as $ from 'jquery'

const likeButtons = $(".likeButton");

if(likeButtons.length){
  likeButtons.click(likeClick);
}

function likeClick(){

  $(this).toggleClass("liked");
  $(this).children(".likeButton__icon").toggleClass(["fa-heart-o", "fa-heart"]);

  let text

  ($(this).hasClass("liked")) ?
    text = Number($(this).children(".likeButton__quantity").text()) + 1 :
    text = Number($(this).children(".likeButton__quantity").text()) -1;

  $(this).children(".likeButton__quantity").html(String(text));

}