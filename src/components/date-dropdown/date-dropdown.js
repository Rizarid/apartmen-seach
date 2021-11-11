import DatePicker from '../date-picker/date-picker';
import './date-dropdown.scss';

class DateDropdown {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._isSingleField = this._getIsSingleField();
    this._datePickerContainer = this._getTarget('.js-date-dropdown__date-picker');
    this._getFields();
    this._setFieldsValues = this._isSingleField ? this._setSingleField : this._setDoubleField;
    this._onSelected = this._createEvent();
    this._addListeners();
    this._datePicker = new DatePicker(this._datePickerContainer);
  }

  _getBody = (parent) => parent.querySelector('.js-date-dropdown');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getIsSingleField = () => this._body.classList.contains('date-dropdown_single-field');

  _getFields = () => {
    if (this._isSingleField) {
      this._comingField = this._body.querySelector('.js-date-dropdown__field');
    } else [this._comingField, this._leaveField] = this._body.querySelectorAll('.js-date-dropdown__field');
  };

  _createEvent = () => new CustomEvent('dateDropdownSelected', { bubbles: true, detail: { daysCount: 0 } });

  _addListeners = () => {
    this._comingField.addEventListener('click', this._handleFieldFocus);
    if (!this._isSingleField) this._leaveField.addEventListener('click', this._handleFieldFocus);

    this._datePickerContainer.addEventListener('datepickerOnSelect', this._handleDatePickerOnSelect);
    this._datePickerContainer.addEventListener('cleanButtonClick', this._handleCleanButtonClick);
    this._datePickerContainer.addEventListener('applyButtonClick', this._handleApplyButtonClick);
  };

  _handleFieldFocus = () => {
    const isListVisible = this._datePickerContainer.classList.contains('date-dropdown__date-picker_visible');
    if (!isListVisible) {
      this._datePickerContainer.classList.add('date-dropdown__date-picker_visible');
      window.addEventListener('click', this._handleOutsideClick);
    } else this._hiddenDatepicker();
  }

  _handleOutsideClick = (event) => {
    const isDatePickerArrow = (event.target.classList.contains('ui-datepicker-prev') || event.target.classList.contains('ui-datepicker-next'));
    if (!event.target.closest('.date-dropdown') && !isDatePickerArrow) this._hiddenDatepicker();
  };

  _hiddenDatepicker = () => {
    this._datePickerContainer.classList.remove('date-dropdown__date-picker_visible');
    window.removeEventListener('click', this._handleOutsideClick);
  };

  _handleDatePickerOnSelect = (event) => {
    event.stopPropagation();
    const { startDate, endDate } = event.detail;
    const daysCount = this._calcDaysCount(startDate, endDate);
    this._setFieldsValues(event.detail);
    this._onSelected.detail.daysCount = daysCount;
    this._body.dispatchEvent(this._onSelected);
  };

  _calcDaysCount = (startDate, endDate) => {
    const millisecondsInDay = 86400000;
    return (startDate && endDate) ? (endDate - startDate) / millisecondsInDay : 0;
  };

  _setDoubleField = (options = {}) => {
    const { startDateText = '', endDateText = '' } = options;
    this._comingField.value = startDateText;
    this._leaveField.value = endDateText;
  };

  _setSingleField = (options = {}) => {
    const { startDate = '', endDate = '' } = options;
    const formattedDate = this._formatDate(startDate, endDate);
    this._comingField.value = formattedDate;
  };

  _formatDate = (startDate, endDate) => {
    if (!startDate || !endDate) return '';

    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    const startDay = (startDate.getDate() > 9) ? startDate.getDate().toString() : `0${startDate.getDate()}`;
    const endDay = (endDate.getDate() > 9) ? endDate.getDate().toString() : `0${endDate.getDate()}`;
    const startMonth = months[startDate.getMonth()];
    const endMonth = months[endDate.getMonth()];

    return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
  };

  _handleCleanButtonClick = (event) => {
    this._setFieldsValues();
    this._hiddenDatepicker();
    event.stopPropagation();
  };

  _handleApplyButtonClick = (event) => {
    this._hiddenDatepicker();
    event.stopPropagation();
  };
}

export default DateDropdown;
