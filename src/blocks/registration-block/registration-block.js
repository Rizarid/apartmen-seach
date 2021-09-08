import '../../components/text-field/text-field';
import { RadioButtons } from '../../components/radio-buttons/radio-buttons';
import { MaskedTextField } from '../../components/masked-text-field/masked-text-field';
import { Toggle } from '../../components/toggle/toggle';
import '../../components/button/button';
import './registration-block.sass';

class RegistrationForm {
  constructor(target) {
    this._body = target;
    this._radioButtons = this._getRadioButtons();
    this._maskedField = this._getMaskedField();
    this._toggle = this._getToggle();

  }

  _getRadioButtons = () => {
    const radioButtons = this._body.querySelector('.js-radio-buttons');
    return new RadioButtons(radioButtons);
  }

  _getMaskedField = () => {
    const maskedField = this._body.querySelector('.js-masked-text-field');
    return new MaskedTextField(maskedField);
  }

  _getToggle = () => {
    const toggle = this._body.querySelector('.js-toggle')
    return new Toggle(toggle);
  }
}

export { RegistrationForm };
