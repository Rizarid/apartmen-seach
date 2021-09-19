/* eslint-disable no-unused-vars */

import { MaskedTextField } from './masked-text-field';

{
  const maskedFieldsTargets = [...document.querySelectorAll('.js-masked-text-field')];
  if (maskedFieldsTargets) {
    const maskedFieldsCollection = maskedFieldsTargets.map((item) => new MaskedTextField(item));
  }
}
