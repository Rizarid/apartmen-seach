import * as $ from 'jquery';

import './toggle.sass';

{
  const $toggles = $('.js-toggle');
  if ($toggles.length)$toggles.click(handleToggleClick);

  function handleToggleClick(){
    const checkbox = $(this).find('.toggle__checkbox')[0];
    checkbox.checked = !checkbox.checked;
    $(this).toggleClass('toggle_active');
  }
}