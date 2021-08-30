import '../../../scripts/create-element';

class ViewDropdownItem {
  constructor(options) {
    const { title, quantity } = options;

    this._createTitle(title);
    this._createQuantity(quantity);
    this._createButtons();
    this._createQuantityBlock();
    this._createItem();

    this._createEvents();
    this._addListeners();
  }

  getItem = () => this._item;

  setQuantity = (value) => {
    this._quantity.innerHTML = value;
  }

  activateMinusButton = () => this._minusButton.classList.remove('dropdown__minus-button_disabled');

  deactivateMinusButton = () => this._minusButton.classList.add('dropdown__minus-button_disabled');

  setTitle = (value) => { this._title.innerHTML = value; };

  _createTitle = (title) => {
    this._title = createElement('p', 'dropdown__title');
    this.setTitle(title);
  }

  _createQuantity = (quantity) => {
    this._quantity = createElement('p', 'dropdown__quantity');
    this.setQuantity(quantity);
  }

  _createButtons = () => {
    this._minusButton = createElement('div', 'dropdown__button dropdown__minus-button');
    this._minusButton.innerHTML = '-';

    this._plusButton = createElement('div', 'dropdown__button dropdown__plus-button');
    this._plusButton.innerHTML = '+';
  }

  _createQuantityBlock = () => {
    this._quantityBlock = createElement('div', 'dropdown__quantity-blok');
    this._quantityBlock.appendChild(this._minusButton);
    this._quantityBlock.appendChild(this._quantity);
    this._quantityBlock.appendChild(this._plusButton);
  }

  _createItem = () => {
    this._item = createElement('div', 'dropdown__item');
    this._item.appendChild(this._title);
    this._item.appendChild(this._quantityBlock);
  }

  _createEvents = () => {
    this._onMinusButtonClick = new Event('minusButtonClick', { bubbles: true });
    this._onPlusButtonClick = new Event('plusButtonClick', { bubbles: true });
  }

  _addListeners = () => {
    this._minusButton.addEventListener('click', this._handleMinusButtonClick);
    this._plusButton.addEventListener('click', this._handlePlusButtonClick);
  }

  _handleMinusButtonClick = () => this._minusButton.dispatchEvent(this._onMinusButtonClick);

  _handlePlusButtonClick = () => this._plusButton.dispatchEvent(this._onPlusButtonClick);
}

export { ViewDropdownItem };
