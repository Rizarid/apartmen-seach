import '../../scripts/create-element';
import { Datepicker } from '../datepicker/datepicker';
import '../datepicker/datepicker.sass';

class ViewFilterDateDropdown {
  constructor(target) {
    this._body = target;
    this._getField();
    this._datepicker = this._getDatepicker();
    this._addListeners();
  }

  getDateDropdown = () => this._body;

  setFieldValue = (value) => { this._field.value = value; };

  setDate = (dates) => this._datepicker.setDate(dates);

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

  _getField = () => {
    this._field = this._body.querySelector('.filter-date-dropdown__field');
  }

  _getDatepicker = () => {
    const datepicker = this._body.querySelector('.datepicker');
    return new Datepicker(datepicker);
  }

  _handleFieldFocus = () => this.showDatepicker();

  _addListeners = () => {
    this._field.addEventListener('focus', this._handleFieldFocus);
  }
}

export { ViewFilterDateDropdown };
