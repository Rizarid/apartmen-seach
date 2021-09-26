import '../../components/pagination/pagination';
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Slider } from '../../components/slider/slider';
import { CheckboxButtons } from '../../components/checkbox-buttons/checkbox-buttons';
import './filters-block.sass';

class Filters {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._getElements();
    this._appendListeners();
  }

  _getBody = (parent) => parent.querySelector('.js-filters');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getElements = () => {
    this._dateDropdown = new DateDropdown(this._getTarget('.js-filters__date'));
    this._guests = new Dropdown(this._getTarget('.js-filters__guests'));
    this._slider = new Slider(this._getTarget('.js-filters__price'));
    this._rules = new CheckboxButtons(this._getTarget('.js-filters__rules'));
    this._availability = new CheckboxButtons(this._getTarget('.js-filters__availability'));
    this._convenience = new Dropdown(this._getTarget('.js-filters__convenience'));
    this._additionalAmenities = new CheckboxButtons(this._getTarget('.js-filters__additional-amenities'));
  }

  _handleFiltersButtonClick = () => this._body.classList.toggle('filters_visible');

  _appendListeners = () => document.addEventListener('filterButtonClick', this._handleFiltersButtonClick);
}

export { Filters };
