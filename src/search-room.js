import './fonts/fonts.css';
import './fonts/scss/_path.scss';
import './styles/search-room.sass';
import './scripts/create-element';
import './blocks/header/header';
import './blocks/room-card-block/room-card-block';
import './blocks/footer/footer';
import { FilterDateDropdown } from './components/filter-date-dropdown/filter-date-dropdown';
import { Slider } from './components/slider/slider';
import './components/checkbox-buttons/checkbox-buttons';
import './components/rich-checkbox-buttons/rich-checkbox-buttons';
import './components/expandable-checkbox-list/expandable-checkbox-list';
import './components/pagination/pagination';
import './components/dropdown/dropdown';
import { DropdownClass } from './components/dropdown/DropdownClass';
import { ListConvenience } from './components/dropdown/__list/ListConvenience';

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
