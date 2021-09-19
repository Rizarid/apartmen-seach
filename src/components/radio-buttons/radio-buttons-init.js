/* eslint-disable no-unused-vars */

import { RadioButtons } from './radio-buttons';

{
  const radioButtonsTargets = [...document.querySelectorAll('.js-radio-buttons')];
  if (radioButtonsTargets) {
    const radioButtonsCollection = radioButtonsTargets.map((item) => new RadioButtons(item));
  }
}
