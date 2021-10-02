import Inputmask from 'inputmask';

import './masked-text-field.sass';

class MaskedTextField {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._field = this._getField();
    this._inputmask = this._getInputmask();
    this._inputmask.mask(this._field);
  }

  _getBody = (parent) => parent.querySelector('.js-masked-text-field');

  _getField = () => this._body.querySelector('.js-masked-text-field__field');

  _getInputmask = () => (
    new Inputmask({ alias: 'datetime', inputFormat: 'dd.mm.yyyy', placeholder: 'ДД.ММ.ГГГГ' })
  );
}

export default MaskedTextField;
