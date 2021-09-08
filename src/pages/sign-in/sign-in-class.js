import { BGSlider } from '../../components/slider-of-background/bg-slider';

class SignIn {
  constructor() {
    this._body = this._getBody();
    this._bgSlider = this._getBGSlider();
  }

  _getBody = () => document.querySelector('.sign-in');

  _getBGSlider = () => {
    const slider = this._body.querySelector('.js-slider-of-background');
    return new BGSlider(slider, 6000);
  }
}

export { SignIn };
