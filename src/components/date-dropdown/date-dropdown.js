import './date-dropdown.sass';
import { ModelDateDropdown } from './ModelDateDropdown';
import { ViewDateDropdown } from './ViewDateDropdown';
import { ControllerDateDropdown } from './ControllerDateDropdown';

class DateDropdown {
  constructor(options = {}) {
    this._init(options);

    this._view = new ViewDateDropdown(this._parentSelector);
    this._model = new ModelDateDropdown();
    this._controller = new ControllerDateDropdown(this._view, this._model, this._initDates);
  }

  getQuantityDays = () => this._model.getQuantityDays();

  getStartDate = () => this._model.getStartDate();

  getEndDate = () => this._model.getEndDate();

  _init = (options = {}) => {
    const { parentSelector = 'date-dropdown', initDates = [] } = options;
    this._parentSelector = parentSelector;
    this._initDates = initDates;
  }
}

export { DateDropdown };
