// eslint-disable-next-line no-unused-vars

import { ListConvenience } from '../dropdown-list/ListConvenience';
import { ListGuests } from '../dropdown-list/ListGuests';
import './dropdown.sass';

class DropdownClass {
  constructor(options = {}) {
    const { target, getListClass = (params) => new ListGuests(params) } = options;

    this._body = target;
    this._getField();
    this._list = getListClass(this._getListsTarget());

    this._addListeners();
    this._apply();
  }

  _getField = () => { this._field = this._body.querySelector('.js-dropdown__field'); };

  _getListsTarget = () => this._body.querySelector('.js-dropdown-list');

  _addListeners = () => {
    this._field.addEventListener('click', this._handleFieldClick);
    this._body.addEventListener('mouseleave', this._handleDropdownMouseleave);
    this._list.getList().addEventListener('cleanButtonClick', this._handleCleanButtonClick);
    this._list.getList().addEventListener('applyButtonClick', this._handleApplyButtonClick);
  }

  _handleFieldClick = () => {
    const list = this._list.getList();
    const isListVisible = list.classList.contains('dropdown-list_visible');
    if (!isListVisible) list.classList.add('dropdown-list_visible');
    else this._apply();
  }

  _handleDropdownMouseleave = () => this._apply();

  _handleCleanButtonClick = () => {
    this._list.clean();
    this._apply();
  }

  _handleApplyButtonClick = () => this._apply();

  _apply = () => {
    this._field.value = this._list.getListValue();
    this._list.getList().classList.remove('dropdown-list_visible');
  }
}

export { DropdownClass };
