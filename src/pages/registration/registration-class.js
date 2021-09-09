import { RegistrationForm } from '../../blocks/registration-block/registration-block';
import { BGSlider } from '../../components/slider-of-background/bg-slider';

class Registration {
  constructor() {
    this._body = this._getBody();
    this._registrationForm = new RegistrationForm(this._getTarget('.js-registration-block'));
    this._bgSlider = new BGSlider(this._getTarget('.js-slider-of-background'), 6000);
  }

  _getBody = () => document.querySelector('.registration');

  _getTarget = (selector) => this._body.querySelector(selector);
}

export { Registration };
