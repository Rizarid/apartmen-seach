/* eslint-disable no-unused-vars */
import '../../components/button/button';
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import '../../components/dropdown/dropdown';
import { DropdownClass } from '../../components/dropdown/DropdownClass';
import { ListGuests } from '../../components/dropdown/__list/ListGuests';
import './search-block.sass';

{
  let dateDropdown = new DateDropdown({ parentSelector: 'date-selection' });
  let dropdown = new DropdownClass({
    parentSelector: 'guests-quantity',
    items: { взрослые: 0, дети: 0, младенцы: 0 },
    getListClass: (items) => new ListGuests(items),
  })
 
}
