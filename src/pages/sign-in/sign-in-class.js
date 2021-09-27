import { SliderOfBackground } from '../../components/slider-of-background/slider-of-background';
import { Header } from '../../blocks/header/header';
import '../../blocks/sign-in-block/sign-in-block';

class SignIn {
  constructor() {
    this._body = this._getBody();
    this._header = new Header(this._getTarget('.js-sign-in__header'));
    this.sliderOfBackground = new SliderOfBackground(this._getTarget('.js-sign-in__content'));
  }

  _getBody = () => document.querySelector('.js-sign-in');
}

export { SignIn };
