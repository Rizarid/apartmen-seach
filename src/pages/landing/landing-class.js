import { SearchBlock } from '../../blocks/search-block/search-block';
import { SliderOfBackground } from '../../components/slider-of-background/slider-of-background';

class Landing {
  constructor() {
    this._body = this._getBody();
    this._searchBlock = new SearchBlock(this._getTarget('.js-landing__search-form'));
    this._sliderOfBackground = new SliderOfBackground(this._body);
  }

  _getBody = () => document.querySelector('.js-landing');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export { Landing };
