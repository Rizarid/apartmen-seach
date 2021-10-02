import { SliderOfBackground } from '../../components/slider-of-background/slider-of-background';
import { Header } from '../../blocks/header/header';
import '../../blocks/sign-in-form/sign-in-form';
import './sign-in.sass';

class SignIn {
  constructor() {
    this._body = this._getBody();
    this._header = new Header(this._getTarget('.js-sign-in__header'));
    this.sliderOfBackground = new SliderOfBackground(this._getTarget('.js-sign-in__content'));
  }

  _getBody = () => document.querySelector('.js-sign-in');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export { SignIn };
