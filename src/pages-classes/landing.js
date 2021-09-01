import { SearchForm } from '../blocks/search-block/search-block';
import { BGSlider } from '../components/slider-of-background/bg-slider';


class Landing {
  constructor() {
    this.bgSlider = new BGSlider(this.getSlidersBody(), 6000);
    this.searchForm = new SearchForm({ dateDropdownSelector: 'date-selection', dropdownSelector: 'guests-quantity' });
  }

  getSlidersBody = () => document.querySelector('.js-slider-of-background');
}

export { Landing };
