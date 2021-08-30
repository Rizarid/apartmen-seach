import * as $ from 'jquery';

import './like-button.sass';

{
  const handleLikeButtonClick = function () {
    $(this).toggleClass('like-button_liked');
    let text;

    if ($(this).hasClass('like-button_liked')) {
      text = Number($(this).children('.like-button__quantity').text()) + 1;
    } else {
      text = Number($(this).children('.like-button__quantity').text()) - 1;
    }

    $(this).children('.like-button__quantity').html(text.toString());
  };

  const $likeButtons = $('.js-like-button');
  if ($likeButtons.length) $likeButtons.click(handleLikeButtonClick);
}
