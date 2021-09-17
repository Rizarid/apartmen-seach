/* eslint-disable no-unused-vars */

import { Checkbox } from './checkbox';

{
  const checkboxTargets = [...document.querySelectorAll('.js-checkbox')];
  let checkboxes = [];
  if (checkboxTargets) checkboxes = checkboxTargets.map((item) => new Checkbox(item));
}
