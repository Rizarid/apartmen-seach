/* global document */

import '../../components/pagination/pagination';
import DateDropdown from '../../components/date-dropdown/date-dropdown';
import Dropdown from '../../components/dropdown/dropdown';
import Slider from '../../components/slider/slider';
import CheckboxButtons from '../../components/checkbox-buttons/checkbox-buttons';
import './filters-form.sass';

class FiltersForm {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._getElements();
    this._appendListeners();
  }

  _getBody = (parent) => parent.querySelector('.js-filters-form');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getElements = () => {
    this._dateDropdown = new DateDropdown(this._getTarget('.js-filters-form__date'));
    this._guests = new Dropdown(this._getTarget('.js-filters-form__guests'));
    this._slider = new Slider(this._getTarget('.js-filters-form__price'));
    this._rules = new CheckboxButtons(this._getTarget('.js-filters-form__rules'));
    this._availability = new CheckboxButtons(this._getTarget('.js-filters-form__availability'));
    this._convenience = new Dropdown(this._getTarget('.js-filters-form__convenience'));
    this._additionalAmenities = new CheckboxButtons(this._getTarget('.js-filters-form__additional-amenities'));
  }

  _handleFiltersButtonClick = () => this._body.classList.toggle('filters-form_visible');

  _appendListeners = () => document.addEventListener('filterButtonClick', this._handleFiltersButtonClick);
}

export default FiltersForm;
