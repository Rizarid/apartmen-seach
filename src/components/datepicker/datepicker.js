import * as $ from 'jquery';

import '../../scripts/create-element';
import { ControlPanel } from '../control-panel/control-panel';
import './ui-datepicker';

class Datepicker {
  constructor(parent) {
    this._parent = parent;
    this._createOnSelectEvent();
    this._init();
    this._controlPanel = new ControlPanel();

    this._parent.appendChild(this._controlPanel.getPanel());
    this._datepicker = this._getDatepickerObject();
    this._addListeners();
  }

  getDatepicker = () => this._parent;

  setDate = (dates) => {
    $(this._parent).datepicker('setDate', dates);
    this._parent.dispatchEvent(this._onSelected);
  }

  getStartDate = () => this._datepicker.startDate;

  getEndDate = () => this._datepicker.endDate;

  getStartDateText = () => this._datepicker.startDateText;

  getEndDateText = () => this._datepicker.endDateText;

  _createOnSelectEvent = () => { this._onSelected = new Event('datepickerOnSelect', { bubbles: true }); };

  _init = () => {
    $(this._parent).datepicker({
      range: 'period',
      showOtherMonths: 1,
      selectOtherMonths: true,
      onSelect: this._onSelect,
      minDate: 0
    });
  }

  _getDatepickerObject = () => $(this._parent).datepicker('widget').data('datepickerExtensionRange');

  _handleParentCleanButtonClick = () => this.setDate([null, null]);

  _addListeners = () => {
    this._parent.addEventListener('cleanButtonClick', this._handleParentCleanButtonClick);
  }

  _onSelect = () => {
    this._parent.dispatchEvent(this._onSelected);
  };
}

export { Datepicker };
