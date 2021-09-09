import './filter-date-dropdown.sass';
import { ViewFilterDateDropdown } from './ViewFilterDateDropdown';
import { ControllerFilterDateDropdown } from './ControllerFilterDateDropdown';

class FilterDateDropdown {
  constructor(options = {}) {
    const { target, initDates = [] } = options;
    this._body = target;
    this._initDates = initDates;
    this._view = new ViewFilterDateDropdown(target);
    this._controller = new ControllerFilterDateDropdown(this._view, this._model, this._initDates);
  }

  getStartDate = () => this._view.getStartDate();

  getEndDate = () => this._view.getEndDate();

  _init = (options) => {
    const { target, initDates = [] } = options;
    this._initDates = initDates;
  }
}

export { FilterDateDropdown };
