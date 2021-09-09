import { Datepicker } from '../datepicker/datepicker';
import '../datepicker/datepicker.sass';

class ViewDateDropdown {
  constructor(target) {
    this._body = target;
    this._getFields();
    this._datepicker = new Datepicker(this._getTarget('.js-datepicker'));
    this._addListeners();
  }

  getDateDropdown = () => this._body;

  setComingFieldValue = (value) => { this._comingField.value = value; };

  setLeaveFieldValue = (value) => { this._leaveField.value = value; };

  setDate = (dates) => { this._datepicker.setDate(dates) };

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

  _getFields = () => {
    this._comingField = this._getTarget('.js-date-dropdown__container_left .js-date-dropdown__field');
    this._leaveField = this._getTarget('.js-date-dropdown__container_right .js-date-dropdown__field');
  }

  _handleFieldFocus = () => this.showDatepicker();

  _addListeners = () => {
    this._comingField.addEventListener('focus', this._handleFieldFocus);
    this._leaveField.addEventListener('focus', this._handleFieldFocus);
  }
}

export { ViewDateDropdown };
