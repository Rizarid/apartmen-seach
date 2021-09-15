/* eslint-disable no-unused-vars */

import { Checkbox } from './checkbox';

{
  const checkboxTargets = Array.prototype.slice.call(document.querySelectorAll('.js-checkbox'));
  const checkboxes = checkboxTargets.map((item) => new Checkbox(item));
}
