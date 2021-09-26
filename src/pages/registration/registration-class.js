import { RegistrationBlock } from '../../blocks/registration-block/registration-block';
import { SliderOfBackground } from '../../components/slider-of-background/slider-of-background';

class Registration {
  constructor() {
    this._body = this._getBody();
    this.registrationForm = new RegistrationBlock(this._getTarget('.js-registration__container'));
    this.sliderOfBackground = new SliderOfBackground(this._body);
  }

  _getBody = () => document.querySelector('.js-registration');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export { Registration };
