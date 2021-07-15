import "../../../scripts/create-element.js";

class DropdownItem{
  constructor(options){

    const _title = options.titleText || "Item title";
    const _quantity = options.quantity || 0;

    this._model = new ModelDropdownItem({title: _title, quantity: _quantity});
    this._view = new ViewDropdownItem({title: _title, quantity: _quantity});
    this._controller = new ControllerDropdownItem({model: this._model, view: this._view});

  }

  getItemToString = () => {return this._model.getItemToString()};

  getQuantity = () => {return this._model.getQuantity()};

  clean = () => this._controller.clean();

  getTitle = () => {return this._model.getTitle()};

  getItem = () => {return this._view.getItem()};
}

class ModelDropdownItem {
  constructor (options) {
    this._title = options.title;
    this._quantity = options.quantity;
  }
  
  increase = () => this._quantity++;

  reduce = () => this._quantity--;

  getQuantity = () => {return this._quantity};

  getTitle = () => {return this._title};

  getItemToString = () => {return `${this._quantity} ${this._title}`};

  setTitle = (value) => this._title = value;

  setQuantity = (value) => this._quantity = value;
}

class ViewDropdownItem {
  constructor (options) {

    this._createTitle(options.title);
    this._createQuantity(options.quantity);
    this._createButtons();
    this._createQuantityBlock();
    this._createItem();

    this._createEvents();
    this._addListeners();

  }

  getItem = () => {return this._item};

  setQuantity = (value) => {
    this._quantity.innerHTML = value;
  }

  activateMinusButton = () => this._minusButton.classList.remove("dropdown__minus-button_disabled");

  deactivateMinusButton = () => this._minusButton.classList.add("dropdown__minus-button_disabled");

  setTitle = (value) => this._title.innerHTML = value;

  _createTitle = (title) => {
    this._title = createElement("p", "dropdown__title");
    this._title.innerHTML = title;
  }

  _createQuantity = (quantity) => {
    this._quantity = createElement("p", "dropdown__quantity");
    this._quantity.innerHTML = quantity;
  }

  _createButtons = () =>{
    this._minusButton = createElement("div", "dropdown__button dropdown__minus-button");
    this._minusButton.innerHTML = "-";

    this._plusButton = createElement("div", "dropdown__button dropdown__plus-button");
    this._plusButton.innerHTML = "+";
  }

  _createQuantityBlock = () => {
    this._quantityBlock = createElement("div", "dropdown__quantity-blok");
    this._quantityBlock.appendChild(this._minusButton);
    this._quantityBlock.appendChild(this._quantity);
    this._quantityBlock.appendChild(this._plusButton);
  }

  _createItem = () => {
    this._item = createElement("div", "dropdown__item");
    this._item.appendChild(this._title);
    this._item.appendChild(this._quantityBlock);
  }

  _createEvents = () => {
    this._onMinusButtonClick = new Event("minusButtonClick", {bubbles: true});
    this._onPlusButtonClick = new Event("plusButtonClick", {bubbles: true})
  }

  _addListeners = () => {
    this._minusButton.addEventListener("click", this._handleMinusButtonClick);
    this._plusButton.addEventListener("click", this._handlePlusButtonClick);
  }

  _handleMinusButtonClick = () => this._minusButton.dispatchEvent(this._onMinusButtonClick);

  _handlePlusButtonClick = () => this._plusButton.dispatchEvent(this._onPlusButtonClick);
}


class ControllerDropdownItem {
  constructor (options) {

    this._model = options.model;
    this._view = options.view;

    this._addListeners();
  }

  clean = () => {
    this._model.setQuantity(0);
    this._view.setQuantity(this._model.getQuantity());
    this._view.deactivateMinusButton();
  }

  _addListeners = () => {

    this._view.getItem().addEventListener("minusButtonClick", this._handleMinusButtonClick)
    this._view.getItem().addEventListener("plusButtonClick", this._handlePlusButtonClick)
  }

  _handleMinusButtonClick = () => {
    if (this._model.getQuantity() === 0) return;
    this._model.reduce();
    this._view.setQuantity(this._model.getQuantity());
    if (this._model.getQuantity() === 0) this._view.deactivateMinusButton();
  }

  _handlePlusButtonClick = () => {
    if (this._model.getQuantity() === 0) this._view.activateMinusButton();
    this._model.increase();
    this._view.setQuantity(this._model.getQuantity());
  }   

}

export {DropdownItem}