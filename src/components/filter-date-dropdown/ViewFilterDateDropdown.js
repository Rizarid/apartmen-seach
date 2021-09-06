import * as $ from 'jquery';

import '../../scripts/create-element';
import { Datepicker } from '../datepicker/datepicker';
import '../datepicker/datepicker.sass';

class ViewFilterDateDropdown {
  constructor(parentSelector) {
    this._parent = this._getParentElement(parentSelector);
    this._getField();
    this._datepicker = new Datepicker($(this._parent).find('.filter-date-dropdown__datepicker-container')[0]);
    this._addListeners();
  }

  getDateDropdown = () => this._parent;

  setFieldValue = (value) => { this._field.value = value; };

  setDate = (dates) => this._datepicker.setDate(dates);

  getStartDate = () => this._datepicker.getStartDate();

  getEndDate = () => this._datepicker.getEndDate();

  getStartDateText = () => this._datepicker.getStartDateText();

  getEndDateText = () => this._datepicker.getEndDateText();

  showDatepicker = () => {
    this._datepicker.getDatepicker().classList.add('filter-date-dropdown__datepicker-container_visible');
  }

  hiddenDatepicker = () => {
    this._datepicker.getDatepicker().classList.remove('filter-date-dropdown__datepicker-container_visible');
  }

  _getParentElement = (parentSelector) => document.querySelector(`.js-${parentSelector}`);

  _getField = () => {
    [this._field] = $(this._parent).find('.filter-date-dropdown__field');
  }

   _handleFieldFocus = () => this.showDatepicker();

  _addListeners = () => {
    this._field.addEventListener('focus', this._handleFieldFocus);
  }
}

export { ViewFilterDateDropdown };
