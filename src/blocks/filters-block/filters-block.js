import '../../scripts/create-element';
import { FilterDateDropdown } from '../../components/filter-date-dropdown/filter-date-dropdown';
import { Slider } from '../../components/slider/slider';
import { CheckboxButtons } from '../../components/checkbox-buttons/checkbox-buttons';
import '../../components/pagination/pagination';
import { DropdownClass } from '../../components/dropdown/DropdownClass';
import { ListConvenience } from '../../components/dropdown-list/ListConvenience';
import './filters-block.sass';

class Filters {
  constructor(target) {
    this._body = target;
    this._navigation = this._getNavigationElement();

    this._createFiltersButton();
    this._appendFiltersButton();
    this._createFilters();
    this._appendListeners();
  }

  _getNavigationElement = () => document.querySelector('.js-header__navigation');

  _createFiltersButton = () => { this._filtersButton = createElement('div', 'filters-button'); };

  _appendFiltersButton = () => { this._navigation.insertAdjacentElement('afterEnd', this._filtersButton); }

  _createFilters = () => {
    this._createDateFilter();
    this._createGuestsFilter();
    this._createConvenienceFilter();
    this._createPriceFilter();
    this._createRulesFilter();
    this._createAdditionalAmenitiesFilter();
    this._createAvailability();
  };

  _getTarget = (selector) => this._body.querySelector(selector);

  _createDateFilter = () => {
    this._dateFilter = new FilterDateDropdown({
      target: this._getTarget('.js-date-filter'), initDate: ['+3d', '+8d'],
    });
  };

  _createGuestsFilter = () => {
    this._guests = new DropdownClass({ target: this._getTarget('.js-guests-quantity') });
  };

  _createConvenienceFilter = () => {
    this._convenience = new DropdownClass({
      target: this._getTarget('.js-convenience-filter'),
      getListClass: (items) => new ListConvenience(items),
    });
  };

  _createPriceFilter = () => {
    this._priceFilter = new Slider({
      target: this._getTarget('.js-price-filter'), min: 0, max: 16000, initValues: ['5000', '10000'],
    });
  };

  _createRulesFilter = () => {
    const rulesTarget = this._body.querySelector('.filters__rules .js-checkbox-buttons');
    this._rules = new CheckboxButtons(rulesTarget);
  }

  _createAdditionalAmenitiesFilter = () => {
    const additionalAmenitiesTarget = this._body.querySelector('.filters__additional-amenities .js-checkbox-buttons');
    this._additionalAmenities = new CheckboxButtons(additionalAmenitiesTarget);
  }

  _createAvailability = () => {
    const availabilityTarget = this._body.querySelector('.filters__availability .js-checkbox-buttons');
    this._availability = new CheckboxButtons(availabilityTarget);
  }

  _showFilters = () => {
    this._body.classList.toggle('show');
  };

  _appendListeners = () => {
    this._filtersButton.addEventListener('click', this._showFilters);
  };
}

export { Filters };
