import '../../scripts/createElem.js'
import * as $ from 'jquery';
import '../../scripts/jquery-ui/jquery-ui.js';
import '../datepicker/datepicker.js';
import '../../scripts/jquery-ui/jquery-ui.css';
import '../datepicker/datepicker.sass';
import '../../scripts/datepickeRrussification.js';

import './filterDateDropdown.sass'



class FilterDateDropdown{
  constructor(selector, titles = "даты прибывания в отеле", names = "filterDate", ...initDate){

    this.filterDateDropdown = document.querySelector(selector);

    this.dateTitle = createElement("h3", "filterDateDropdown__title filterDateDropdown__title_left");
    this.dateTitle.innerHTML = titles;

    this.dateField = createElement("input", "filterDateDropdown__field filterDateDropdown__field_left");
    this.dateField.type = "text";
    this.dateField.name = names[0];
    this.dateField.readOnly = true;
    this.dateField.placeholder = "ДД.ММ.ГГГГ"
    this.dateField.addEventListener("focus", () => this.datepickerConteiner.classList.add("visible"));
    this.dateField.addEventListener("blur", () => this.datepickerConteiner.classList.remove("visible"));

    this.dateConteiner = createElement("div", "filterDateDropdown__conteiner FilterDateDropdown__conteiner_left")
    this.dateConteiner.appendChild(this.dateTitle);
    this.dateConteiner.appendChild(this.dateField);


    this.datepickerConteiner = createElement("div", "filterDateDropdown__datepickerConteiner");
    
    let dateField = this.dateField;
    this.localeOptions = {
      day: 'numeric',
      month: 'short'
    };
    let localeOptions = this.localeOptions
    $(this.datepickerConteiner).datepicker({
      range: 'period', // режим - выбор периода
      showOtherMonths: 1,
      selectOtherMonths: true,
      dateFormat: "dd.mm.yy",
      monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
      onSelect: function(dateText, inst, extensionRange) {
    	  // extensionRange - объект расширения
        dateField.value = `${extensionRange.startDate.toLocaleString('ru', localeOptions).slice(0, -1)} - ${extensionRange.endDate.toLocaleString('ru', localeOptions).slice(0, -1)}`;
      }
    });
    
    this.datapicker = $(this.datepickerConteiner).datepicker('widget').data('datepickerExtensionRange');

    if (initDate.length) this.setDate(initDate[0], initDate[1]);
    
    this.cleanText = createElement("p", "button__text");
    this.cleanText.innerHTML = "очистить";
  
    this.cleanButton = createElement("div", "button button_minimal filterDateDropdown__cleanButton");
    this.cleanButton.appendChild(this.cleanText);
    this.cleanButton.addEventListener("click", this.clean)
  
    this.enterText = createElement("p", "button__text");
    this.enterText.innerHTML = "применить";
  
    this.enterButton = createElement("div", "button button_minimal filterDateDropdown__cleanButton");
    this.enterButton.appendChild(this.enterText);
    this.enterButton.addEventListener("click", this.enter)
  
    this.controlPanel = createElement("div", "filterDateDropdown__controlPanel");
    this.controlPanel.appendChild(this.cleanButton);
    this.controlPanel.appendChild(this.enterButton);
  
    this.datepickerConteiner.appendChild(this.controlPanel); 
    
    this.filterDateDropdown.appendChild(this.dateConteiner);
    this.filterDateDropdown.appendChild(this.datepickerConteiner);

  }

  clean = () => {
    $(this.datepickerConteiner).datepicker("setDate", [null, null]);
    this.dateFieldComing.value = "";
    this.dateFieldLeave.value = "";
  }

  enter = () => {
    this.datepickerConteiner.classList.add("unvisible");
    setTimeout(() => this.datepickerConteiner.classList.remove("unvisible"), 100);
  }

  setDate = (dateComing, dateLeave) => {
    console.log(dateComing)
    $(this.datepickerConteiner).datepicker("setDate", [dateComing, dateLeave]);
    this.dateField.value = `${this.datapicker.startDate.toLocaleString('ru', this.localeOptions).slice(0, -1)} - ${this.datapicker.endDate.toLocaleString('ru', this.localeOptions).slice(0, -1)}`;
  }
}

let filterDateDropdown = new FilterDateDropdown(".filterDateDropdown", undefined, undefined, '15.06.2021', '19.06.2021');