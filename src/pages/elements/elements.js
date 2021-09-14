/* eslint-disable no-unused-vars */
import '../../fonts/fonts.css';
import '../../fonts/scss/_path.scss';
import '../../components/text-field/text-field';
import '../../components/masked-text-field/masked-text-field';
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import { FilterDateDropdown } from '../../components/filter-date-dropdown/filter-date-dropdown';
import { CheckboxButtons } from '../../components/checkbox-buttons/checkbox-buttons';
import '../../components/subscription-field/subscription-field';
import { RadioButtons } from '../../components/radio-buttons/radio-buttons';
import { LikeButton } from '../../components/like-button/like-button';
import { Slider } from '../../components/slider/slider';
import '../../components/button/button';
import '../../components/bullet-list/bullet-list';
import '../../components/information-block/information-block';
import '../../components/review/review';
import '../../components/pagination/pagination';
import { Toggle } from '../../components/toggle/toggle';
import '../../components/rate-button/rate-button';
import { DropdownClass } from '../../components/dropdown/DropdownClass';
import { ListConvenience } from '../../components/dropdown-list/ListConvenience';
import './elements.sass';

{
  const _body = document.querySelector('.js-elements');
  const getTarget = (selector) => _body.querySelector(selector);

  const guestsQuantity = new DropdownClass({ target: getTarget('.js-guests-quantity') });
  const dateDropdown = new DateDropdown({ target: getTarget('.js-date-selection') });

  const convenience = new DropdownClass({
    target: getTarget('.js-convenience'),
    getListClass: (items) => new ListConvenience(items),
  });

  const dateFilter = new FilterDateDropdown({
    target: getTarget('.js-date-filter'),
    initDate: ['19.08.2021', '23.08.2021'],
  });

  const priceFilter = new Slider({
    target: getTarget('.js-price-filter'),
    min: 0,
    max: 16000,
    initValues: ['5000', '10000'],
  });

  const checkboxButtons = new CheckboxButtons(getTarget('.elements__checkbox-buttons-container .js-checkbox-buttons'));

  const richCheckboxButtons = new CheckboxButtons(getTarget('.elements__rich-checkbox-container .js-checkbox-buttons'));

  const expandCheckboxList = new CheckboxButtons(getTarget('.elements__expandable-checkbox-container .js-checkbox-buttons'));

  const togglesTargets = Array.prototype.slice.call(_body.querySelectorAll('.elements__toggle-container .js-toggle'));
  const toggles = togglesTargets.map((item) => new Toggle(item));

  const likeButtonsTargets = Array.prototype.slice.call(_body.querySelectorAll('.elements__like-button-container .js-like-button'));
  const likeButtons = likeButtonsTargets.map((item) => new LikeButton(item));

  const radioButtons = new RadioButtons(getTarget('.elements__radio-buttons-container .js-radio-buttons'));
}
