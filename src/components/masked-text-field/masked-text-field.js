import InputMask from 'inputmask';

import './masked-text-field.scss';

class MaskedTextField {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._field = this._getField();
    this._inputMask = this._getInputMask();
    this._inputMask.mask(this._field);
  }

  _getBody = (parent) => parent.querySelector('.js-masked-text-field');

  _getField = () => this._body.querySelector('.js-masked-text-field__field');

  _getInputMask = () => (
    new InputMask({ alias: 'datetime', inputFormat: 'dd.mm.yyyy', placeholder: 'ДД.ММ.ГГГГ' })
  );
}

export default MaskedTextField;
