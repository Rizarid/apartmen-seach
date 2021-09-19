/* eslint-disable no-unused-vars */

import { CheckboxButtons } from './checkbox-buttons';

{
  const checkboxButtonsTargets = [...document.querySelectorAll('.js-checkbox-buttons')];
  if (checkboxButtonsTargets) {
    const checkboxButtonsList = checkboxButtonsTargets.map((item) => new CheckboxButtons(item));
  }
}
