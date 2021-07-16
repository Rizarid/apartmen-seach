import * as $ from "jquery";

import "../../scripts/create-element.js";
import {ControlPanel} from "../control-panel/control-panel.js"
import "./ui-datepicker";



class Datepicker{
  constructor(parent){
    this._parent = parent;
    this._createOnSelectEvent();
    this._init(this);
    this._controlPanel = new ControlPanel();
    
    this._parent.appendChild(this._controlPanel.getPanel());
    this._datepicker = this._getDatepickerObject();
    this._addListeners();
  }

  getDatepicker = () => {return this._parent};

  setDate = (dates) => {
    $(this._parent).datepicker("setDate", dates);
    this._parent.dispatchEvent(this._onSelected);
  }

  getStartDate = () => {return this._datepicker.startDate};

  getEndDate = () => {return this._datepicker.endDate};

  getStartDateText = () => {return this._datepicker.startDateText};
  
  getEndDateText = () => {return this._datepicker.endDateText};

  _createOnSelectEvent = () => this._onSelected = new Event("datepickerOnSelect", {bubbles: true});

  _init = (obj) => {
    $(this._parent).datepicker({
      range: "period",
      showOtherMonths: 1,
      selectOtherMonths: true,
      
      onSelect: function(dateText, inst, extensionRange) {
        obj._parent.dispatchEvent(obj._onSelected);
      }
    });
  }

  _getDatepickerObject = () => {
    return $(this._parent).datepicker("widget").data("datepickerExtensionRange");
  }

  _handleParentCleanButtonClick = () => this.setDate([null, null]);

  _addListeners = () => {
    this._parent.addEventListener("cleanButtonClick", this._handleParentCleanButtonClick);
  }
}

export {Datepicker}