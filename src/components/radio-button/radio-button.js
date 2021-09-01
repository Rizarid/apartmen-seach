import * as $ from 'jquery';

import './radio-button.sass';

{
  const switchButton = function () {
    $(this).parent().children().removeClass('radio-button__item_checked');
    $(this).addClass('radio-button__item_checked');
  };

  const $radioButtons = $('div.js-radio-button .js-radio-button__item');
  if ($radioButtons.length) $radioButtons.click(switchButton);
}
