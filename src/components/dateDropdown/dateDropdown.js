import * as $ from 'jquery';
import '../../scripts/jquery-ui/jquery-ui.js';
import '../datepicker/datepicker.js';
import '../../scripts/jquery-ui/jquery-ui.css';
import '../datepicker/datepicker.sass';
import '../../scripts/datepickeRrussification.js';
import '../../scripts/createElem.js';
import './dateDropdown.sass';


class DateDropdown{
  constructor(selector, titles = ["прибытие", "выезд"], names = ["dateComing, dateLeave"], selectFunc, ...initDate){

    this.dateStart;
    this.dateEnd;

    this.onSelected = selectFunc

    this.dateDropdown = document.querySelector(selector);
    this.dateDropdown.classList.add("dateDropdown");

    this.dateTitleComing = createElement("h3", "dateDropdown__title dateDropdown__title_left");
    this.dateTitleComing.innerHTML = titles[0];

    this.dateFieldComing = createElement("input", "dateDropdown__field dateDropdown__field_left");
    this.dateFieldComing.type = "text";
    this.dateFieldComing.name = names[0];
    this.dateFieldComing.readOnly = true;
    this.dateFieldComing.placeholder = "ДД.ММ.ГГГГ"
    this.dateFieldComing.addEventListener("focus", () => this.datepickerConteiner.classList.add("visible"));
    this.dateFieldComing.addEventListener("blur", () => this.datepickerConteiner.classList.remove("visible"));

    this.dateConteinerComing = createElement("div", "dateDropdown__conteiner dateDropdown__conteiner_left")
    this.dateConteinerComing.appendChild(this.dateTitleComing);
    this.dateConteinerComing.appendChild(this.dateFieldComing);

    this.dateTitleLeave = createElement("h3", "dateDropdown__title dateDropdown__title_right");
    this.dateTitleLeave.innerHTML = titles[1];

    this.dateFieldLeave = createElement("input", "dateDropdown__field dateDropdown__field_right");
    this.dateFieldLeave.type = "text";
    this.dateFieldLeave.name = names[1];
    this.dateFieldLeave.readOnly = true;
    this.dateFieldLeave.placeholder = "ДД.ММ.ГГГГ"
    this.dateFieldLeave.addEventListener("focus", () => this.datepickerConteiner.classList.add("visible"));
    this.dateFieldLeave.addEventListener("blur", () => this.datepickerConteiner.classList.remove("visible"));

    this.dateConteinerLeave = createElement("div", "dateDropdown__conteiner dateDropdown__conteiner_right")
    this.dateConteinerLeave.appendChild(this.dateTitleLeave);
    this.dateConteinerLeave.appendChild(this.dateFieldLeave);

    this.datepickerConteiner = createElement("div", "dateDropdown__datepickerConteiner");
    
    let onSelected = this.onSelected;
    let dateStart = this.dateStart;
    let dateEnd = this.dateEnd;
    let dateFieldComing = this.dateFieldComing;
    let dateFieldLeave= this.dateFieldLeave;

    $(this.datepickerConteiner).datepicker({
      range: 'period',
      showOtherMonths: 1,
      selectOtherMonths: true,
      onSelect: function(dateText, inst, extensionRange) {
        dateFieldComing.value = extensionRange.startDateText;
        dateFieldLeave.value = extensionRange.endDateText;
        dateStart = extensionRange.startDate;
        dateEnd = extensionRange.endDate;
        onSelected();
      }
    });
    
    this.datapicker = $(this.datepickerConteiner).datepicker('widget').data('datepickerExtensionRange');

    if (initDate.length) {
      this.setDate(initDate[0], initDate[1]);

    }
    

    

    this.cleanText = createElement("p", "button__text");
    this.cleanText.innerHTML = "очистить";
  
    this.cleanButton = createElement("div", "button button_minimal dateDropdown__cleanButton");
    this.cleanButton.appendChild(this.cleanText);
    this.cleanButton.addEventListener("click", this.clean)
  
    this.enterText = createElement("p", "button__text");
    this.enterText.innerHTML = "применить";
  
    this.enterButton = createElement("div", "button button_minimal dateDropdown__cleanButton");
    this.enterButton.appendChild(this.enterText);
    this.enterButton.addEventListener("click", this.enter)
  
    this.controlPanel = createElement("div", "dateDropdown__controlPanel");
    this.controlPanel.appendChild(this.cleanButton);
    this.controlPanel.appendChild(this.enterButton);
  
    this.datepickerConteiner.appendChild(this.controlPanel); 
    
    this.dateDropdown.appendChild(this.dateConteinerComing);
    this.dateDropdown.appendChild(this.dateConteinerLeave);
    this.dateDropdown.appendChild(this.datepickerConteiner);


    

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
    $(this.datepickerConteiner).datepicker("setDate", [dateComing, dateLeave]);
    this.dateFieldComing.value = this.datapicker.startDateText;
    this.dateFieldLeave.value = this.datapicker.endDateText;
    this.dateStart = this.datapicker.startDate;
    this.dateEnd = this.datapicker.endDate;
  }
  
  getNumberOfDays = () => {
    console.log(this.dateEnd)
    return (this.datapicker.endDate - this.datapicker.startDate) / 86400000
  }

}

export {DateDropdown}

