import './fonts/fonts.css';
import './fonts/scss/_path.scss';
import './styles/search-room.sass';
import './scripts/create-element.js';
import './blocks/header/header.js';
import './blocks/room-card-block/room-card-block.js';
import './blocks/footer/footer.js';
import { FilterDateDropdown } from './components/filter-date-dropdown/filter-date-dropdown.js';
import { Slider } from './components/slider/slider.js';
import './components/checkbox-buttons/checkbox-buttons.js';
import './components/rich-checkbox-buttons/rich-checkbox-buttons.js';
import './components/expandable-checkbox-list/expandable-checkbox-list.js';
import './components/pagination/pagination.js';
import './components/dropdown/dropdown.js';
import { DropdownClass } from './components/dropdown/DropdownClass';
import { ListConvenience } from './components/dropdown/__list/dropdown__list';

{
  const searchRoom = {};

  searchRoom.dateFilter = new FilterDateDropdown({
    parentSelector: 'date-filter', initDate: ['19.08.2021', '23.08.2021'],
  });

  searchRoom.guests = new DropdownClass({ parentSelector: 'guests-quantity' });

  searchRoom.convenience = new DropdownClass({
    parentSelector: 'convenience-filter',
    items: { спальни: 2, кровати: 2, 'ванные комнаты': 0 },
    getListClass: (items) => new ListConvenience(items),
  });

  searchRoom.priceFilter = new Slider({
    parentSelector: 'price-filter', min: 0, max: 16000, initValues: ['5000', '10000'],
  });

  searchRoom.filters = document.querySelector('.js-filters');
  searchRoom.navigation = document.querySelector('.js-header__navigation');
  searchRoom.filtersButton = createElement('div', 'filters-button');
  searchRoom.navigation.insertAdjacentElement('afterEnd', searchRoom.filtersButton);

  searchRoom.showFilters = () => {
    searchRoom.filters.classList.toggle('show');
  };

  searchRoom.filtersButton.addEventListener('click', searchRoom.showFilters);
}
