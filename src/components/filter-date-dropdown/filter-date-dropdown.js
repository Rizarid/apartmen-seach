import './filter-date-dropdown.sass';
import { ViewFilterDateDropdown } from './ViewFilterDateDropdown';
import { ControllerFilterDateDropdown } from './ControllerFilterDateDropdown';

class FilterDateDropdown {
  constructor(options = {}) {
    this._init(options);
    this._view = new ViewFilterDateDropdown(this._parentSelector);
    this._controller = new ControllerFilterDateDropdown(this._view, this._model, this._initDates);
  }

  getStartDate = () => this._view.getStartDate();

  getEndDate = () => this._view.getEndDate();

  _init = (options) => {
    const { parentSelector = 'filter-date-dropdown', initDates = [] } = options;
    this._parentSelector = parentSelector;
    this._initDates = initDates;
  }
}

export { FilterDateDropdown };
