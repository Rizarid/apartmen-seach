import { createElement } from '../../utilities/utilities';
import '../../components/slider/slider-init';
import '../../components/checkbox-buttons/checkbox-buttons-init';
import '../../components/checkbox/checkbox-init';
import '../../components/pagination/pagination';
import '../../components/dropdown/dropdown-init';
import '../../components/date-dropdown/date-dropdown-init';
import './filters-block.sass';


class Filters {
  constructor(target) {
    this._body = target;
    this._navigation = this._getNavigationElement();
    this._createFiltersButton();
    this._appendFiltersButton();
    this._appendListeners();
  }

  _getNavigationElement = () => document.querySelector('.js-header__navigation');

  _createFiltersButton = () => { this._filtersButton = createElement('div', 'filters__filters-button'); };

  _appendFiltersButton = () => { this._navigation.insertAdjacentElement('afterEnd', this._filtersButton); }


  _handleFiltersButtonClick = () => {
    this._body.classList.toggle('filters_visible');
  };

  _appendListeners = () => {
    this._filtersButton.addEventListener('click', this._handleFiltersButtonClick);
  };
}

export { Filters };
