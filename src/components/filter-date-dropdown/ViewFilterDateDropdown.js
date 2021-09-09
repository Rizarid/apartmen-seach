import '../../scripts/create-element';
import { Datepicker } from '../datepicker/datepicker';
import '../datepicker/datepicker.sass';

class ViewFilterDateDropdown {
  constructor(target) {
    this._body = target;
    this._field = this._getTarget('.filter-date-dropdown__field');
    this._datepicker = new Datepicker(this._getTarget('.datepicker'));
    this._addListeners();
  }

  getDateDropdown = () => this._body;

  setFieldValue = (value) => { this._field.value = value; };

  setDate = (dates) => { this._datepicker.setDate(dates); };

  getStartDate = () => this._datepicker.getStartDate();

  getEndDate = () => this._datepicker.getEndDate();

  getStartDateText = () => this._datepicker.getStartDateText();

  getEndDateText = () => this._datepicker.getEndDateText();

  showDatepicker = () => {
    this._datepicker.getDatepicker().classList.add('datepicker_visible');
  }

  hiddenDatepicker = () => {
    this._datepicker.getDatepicker().classList.remove('datepicker_visible');
  }

  _getTarget = (selector) => this._body.querySelector(selector);

  _handleFieldFocus = () => this.showDatepicker();

  _addListeners = () => {
    this._field.addEventListener('focus', this._handleFieldFocus);
  }
}

export { ViewFilterDateDropdown };
