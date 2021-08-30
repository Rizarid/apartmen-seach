import * as $ from 'jquery';
import Inputmask from 'inputmask';

import '../text-field/text-field.js';
import './masked-text-field.sass';

{
  const maskedFields = $('.js-masked-text-field .text-field__field');
  const inputmask = new Inputmask({ alias: 'datetime', inputFormat: 'dd.mm.yyyy', placeholder: 'ДД.ММ.ГГГГ' });
  inputmask.mask(maskedFields);
}
