/* global document */

import RegistrationForm from '../../blocks/registration-form/registration-form';
import SliderOfBackground from '../../components/slider-of-background/slider-of-background';
import Header from '../../blocks/header/header';
import './registration.sass';

class Registration {
  constructor() {
    this._body = this._getBody();
    this._header = new Header(this._getTarget('.js-registration__header'));
    this.registrationForm = new RegistrationForm(this._getTarget('.js-registration__container'));
    this.sliderOfBackground = new SliderOfBackground(this._body);
  }

  _getBody = () => document.querySelector('.js-registration');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export default Registration;
