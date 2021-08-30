/* eslint-disable no-unused-vars */
import './fonts/fonts.css';
import './fonts/scss/_path.scss';
import './components/text-field/text-field';
import './components/masked-text-field/masked-text-field';
import './components/expandable-checkbox-list/expandable-checkbox-list';
import { DateDropdown } from './components/date-dropdown/date-dropdown';
import { FilterDateDropdown } from './components/filter-date-dropdown/filter-date-dropdown';
import './components/checkbox-buttons/checkbox-buttons';
import './components/subscription-field/subscription-field';
import './components/radio-button/radio-button';
import './components/like-button/like-button';
import './components/rich-checkbox-buttons/rich-checkbox-buttons';
import { Slider } from './components/slider/slider';
import './components/button/button';
import './components/bullet-list/bullet-list';
import './components/information-block/information-block';
import './components/review/review';
import './components/pagination/pagination';
import './components/toggle/toggle';
import './components/rate-button/rate-button';
import './components/dropdown/dropdown';
import { DropdownClass } from './components/dropdown/DropdownClass';
import { ListConvenience } from './components/dropdown/__list/ListConvenience';
import './styles/elements.sass';

{
  const guestsQuantity = new DropdownClass({ parentSelector: 'guests-quantity' });
  const dateDropdown = new DateDropdown({ parentSelector: 'date-selection' });

  const convenience = new DropdownClass({
    parentSelector: 'convenience',
    items: { спальни: 2, кровати: 2, 'ванные комнаты': 0 },
    getListClass: (items) => new ListConvenience(items),
  });

  const dateFilter = new FilterDateDropdown({
    parentSelector: 'date-filter',
    initDate: ['19.08.2021', '23.08.2021'],
  });

  const priceFilter = new Slider({
    parentSelector: 'price-filter',
    min: 0,
    max: 16000,
    initValues: ['5000', '10000'],
  });
}
