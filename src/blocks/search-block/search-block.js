import '../../components/button/button';
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import '../../components/dropdown/dropdown';
import { DropdownClass } from '../../components/dropdown/DropdownClass';
import { ListGuests } from '../../components/dropdown/__list/ListGuests';
import './search-block.sass';

class SearchForm {
  constructor(options = {}) {
    const { dateDropdownSelector = 'date-selection', dropdownSelector = 'guests-quantity' } = options;
    this._dateDropdown = new DateDropdown({ parentSelector: dateDropdownSelector });

    this._dropdown = new DropdownClass({
      parentSelector: dropdownSelector,
      items: { взрослые: 0, дети: 0, младенцы: 0 },
      getListClass: (items) => new ListGuests(items),
    });
  }
}

export { SearchForm };
