import '../../components/text-field/text-field';
import '../../components/button/button';
import '../../components/radio-buttons/radio-buttons';
import { MaskedTextField } from '../../components/masked-text-field/masked-text-field';
import '../../components/toggle/toggle';
import './registration-form.sass';

class RegistrationForm {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._maskedField = new MaskedTextField(this._getTarget('.js-registration-form__date-of-birth-container'));
  }

  _getBody = (parent) => parent.querySelector('.js-registration-form');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export { RegistrationForm };
