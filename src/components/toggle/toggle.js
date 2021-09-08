import * as $ from 'jquery';

import './toggle.sass';
/*
{
  const $toggles = $('.js-toggle');

  const handleToggleClick = function () {
    const checkbox = $(this).find('.toggle__checkbox')[0];
    checkbox.checked = !checkbox.checked;
    $(this).toggleClass('toggle_active');
  };

  if ($toggles.length) $toggles.click(handleToggleClick);
}
*/
class Toggle {
  constructor(target) {
    this._body = target;
    this._addListener();
  }

  _addListener = () => this._body.addEventListener('click', this._handleToggleClick);

  _handleToggleClick = () => this._body.classList.toggle('toggle_active')
}

export { Toggle };
