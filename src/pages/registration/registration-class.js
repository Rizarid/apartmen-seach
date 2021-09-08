import { RegistrationForm } from '../../blocks/registration-block/registration-block';
import { BGSlider } from '../../components/slider-of-background/bg-slider';

class Registration {
  constructor() {
    this._body = this._getBody();
    this._registrationForm = this._getRegistrationForm();
    this._bgSlider = this._getBGSlider();
  }

  _getBody = () => document.querySelector('.registration');

  _getRegistrationForm = () => {
    const registrationForm = this._body.querySelector('.js-registration-block');
    return new RegistrationForm(registrationForm);
  };

  _getBGSlider = () => {
    const slider = this._body.querySelector('.js-slider-of-background');
    return new BGSlider(slider, 6000);
  };
}

export { Registration };
