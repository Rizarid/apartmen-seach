import './__item/dropdown__item.js'
import '../../scripts/createElement.js'

class Dropdown{
    constructor(selector, elementName, listItems){
      this.dropdown = document.querySelector(selector);
  
      this.field = createElement("input", "dropdown__field");
      this.field.type = "text";
      this.field.name = elementName;
      this.field.readOnly = true;
      
      this.listItems = [];
      for (let item in listItems){
        this.listItems.push(new DropdownItem(item, listItems[item]))
      }
  
      this.listItemsHTML = createElement("div", "dropdown__list");
  
      for (let item in this.listItems){
        this.listItemsHTML.appendChild(this.listItems[item].getItemHTML());
      }
  
      this.field.value = this.getDropdownValue();
      
      this.dropdown.addEventListener("mouseleave", this.enter);
  
      this.dropdown.appendChild(this.field);
      this.dropdown.appendChild(this.listItemsHTML);
    }
  
    getDropdownValue = () => {
      
      let values = []
      for (let item in this.listItems){
        values.push(this.listItems[item].getItemsList())
      }
  
      return values.join(", ");
    }
  
    enter = () => {
      console.log(123);
      this.field.value = this.getDropdownValue();
    }
      
  }