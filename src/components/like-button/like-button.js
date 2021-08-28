import * as $ from "jquery";

import "./like-button.sass";


{
  const $likeButtons = $(".js-like-button");
  if($likeButtons.length) $likeButtons.click(handleLikeButtonClick);

  function handleLikeButtonClick(){
    $(this).toggleClass("like-button_liked");
    let text;

    $(this).hasClass("like-button_liked") 
      ? text = Number($(this).children(".like-button__quantity").text()) + 1 
      : text = Number($(this).children(".like-button__quantity").text()) -1;

    $(this).children(".like-button__quantity").html(text.toString());
  }
}