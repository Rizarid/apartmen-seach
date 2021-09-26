import '../../components/button/button';
import { Dropdown } from '../../components/dropdown/dropdown';
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import './search-block.sass';

class SearchBlock {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._dateDropdown = new DateDropdown(this._getTarget('.js-search-block__date-container'));
    this._dropdown = new Dropdown(this._getTarget('.js-search-block__guests-quantity-container'));
  }

  _getBody = (parent) => parent.querySelector('.js-search-block');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export { SearchBlock };
