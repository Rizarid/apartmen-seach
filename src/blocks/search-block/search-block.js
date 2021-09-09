import '../../components/button/button';
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import { DropdownClass } from '../../components/dropdown/DropdownClass';
import { ListGuests } from '../../components/dropdown-list/ListGuests';
import './search-block.sass';

class SearchForm {
  constructor(options = {}) {
    const { target, dateDropdownSelector = 'date-selection', dropdownSelector = 'guests-quantity' } = options;

    this._body = target;
    this._dateDropdown = new DateDropdown({ target: this._getTarget(dateDropdownSelector) });

    this._dropdown = new DropdownClass({
      target: this._getTarget(dropdownSelector),
      getListClass: (items) => new ListGuests(items),
    });
  }

  _getTarget = (selector) => this._body.querySelector(`.js-${selector}`);

}

export { SearchForm };
