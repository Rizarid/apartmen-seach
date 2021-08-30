import * as $ from 'jquery';

import './radio-button.sass';

{
  const $radioButtons = $('.js-radio-button__item');
  if ($radioButtons.length) $radioButtons.click(switchButton);

  function switchButton() {
    $(this).parent().children().removeClass('radio-button__item_checked');
    $(this).addClass('radio-button__item_checked');
  }
}
