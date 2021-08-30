import * as $ from 'jquery';

import '../../scripts/datepicker-russification';
import { Datepicker } from '../datepicker/datepicker';
import '../datepicker/datepicker.sass';

class ViewDateDropdown {
  constructor(parentSelector) {
    this._parent = this._getParentElement(parentSelector);
    this._getFields();
    this._datepicker = new Datepicker($(this._parent).find('.date-dropdown__datepicker-container')[0]);
    this._addListeners();
  }

  getDateDropdown = () => this._parent;

  setComingFieldValue = (value) => { this._comingField.value = value; };

  setLeaveFieldValue = (value) => { this._leaveField.value = value; };

  setDate = (dates) => this._datepicker.setDate(dates);

  getStartDate = () => this._datepicker.getStartDate();

  getEndDate = () => this._datepicker.getEndDate();

  getStartDateText = () => this._datepicker.getStartDateText();

  getEndDateText = () => this._datepicker.getEndDateText();

  showDatepicker = () => {
    this._datepicker.getDatepicker().classList.add('date-dropdown__datepicker-container_visible');
  }

  hiddenDatepicker = () => {
    this._datepicker.getDatepicker().classList.remove('date-dropdown__datepicker-container_visible');
  }

  _getParentElement = (parentSelector) => document.querySelector(`.js-${parentSelector}`);

  _getFields = () => {
    [this._comingField] = $(this._parent).find('.date-dropdown__container_left .date-dropdown__field');
    [this._leaveField] = $(this._parent).find('.date-dropdown__container_right .date-dropdown__field');
  }

  _handleFieldFocus = () => this.showDatepicker();

  _addListeners = () => {
    this._comingField.addEventListener('focus', this._handleFieldFocus);
    this._leaveField.addEventListener('focus', this._handleFieldFocus);
  }
}

export { ViewDateDropdown };
