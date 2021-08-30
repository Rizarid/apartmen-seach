import * as $ from 'jquery';

// eslint-disable-next-line no-unused-vars
import { ListConvenience } from './__list/ListConvenience';
import { ListGuests } from './__list/ListGuests';

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
      getListClass = (params) => new ListGuests(params),
    } = options;

    this._parentSelector = parentSelector;
    this._items = items;
    this._getListClass = getListClass;
  }

  _getParent = () => {
    this._parent = document.querySelector(`.js-${this._parentSelector}`);
  }

  _getField = () => { [this._field] = $(this._parent).find('.dropdown__field'); };

  _addListeners = () => {
    this._field.addEventListener('click', this._handleFieldClick);
    this._parent.addEventListener('mouseleave', this._handleDropdownMouseleave);
    this._list.getList().addEventListener('cleanButtonClick', this._handleCleanButtonClick);
    this._list.getList().addEventListener('applyButtonClick', this._handleApplyButtonClick);
  }

  _handleFieldClick = () => {
    const list = this._list.getList();
    const isListVisible = list.classList.contains('dropdown__list_visible');
    if (!isListVisible) list.classList.add('dropdown__list_visible');
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
    this._list.getList().classList.remove('dropdown__list_visible');
  }
}

export { DropdownClass };
