import { getDecline } from '../../utilities/utilities';
import ControlPanel from '../control-panel/control-panel';
import './dropdown.scss';

class Dropdown {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._field = this._getTarget('.js-dropdown__field');
    this._list = this._getTarget('.js-dropdown__list');
    this._items = this._getItems();

    this._getValue = this._isConvenience() ? this._getConvenienceValue : this._getGuestsValue;
    if (!this._isConvenience()) this._controlPanel = new ControlPanel(this._list);
    this._addListeners();
    this._apply();
  }

  _getBody = (parent) => parent.querySelector('.js-dropdown');

  _getItems = () => {
    const itemsTargets = [...this._body.querySelectorAll('.js-dropdown__item')];
    return itemsTargets.map((item) => new this._Item(item));
  }

  _isConvenience = () => this._body.classList.contains('dropdown_modifier_convenience');

  _addListeners = () => {
    this._field.addEventListener('click', this._handleFieldClick);
    this._list.addEventListener('cleanButtonClick', this._handleCleanButtonClick);
    this._list.addEventListener('applyButtonClick', this._handleApplyButtonClick);
  }

  _handleFieldClick = () => {
    const isListVisible = this._body.classList.contains('dropdown_active');
    if (!isListVisible) {
      this._body.classList.add('dropdown_active');
      window.addEventListener('click', this._handleOutsideClick);
    } else this._apply();
  };

  _handleOutsideClick = (event) => {
    if (!event.target.closest('.dropdown')) this._apply();
  };

  _handleCleanButtonClick = (event) => {
    this._items.map((item) => item.clean());
    this._apply();
    event.stopPropagation();
  }

  _handleApplyButtonClick = () => this._apply();

  _apply = () => {
    this._field.value = this._getValue();
    this._body.classList.remove('dropdown_active');
    window.removeEventListener('click', this._handleOutsideClick);
  }

  _getConvenienceValue = () => {
    const values = this._items.map((item) => item.getItemToString());
    return `${values.join(', ').slice(0, 20).toLowerCase()}...`;
  };

  _getGuestsValue = () => {
    let babies;
    const guests = this._items.reduce((sum, current) => {
      const isBabes = current.getTitle() === '????????????????';

      if (isBabes) {
        babies = current.getQuantity();
        return sum + 0;
      } return sum + current.getQuantity();
    }, 0);

    const guestLabel = getDecline(guests, ['??????????', '??????????', '????????????']);
    const babiesLabel = getDecline(babies, ['????????????????', '????????????????', '??????????????????']);

    if (!guests && !babies) return '?????????????? ????????????';
    if (!guests) return '???????????? ?????????????????????? ???????????? ?????? ??????????????????';
    return (babies === 0) ? `${guests} ${guestLabel}` : `${guests} ${guestLabel}, ${babies} ${babiesLabel}`;
  }

  _Item = function (target) {
    this._body = target;
    this._title = this._body.querySelector('.js-dropdown__item-title');
    this._quantity = this._body.querySelector('.js-dropdown__item-quantity');
    this._minusButton = this._body.querySelector('.js-dropdown__item-button_minus');
    this._plusButton = this._body.querySelector('.js-dropdown__item-button_plus');

    this.getQuantity = () => Number(this._quantity.innerText);

    this.getTitle = () => this._title.innerText.toLowerCase();

    this.getItemToString = () => `${this._quantity.innerText} ${this._title.innerText}`;

    this.clean = () => {
      this._quantity.innerText = '0';
      this._minusButton.classList.add('dropdown__item-button_disabled');
    };

    this._handleMinusButtonClick = () => {
      let value = Number(this._quantity.innerText);
      if (value === 0) return;
      value -= 1;
      this._quantity.innerText = value.toString();
      if (value === 0) this._minusButton.classList.add('dropdown__item-button_disabled');
    };

    this._handlePlusButtonClick = () => {
      const value = Number(this._quantity.innerText);
      if (value === 0) this._minusButton.classList.remove('dropdown__item-button_disabled');
      this._quantity.innerText = (value + 1).toString();
    };

    this._minusButton.addEventListener('click', this._handleMinusButtonClick);
    this._plusButton.addEventListener('click', this._handlePlusButtonClick);

    if (Number(this._quantity.innerText) === 0) this._minusButton.classList.add('dropdown__item-button_disabled');
  }

  _getTarget = (selector) => this._body.querySelector(selector);
}

export default Dropdown;
