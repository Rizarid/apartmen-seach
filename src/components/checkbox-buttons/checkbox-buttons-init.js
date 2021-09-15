/* eslint-disable no-unused-vars */

import { CheckboxButtons } from './checkbox-buttons';

{
  const CheckboxButtonsTargets = Array.prototype.slice.call(document.querySelectorAll('.js-checkbox-buttons'));
  const CheckboxButtonsList = CheckboxButtonsTargets.map((item) => new CheckboxButtons(item));
}
