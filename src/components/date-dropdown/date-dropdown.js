import * as $ from 'jquery';

import '../../scripts/jquery-ui/jquery-ui.js';
import '../../scripts/jquery-ui/jquery-ui.css';
import '../../scripts/datepicker-russification.js';
import '../../scripts/create-element.js';
import { Datepicker } from '../datepicker/datepicker.js';
import '../datepicker/datepicker.sass';

import './date-dropdown.sass';

class DateDropdown {
  constructor(options = {}) {
    this._init(options);

    this._view = new ViewDateDropdown(this._parentSelector);
    this._model = new ModelDateDropdown();
    this._controller = new ControllerDateDropdown(this._view, this._model, this._initDates);
  }

  getQuantityDays = () => this._model.getQuantityDays();

  getStartDate = () => this._model.getStartDate();

  getEndDate = () => this._model.getEndDate();

  _init = (options = {}) => {
    const { parentSelector = 'date-dropdown', initDates = [] } = options;
    this._parentSelector = parentSelector;
    this._initDates = initDates;
  }
}

class ViewDateDropdown {
  constructor(parentSelector) {
    this._parent = this._getParentElement(parentSelector);
    this._getFields();
    this._datepicker = new Datepicker($(this._parent).find('.date-dropdown__datepicker-container')[0]);
    this._addListeners();
  }

  getDateDropdown = () => this._parent;

  setComingFieldValue = (value) => this._comingField.value = value;

  setLeaveFieldValue = (value) => this._leaveField.value = value;

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
    this._comingField = $(this._parent).find('.date-dropdown__container_left .date-dropdown__field')[0];
    this._leaveField = $(this._parent).find('.date-dropdown__container_right .date-dropdown__field')[0];
  }

  _handleFieldFocus = () => this.showDatepicker();

  _addListeners = () => {
    this._comingField.addEventListener('focus', this._handleFieldFocus);
    this._leaveField.addEventListener('focus', this._handleFieldFocus);
  }
}

class ModelDateDropdown {
  constructor() {
    this._startDate = undefined;
    this._endDate = undefined;
    this._quantityDays = 0;
    this._millisecondsInDay = 86400000;
  }

  getStartDate = () => this._startDate;

  getEndDate = () => this._endDate;

  getQuantityDays = () => this._quantityDays;

  setStartDate = (value) => {
    this._startDate = value;
  }

  setEndDate = (value) => {
    this._endDate = value;
    this._calculateQuantityDays();
  }

  _isDates = () => this._startDate & this._endDate;

  _calculateQuantityDays = () => {
    this._quantityDays = this._isDates() ? (this._endDate - this._startDate) / this._millisecondsInDay : 0;
  }
}

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

export { DateDropdown };
