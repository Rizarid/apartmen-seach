import * as $ from 'jquery';
import './date-picker.sass';

class DatePicker {
  constructor(target) {
    this._body = target;
    this._getInitDate();
    this._createOnSelectEvent();
    this._init();
    this._datepicker = this._getDatepickerObject();
    this._addListeners();

    if (this._initDate) {
      const initDatePromise = new Promise((resolve) => {
        setTimeout(() => resolve(this._initDate), 1);
      }).then(this._setDate);
    }
  }

  _getInitDate = () => {
    const { start, end } = this._body.dataset;
    if (start && end) this._initDate = [start, end];
  }

  _setDate = (dates) => {
    $(this._body).datepicker('setDate', dates);
    this._onSelect();
  };

  _createOnSelectEvent = () => {
    const detail = { startDate: 0, endDate: 0, startDateText: '', endDateText: '' };
    this._onSelected = new CustomEvent('datepickerOnSelect', { bubbles: true, detail });
  };

  _init = () => {
    $(this._body).datepicker({
      range: 'period',
      showOtherMonths: 1,
      selectOtherMonths: true,
      onSelect: this._onSelect,
      minDate: 0,
    });
  };

  _handleParentCleanButtonClick = () => this._setDate([null, null]);

  _addListeners = () => {
    this._body.addEventListener('cleanButtonClick', this._handleParentCleanButtonClick);
  };

  _onSelect = () => {
    const { startDate, endDate, startDateText, endDateText } = this._datepicker;
    this._onSelected.detail.startDate = startDate;
    this._onSelected.detail.endDate = endDate;
    this._onSelected.detail.startDateText = startDateText;
    this._onSelected.detail.endDateText = endDateText;
    this._body.dispatchEvent(this._onSelected);
  };

  _getDatepickerObject = () => $(this._body).datepicker('widget').data('datepickerExtensionRange');
}

export { DatePicker };
