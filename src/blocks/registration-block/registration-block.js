import '../../components/text-field/text-field';
import { RadioButtons } from '../../components/radio-buttons/radio-buttons';
import { MaskedTextField } from '../../components/masked-text-field/masked-text-field';
import { Toggle } from '../../components/toggle/toggle';
import '../../components/button/button';
import './registration-block.sass';

class RegistrationForm {
  constructor(target) {
    this._body = target;
    this._radioButtons = new RadioButtons(this._getTarget('.js-radio-buttons'));
    this._maskedField = new MaskedTextField(this._getTarget('.js-masked-text-field'));
    this._toggle = new Toggle(this._getTarget('.js-toggle'));
  }

  _getTarget = (selector) => this._body.querySelector(selector);
}

export { RegistrationForm };
