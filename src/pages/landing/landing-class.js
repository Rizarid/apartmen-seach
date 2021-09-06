import { SearchForm } from '@/blocks/search-block/search-block';
import { BGSlider } from '@/components/slider-of-background/bg-slider';


class Landing {
  constructor() {
    this._bgSlider = new BGSlider(this._getSlidersBody(), 6000);
    this._searchForm = new SearchForm({ dateDropdownSelector: 'date-selection', dropdownSelector: 'guests-quantity' });
  }

  _getSlidersBody = () => document.querySelector('.js-slider-of-background');
}

export { Landing };
