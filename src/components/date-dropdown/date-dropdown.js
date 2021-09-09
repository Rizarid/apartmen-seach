import './date-dropdown.sass';
import { ModelDateDropdown } from './ModelDateDropdown';
import { ViewDateDropdown } from './ViewDateDropdown';
import { ControllerDateDropdown } from './ControllerDateDropdown';

class DateDropdown {
  constructor(options = {}) {
    const { target, initDates = [] } = options;
    this._initDates = initDates;
    this._view = new ViewDateDropdown(target);
    this._model = new ModelDateDropdown();
    this._controller = new ControllerDateDropdown(this._view, this._model, this._initDates);
  }

  getQuantityDays = () => this._model.getQuantityDays();

  getStartDate = () => this._model.getStartDate();

  getEndDate = () => this._model.getEndDate();
}

export { DateDropdown };
