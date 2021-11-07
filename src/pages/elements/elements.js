import '../../components/text-field/text-field';
import '../../components/subscription-field/subscription-field';
import '../../components/button/button';
import '../../components/bullet-list/bullet-list';
import '../../components/information-block/information-block';
import '../../components/pagination/pagination';
import '../../components/rate-button/rate-button';
import Dropdown from '../../components/dropdown/dropdown';
import MaskedTextField from '../../components/masked-text-field/masked-text-field';
import DateDropdown from '../../components/date-dropdown/date-dropdown';
import CheckboxButtons from '../../components/checkbox-buttons/checkbox-buttons';
import '../../components/radio-buttons/radio-buttons';
import '../../components/toggle/toggle';
import LikeButton from '../../components/like-button/like-button';
import Slider from '../../components/slider/slider';
import Review from '../../components/review/review';
import './elements.scss';

class Elements {
  constructor() {
    this._body = this._getBody();

    this._guests = new Dropdown(this._getTarget('.js-elements__guests-container'));
    this._maskedField = new MaskedTextField(this._getTarget('.js-elements__masked-field-container'));
    this._dateDropdown = new DateDropdown(this._getTarget('.js-elements__date-dropdown-container'));
    this._dateFilter = new DateDropdown(this._getTarget('.js-date-filter-container'));
    this._convenience = new Dropdown(this._getTarget('.js-elements__convenience-container'));
    this._expandable = new CheckboxButtons(this._getTarget('.js-elements__expandable-checkbox-container'));
    this._checkboxButtons = new CheckboxButtons(this._getTarget('.js-elements__checkbox-buttons-container'));

    this._likeButtons = this._getLikeButtons();

    this._rich = new CheckboxButtons(this._getTarget('.js-elements__rich-checkbox-container'));
    this._slider = new Slider(this._getTarget('.js-elements__slider-container'));
    this._review = new Review(this._getTarget('.js-elements__review-container'));
  }

  _getBody = () => document.querySelector('.js-elements');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getLikeButtons = () => {
    const likeButtonsTargets = Array.from(document.querySelectorAll('.js-elements__likeButton'));
    return likeButtonsTargets.map((item) => new LikeButton(item));
  };
}

export default Elements;
