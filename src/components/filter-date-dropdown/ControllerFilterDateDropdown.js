class ControllerFilterDateDropdown {
  constructor(view, model, initDates) {
    this._view = view;
    this._model = model;
    this._initDates = initDates;
    this._addListeners();
    if (this._initDates.length) this._view.setDate(this._initDates);
  }

  getStartDate = () => this._view.getStartDate();

  getEndDate = () => this._view.getEndDate();

  _handleDateDropdownDatepickerOnSelect = () => {
    this._view.setFieldValue(this._formatDate(this._view.getStartDate(), this._view.getEndDate()));
  }

  _handleDateDropdownCleanButtonClick = () => {
    this._view.setFieldValue('');
    this._view.hiddenDatepicker();
  }

  _handleDateDropdownApplyButtonClick = () => this._view.hiddenDatepicker();

  _addListeners = () => {
    this._view.getDateDropdown().addEventListener('datepickerOnSelect', this._handleDateDropdownDatepickerOnSelect);
    this._view.getDateDropdown().addEventListener('cleanButtonClick', this._handleDateDropdownCleanButtonClick);
    this._view.getDateDropdown().addEventListener('applyButtonClick', this._handleDateDropdownApplyButtonClick);
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
}

export { ControllerFilterDateDropdown };
