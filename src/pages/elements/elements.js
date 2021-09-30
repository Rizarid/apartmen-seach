/* eslint-disable no-unused-vars */
import '../../fonts/fonts.css';
import '../../components/text-field/text-field';
import '../../components/subscription-field/subscription-field';
import '../../components/button/button';
import '../../components/bullet-list/bullet-list';
import '../../components/information-block/information-block';
import '../../components/pagination/pagination';
import '../../components/rate-button/rate-button';
import { Dropdown } from '../../components/dropdown/dropdown';
import { MaskedTextField } from '../../components/masked-text-field/masked-text-field';
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import { CheckboxButtons } from '../../components/checkbox-buttons/checkbox-buttons';
import '../../components/radio-buttons/radio-buttons';
import '../../components/toggle/toggle';
import { LikeButton } from '../../components/like-button/like-button';
import { Slider } from '../../components/slider/slider';
import { Review } from '../../components/review/review';
import './elements.sass';

{
  const guests = new Dropdown(document.querySelector('.js-elements__guests-container'));
  const maskedField = new MaskedTextField(document.querySelector('.js-elements__masked-field-container'));
  const dateDropdown = new DateDropdown(document.querySelector('.js-elements__date-dropdown-container'));
  const dateFilter = new DateDropdown(document.querySelector('.js-date-filter-container')); 
  const convenience = new Dropdown(document.querySelector('.js-elements__convenience-container'));
  const expandable = new CheckboxButtons(document.querySelector('.js-elements__expandable-checkbox-container'));
  const checkboxButtons = new CheckboxButtons(document.querySelector('.js-elements__checkbox-buttons-container'));

  const likeButtonsTargets = Array.from(document.querySelectorAll('.js-elements__likeButton'));
  const likeButtons = likeButtonsTargets.map((item) => new LikeButton(item));

  const rich = new CheckboxButtons(document.querySelector('.js-elements__rich-checkbox-container'));
  const slider = new Slider(document.querySelector('.js-elements__slider-container'));
  const review = new Review(document.querySelector('.js-elements__review-container'));
}