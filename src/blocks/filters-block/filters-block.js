import '../../scripts/create-element';
import { FilterDateDropdown } from '../../components/filter-date-dropdown/filter-date-dropdown';
import { Slider } from '../../components/slider/slider';
import '../../components/checkbox-buttons/checkbox-buttons';
import '../../components/rich-checkbox-buttons/rich-checkbox-buttons';
import '../../components/expandable-checkbox-list/expandable-checkbox-list';
import '../../components/pagination/pagination';
import '../../components/dropdown/dropdown';
import { DropdownClass } from '../../components/dropdown/DropdownClass';
import { ListConvenience } from '../../components/dropdown/__list/ListConvenience';
import './filters-block.sass';

class Filters {
  constructor() {
    this._body = this._getFiltersElement();
    this._navigation = this._getNavigationElement();

    this._createFiltersButton();
    this._appendFiltersButton();

    this._createFilters();
    this._appendListeners();

  }

  _getFiltersElement = () => document.querySelector('.js-filters');

  _getNavigationElement = () => document.querySelector('.js-header__navigation');

  _createFiltersButton = () => { this._filtersButton = createElement('div', 'filters-button'); };

  _appendFiltersButton = () => { this._navigation.insertAdjacentElement('afterEnd', this._filtersButton); }

  _createFilters = () => {
    this._createDateFilter();
    this._createGuestsFilter();
    this._createConvenienceFilter();
    this._createPriceFilter();
  };

  _createDateFilter = () => {
    this._dateFilter = new FilterDateDropdown({
      parentSelector: 'date-filter', initDate: ['19.08.2021', '23.08.2021'],
    });
  };

  _createGuestsFilter = () => {
    this._guests = new DropdownClass({ parentSelector: 'guests-quantity' });
  };

  _createConvenienceFilter = () => {
    this._convenience = new DropdownClass({
      parentSelector: 'convenience-filter',
      items: { спальни: 2, кровати: 2, 'ванные комнаты': 0 },
      getListClass: (items) => new ListConvenience(items),
    });
  };

  _createPriceFilter = () => {
    this._priceFilter = new Slider({
      parentSelector: 'price-filter', min: 0, max: 16000, initValues: ['5000', '10000'],
    });
  };

  _showFilters = () => {
    this._body.classList.toggle('show');
  };

  _appendListeners = () => {
    this._filtersButton.addEventListener('click', this._showFilters);
  };
}

export { Filters };
