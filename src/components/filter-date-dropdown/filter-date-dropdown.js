import * as $ from "jquery";

import "../../scripts/jquery-ui/jquery-ui.js";
import "../../scripts/jquery-ui/jquery-ui.css";
import "../../scripts/datepicker-russification.js";
import "../../scripts/create-element.js";
import "../datepicker/datepicker.js";
import "../datepicker/datepicker.sass";
import { Datepicker } from "../datepicker/datepicker.js";
import "./filter-date-dropdown.sass";


class FilterDateDropdown{
  constructor(options){

    this._init(options);
    
    this._view = new ViewFilterDateDropdown (this._parentSelector);
    this._controller = new ControllerFilterDateDropdown (this._view, this._model, this._initDates);
  }
  
  getStartDate = () => {return this._view.getStartDate()};

  getEndDate = () => {return this._view.getEndDate()};

  _init = (options) => {
    this._parentSelector = options.parentSelector || "filter-date-dropdown";
    this._initDates = options.initDates || [];
  }

}

class ViewFilterDateDropdown {
  constructor (parentSelector) {

    this._parent = this._getParentElement(parentSelector);
    this._getField();

    this._datepicker = new Datepicker($(this._parent).find(".filter-date-dropdown__datepicker-container")[0]);

    this._addListeners();
  }

  getDatedropdown = () => {return this._parent};

  setFieldValue = (value) => this._field.value = value; 

  setDate = (dates) => this._datepicker.setDate(dates);

  getStartDate = () => {return this._datepicker.getStartDate()};

  getEndDate = () => {return this._datepicker.getEndDate()};

  getStartDateText = () => {return this._datepicker.getStartDateText()};
  
  getEndDateText = () => {return this._datepicker.getEndDateText()};

  showDatepicker = () => {
    this._datepicker.getDatepicker().classList.add("filter-date-dropdown__datepicker-container_visible");
  }

  hiddenDatepicker = () => {
    this._datepicker.getDatepicker().classList.remove("filter-date-dropdown__datepicker-container_visible");
  }

  _getParentElement = (parentSelector) => {return document.querySelector(`.js-${parentSelector}`)};

  _getField = () => {
    this._field = $(this._parent).find(".filter-date-dropdown__field")[0];
  }

  _handleFieldFocus = () => this.showDatepicker();

  _addListeners = () => {
    this._field.addEventListener("focus", this._handleFieldFocus);
  }
}


class ControllerFilterDateDropdown {
  constructor (view, model, initDates) {

    this._view = view;
    this._model = model;
    this._initDates = initDates;

    this._addListeners();

    if (this._initDates.length) this._view.setDate(this._initDates);
  }

  getStartDate = () => {return this._view.getStartDate()}

  getEndDate = () => {return this._view.getEndDate()}

  _handleDateDropdownDatepickerOnSelect = () => {
    this._view.setFieldValue(this._formatDate(this._view.getStartDate(), this._view.getEndDate()));
  }

  _handleDateDropdownCleanButtonClick = () => {
    this._view.setFieldValue("");
    this._view.hiddenDatepicker();
  }

  _handleDateDropdownApplyButtonClick = () => this._view.hiddenDatepicker();

  _addListeners = () => {
    this._view.getDatedropdown().addEventListener("datepickerOnSelect", this._handleDateDropdownDatepickerOnSelect);
    this._view.getDatedropdown().addEventListener("cleanButtonClick", this._handleDateDropdownCleanButtonClick);
    this._view.getDatedropdown().addEventListener("applyButtonClick", this._handleDateDropdownApplyButtonClick);
  }

  _formatDate = (startDate, endDate) => {
    if(!startDate || !endDate) return "";
    else{ 
      const months = ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"];
      const startDay =  (startDate.getDate() > 9) ? startDate.getDate().toString() : `0${startDate.getDate()}`
      const endDay =  (endDate.getDate() > 9) ? endDate.getDate().toString() : `0${endDate.getDate()}`
      const startMonth = months[startDate.getMonth()];
      const endMonth = months[endDate.getMonth()];

      return `${startDay} ${startMonth} - ${endDay} ${endMonth}`
    }
  }
}

export {FilterDateDropdown}
