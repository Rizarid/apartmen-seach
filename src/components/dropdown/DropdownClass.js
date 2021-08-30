import * as $ from 'jquery';

import { ListConvenience, ListGuests } from './__list/dropdown__list.js';

class DropdownClass {
  constructor(options = {}) {
    this._init(options);
    this._getParent(this._parentSelector);
    this._getField();

    const list = $(this._parent).find('.dropdown__list')[0];
    this._list = this._getListClass({ list, items: this._items });

    this._addListeners();
    this._apply();
  }

  _init = (options = {}) => {
    const {
      parentSelector = 'dropdown',
      items = { взрослые: 0, дети: 0, младенцы: 0 },
      getListClass = (items) => new ListGuests(items),
    } = options;

    this._parentSelector = parentSelector;
    this._items = items;
    this._getListClass = getListClass;
  }

  _getParent = () => {
    this._parent = document.querySelector(`.js-${this._parentSelector}`);
  }

  _getField = () => this._field = $(this._parent).find('.dropdown__field')[0];

  _addListeners = () => {
    this._field.addEventListener('click', this._handleFieldClick);
    this._parent.addEventListener('mouseleave', this._handleDropdownMouseleave);
    this._list.getList().addEventListener('cleanButtonClick', this._handleCleanButtonClick);
    this._list.getList().addEventListener('applyButtonClick', this._handleApplyButtonClick);
  }

  _handleFieldClick = () => {
    const list = this._list.getList();
    const isListVisible = list.classList.contains('dropdown__list_visible');
    (!isListVisible) ? list.classList.add('dropdown__list_visible') : this._apply();
  }

  _handleDropdownMouseleave = () => this._apply();

  _handleCleanButtonClick = () => {
    this._list.clean();
    this._apply();
  }

  _handleApplyButtonClick = () => this._apply();

  _apply = () => {
    this._field.value = this._list.getListValue();
    this._list.getList().classList.remove('dropdown__list_visible');
  }
}

export { DropdownClass };
