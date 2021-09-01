import * as $ from 'jquery';

import './toggle.sass';

{
  const $toggles = $('.js-toggle');

  const handleToggleClick = function () {
    const checkbox = $(this).find('.toggle__checkbox')[0];
    checkbox.checked = !checkbox.checked;
    $(this).toggleClass('toggle_active');
  };

  if ($toggles.length) $toggles.click(handleToggleClick);
}
