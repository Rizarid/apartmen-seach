import Inputmask from 'inputmask';

import '../text-field/text-field';
import './masked-text-field.sass';

class MaskedTextField {
  constructor(target) {
    this._body = target;
    this._field = this._getField();
    this._inputmask = this._getInputmask();
    this._inputmask.mask(this._field);
  }

  _getField = () => this._body.querySelector('.js-text-field .text-field__field');

  _getInputmask = () => (
    new Inputmask({ alias: 'datetime', inputFormat: 'dd.mm.yyyy', placeholder: 'ДД.ММ.ГГГГ' })
  );
}

export { MaskedTextField };
