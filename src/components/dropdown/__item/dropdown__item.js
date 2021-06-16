import '../../../scripts/createElem.js'
function DropdownItem(title, quantity){
    this.quantity = quantity;
    
    this.title = createElement("p", "dropdown__title");
    this.title.innerHTML = title;

    this.itemValue = createElement("p", "dropdown__itemValue");
    this.itemValue.innerHTML = this.quantity;

    this.minusButton = createElement("div", "dropdown__button dropdown__minusButton");
    this.minusButton.innerHTML = "-";

    this.plusButton = createElement("div", "dropdown__button dropdown__plusButton");
    this.plusButton.innerHTML = "+";

    this.increase = () => {
      if (this.quantity === 0) this.minusButton.classList.remove("disabled");
      this.quantity++;
      this.itemValue.innerHTML = String(this.quantity);
      this.minusButton.disabled = (this.quantity > 0) ? 0 : 1
    }

    this.reduce = () => {
      if (this.quantity === 0) return;
      this.quantity--;
      this.itemValue.innerHTML = String(this.quantity);
      if (this.quantity === 0) this.minusButton.classList.add("disabled");
    }

    this.minusButton.addEventListener("click", this.reduce);
    this.plusButton.addEventListener("click", this.increase); 

    this.quantityBlock = createElement("div", "dropdown__quantityBlok");
    this.quantityBlock.appendChild(this.minusButton);
    this.quantityBlock.appendChild(this.itemValue);
    this.quantityBlock.appendChild(this.plusButton);

    this.item = createElement("div", "dropdown__item");
    this.item.appendChild(this.title);
    this.item.appendChild(this.quantityBlock);


    this.getItemsList = function(){
      return `${this.quantity} ${this.title.innerHTML}`
    }

    this.getItemValue = function(){
      return this.quantity
    }

    this.getItemHTML = function(){
      return this.item
    }

    this.setItemValue = function(value){
      this.quantity = value;
      this.itemValue.innerHTML = String(this.quantity);
      this.quantity === 0 ? this.minusButton.disabled = 1 : this.minusButton.disabled = 0;
    }

}

export {DropdownItem}