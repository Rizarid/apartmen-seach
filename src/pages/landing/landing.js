import SearchForm from '../../blocks/search-form/search-form';
import SliderOfBackground from '../../components/slider-of-background/slider-of-background';
import Header from '../../blocks/header/header';
import './landing.scss';

class Landing {
  constructor() {
    this._body = this._getBody();
    this._header = new Header(this._getTarget('.js-landing__header'));
    this._searchBlock = new SearchForm(this._getTarget('.js-landing__search-form'));
    this._sliderOfBackground = new SliderOfBackground(this._body);
  }

  _getBody = () => document.querySelector('.js-landing');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export default Landing;
