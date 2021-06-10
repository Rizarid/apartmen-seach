import '../../../scripts/createElement.js'
import '../DropdownClass.js'

class Guests extends Dropdown{

    constructor(selector, elementName, listItems = [0, 0, 0]){
  
      if (Array.isArray(listItems)) listItems = {"взрослые": listItems[0], "дети": listItems[1], 
      "младенцы": listItems[2]};
      else listItems = listItems;
      console.log(listItems)
  
      super(selector, elementName, listItems);
  
      this.cleanText = createElement("p", "button__text");
      this.cleanText.innerHTML = "очистить";
  
      this.cleanButton = createElement("div", "button button_minimal dropdown__cleanButton");
      this.cleanButton.appendChild(this.cleanText);
      this.cleanButton.addEventListener("click", this.clean)
  
      this.enterText = createElement("p", "button__text");
      this.enterText.innerHTML = "применить";
  
      this.enterButton = createElement("div", "button button_minimal dropdown__cleanButton");
      this.enterButton.appendChild(this.enterText);
      this.enterButton.addEventListener("click", this.enter)
  
      this.controlPanel = createElement("div", "dropdownb__controlPanel");
      this.controlPanel.appendChild(this.cleanButton);
      this.controlPanel.appendChild(this.enterButton);
  
      this.listItemsHTML.appendChild(this.controlPanel); 
  
      this.clean();
    }
  
    getDecline = function(numb){
  
      let valueArr = String(numb);
  
      if(valueArr[valueArr.length - 1] === "1" & valueArr[valueArr.length - 2] != "1"){
        return 0;
      }else if(((valueArr[valueArr.length-1] === "2") | (valueArr[valueArr.length-1] === "3") | 
      (valueArr[valueArr.length-1] === "4")) & valueArr[valueArr.length - 2] != "1"){
        return 1;
      }else{
        return 2;
      }
    }
    getDeclineGuest = (numb) => {
      let guest = ["гость", "гостя", "гостей"];
      return guest[this.getDecline(numb)]
    }
  
    getDeclineBabies = (numb) => {
      let guest = ["младенец", "младенца", "младенцев"];
      return guest[this.getDecline(numb)]
    }
  
    clean = function(){
  
      for (let item in this.listItems){
        this.listItems[item].setItemValue(0);
        this.field.value = "Сколько гостей";
      }
    }
  
    getDropdownValue = () => {
      let childrenQuantity
      let values = []
      for (let item in this.listItems){
        if (this.listItems[item].title.innerHTML === "младенцы") {
          childrenQuantity = this.listItems[item].quantity;
          continue;
        } 
        values.push(this.listItems[item].getItemValue())
      }
      let value = values.reduce((sum, curent) => sum + curent, 0);
      let result = (childrenQuantity === 0) ? 
      `${value} ${this.getDeclineGuest(value)}` : 
      `${value} ${this.getDeclineGuest(value)}, ${childrenQuantity} ${this.getDeclineBabies(childrenQuantity)}`;
            
      return result;
    }
  }