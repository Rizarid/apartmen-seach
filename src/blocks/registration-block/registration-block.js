import '../../components/text-field/text-field';
import '../../components/button/button';
import { RadioButtons } from '../../components/radio-buttons/radio-buttons';
import { MaskedTextField } from '../../components/masked-text-field/masked-text-field';
import { Toggle } from '../../components/toggle/toggle';
import './registration-block.sass';

class RegistrationBlock {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._radioButtons = new RadioButtons(this._getTarget('.js-registration-block__sex-container'));
    this._maskedField = new MaskedTextField(this._getTarget('.js-registration-block__date-of-birth-container'));
    this._toggle = new Toggle(this._getTarget('.js-registration-block__offers-container'));
  }

  _getBody = (parent) => parent.querySelector('.js-registration-block');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export { RegistrationBlock };
