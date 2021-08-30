class ControllerDateDropdown {
  constructor(view, model, initDates) {
    this._view = view;
    this._model = model;
    this._initDates = initDates;
    this._addListeners();
    if (this._initDates.length) this._view.setDate(this._initDates);
  }

  _handleDateDropdownDatepickerOnSelect = () => {
    this._model.setStartDate(this._view.getStartDate());
    this._model.setEndDate(this._view.getEndDate());

    this._view.setComingFieldValue(this._view.getStartDateText());
    this._view.setLeaveFieldValue(this._view.getEndDateText());
  }

  _handleDateDropdownCleanButtonClick = () => {
    this._model.setStartDate(undefined);
    this._model.setEndDate(undefined);

    this._view.setComingFieldValue('');
    this._view.setLeaveFieldValue('');

    this._view.hiddenDatepicker();
  }

  _handleDateDropdownApplyButtonClick = () => this._view.hiddenDatepicker();

  _addListeners = () => {
    this._view.getDateDropdown().addEventListener('datepickerOnSelect', this._handleDateDropdownDatepickerOnSelect);
    this._view.getDateDropdown().addEventListener('cleanButtonClick', this._handleDateDropdownCleanButtonClick);
    this._view.getDateDropdown().addEventListener('applyButtonClick', this._handleDateDropdownApplyButtonClick);
  }
}

export { ControllerDateDropdown };
