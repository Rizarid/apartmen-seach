/* eslint-disable no-unused-vars */

import { CheckboxButtons } from './checkbox-buttons';

{
  const checkboxButtonsTargets = [...document.querySelectorAll('.js-checkbox-buttons')];
  let checkboxButtonsList = [];
  if (checkboxButtonsTargets) { 
    checkboxButtonsList = checkboxButtonsTargets.map((item) => new CheckboxButtons(item));
  }
}
