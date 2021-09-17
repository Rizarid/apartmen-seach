import '../date-picker/date-picker-init';
import './date-dropdown.sass';

class DateDropdown {
  constructor(target) {
    this._body = target;
    this._isDoubleField = this._getIsDoubleField();
    this._datePicker = this._getDatePicker();
    this._getFields();
    this._setFieldsValues = this._isDoubleField ? this._setDoubleField : this._setSingleField;
    this._onSelected = this._createEvent();
    this._addListeners();
  }

  _getIsDoubleField = () => this._body.classList.contains('date-dropdown_double-field');

  _getDatePicker = () => this._body.querySelector('.js-date-dropdown__date-picker');

  _getFields = () => {
    if (this._isDoubleField) {
      [this._comingField, this._leaveField] = this._body.querySelectorAll('.js-date-dropdown__field');
    } else this._comingField = this._body.querySelector('.js-date-dropdown__field');
  }

  _createEvent = () => new CustomEvent('dateDropdownSelected', { bubbles: true, detail: { daysCount: 0 } });

  _addListeners = () => {
    this._comingField.addEventListener('focus', this._handleFieldFocus);
    if (this._isDoubleField) this._leaveField.addEventListener('focus', this._handleFieldFocus);

    this._datePicker.addEventListener('datepickerOnSelect', this._handleDatePickerOnSelect);
    this._datePicker.addEventListener('cleanButtonClick', this._handleCleanButtonClick);
    this._datePicker.addEventListener('applyButtonClick', this._handleApplyButtonClick);
  }

  _handleFieldFocus = () => this._showDatepicker();

  _showDatepicker = () => {
    this._datePicker.classList.add('date-dropdown__date-picker_visible');
  }

  _hiddenDatepicker = () => {
    this._datePicker.classList.remove('date-dropdown__date-picker_visible');
  }

  _handleDatePickerOnSelect = (event) => {
    const { startDate, endDate } = event.detail;
    const daysCount = this._calcDaysCount(startDate, endDate);
    this._setFieldsValues(event.detail);
    this._onSelected.detail.daysCount = daysCount;
    this._body.dispatchEvent(this._onSelected);
  };

  _calcDaysCount = (startDate, endDate) => {
    const millisecondsInDay = 86400000;
    return (startDate && endDate) ? (endDate - startDate) / millisecondsInDay : 0;
  }

  _setDoubleField = (options = {}) => {
    const { startDateText = '', endDateText = '' } = options;
    this._comingField.value = startDateText;
    this._leaveField.value = endDateText;
  }

  _setSingleField = (options = {}) => {
    const { startDate = '', endDate = '' } = options;
    const formattedDate = this._formatDate(startDate, endDate);
    this._comingField.value = formattedDate;
  }

  _formatDate = (startDate, endDate) => {
    if (!startDate || !endDate) return '';

    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    const startDay = (startDate.getDate() > 9) ? startDate.getDate().toString() : `0${startDate.getDate()}`;
    const endDay = (endDate.getDate() > 9) ? endDate.getDate().toString() : `0${endDate.getDate()}`;
    const startMonth = months[startDate.getMonth()];
    const endMonth = months[endDate.getMonth()];

    return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
  }

  _handleCleanButtonClick = () => {
    this._setFieldsValues();
    this._hiddenDatepicker();
  };

  _handleApplyButtonClick = () => this._hiddenDatepicker();
}

export { DateDropdown };
