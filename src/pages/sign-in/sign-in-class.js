import { SliderOfBackground } from '../../components/slider-of-background/slider-of-background';
import '../../blocks/sign-in-block/sign-in-block';

class SignIn {
  constructor() {
    this._body = this._getBody();
    this.sliderOfBackground = new SliderOfBackground(this._body);
  }

  _getBody = () => document.querySelector('.js-sign-in');
}

export { SignIn };
