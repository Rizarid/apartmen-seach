import { SearchForm } from '@/blocks/search-block/search-block';
import { BGSlider } from '@/components/slider-of-background/bg-slider';


class Landing {
  constructor() {
    this._body = this._getBody();
    this._bgSlider = new BGSlider(this._getTarget('.js-slider-of-background'), 6000);
    this._searchForm = new SearchForm({ target: this._getTarget('.js-search-block') }); 
  }

  _getBody = () => document.querySelector('.js-landing');

  _getTarget = (selector) => this._body.querySelector(selector);
}

export { Landing };
