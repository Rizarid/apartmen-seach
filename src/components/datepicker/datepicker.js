import * as $ from 'jquery';

import '../../scripts/create-element';
import { ControlPanel } from '../control-panel/control-panel';
import './ui-datepicker';

class Datepicker {
  constructor(target) {
    this._body = target;
    this._createOnSelectEvent();
    this._init();
    this._controlPanel = this._getControlPanel();

    this._datepicker = this._getDatepickerObject();
    this._addListeners();
  }

  getDatepicker = () => this._body;

  setDate = (dates) => {
    $(this._body).datepicker('setDate', dates);
    this._body.dispatchEvent(this._onSelected);
  };

  getStartDate = () => this._datepicker.startDate;

  getEndDate = () => this._datepicker.endDate;

  getStartDateText = () => this._datepicker.startDateText;

  getEndDateText = () => this._datepicker.endDateText;

  _getControlPanel = () => {
    const controlPanel = this._body.querySelector('.js-control-panel');
    return new ControlPanel(controlPanel);
  };

  _createOnSelectEvent = () => { this._onSelected = new Event('datepickerOnSelect', { bubbles: true }); };

  _init = () => {
    $(this._body).datepicker({
      range: 'period',
      showOtherMonths: 1,
      selectOtherMonths: true,
      onSelect: this._onSelect,
      minDate: 0,
    });
  };

  _getDatepickerObject = () => $(this._body).datepicker('widget').data('datepickerExtensionRange');

  _handleParentCleanButtonClick = () => this.setDate([null, null]);

  _addListeners = () => {
    this._body.addEventListener('cleanButtonClick', this._handleParentCleanButtonClick);
  };

  _onSelect = () => {
    this._body.dispatchEvent(this._onSelected);
  };
}

export { Datepicker };
