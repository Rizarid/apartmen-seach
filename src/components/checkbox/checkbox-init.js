/* eslint-disable no-unused-vars */

import { Checkbox } from './checkbox';

{
  const checkboxTargets = [...document.querySelectorAll('.js-checkbox')];
  if (checkboxTargets) {
    const checkboxes = checkboxTargets.map((item) => new Checkbox(item));
  }
}
