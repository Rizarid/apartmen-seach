import '../../scripts/create-element';

class ViewDropdownItem {
  constructor(target) {
    this._body = target;
    this._title = this._getTitleElement();
    this._quantity = this._getQuantityElement();
    this._minusButton = this._getMinusButton();
    this._plusButton = this._getPlusButton();
    this._createEvents();
    this._addListeners();
  }

  getItem = () => this._body;

  getTitle = () => this._title.innerHTML;

  setQuantity = (value) => { this._quantity.innerHTML = value; }

  getQuantity = () => Number(this._quantity.innerText);

  activateMinusButton = () => this._minusButton.classList.remove('dropdown__minus-button_disabled');

  deactivateMinusButton = () => this._minusButton.classList.add('dropdown__minus-button_disabled');

  _getTitleElement = () => this._body.querySelector('.js-item-of-dropdown__title');

  _getQuantityElement = () => this._body.querySelector('.js-item-of-dropdown__quantity');

  _getMinusButton = () => this._body.querySelector('.js-item-of-dropdown__button_minus');

  _getPlusButton = () => this._body.querySelector('.js-item-of-dropdown__button_plus');

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
