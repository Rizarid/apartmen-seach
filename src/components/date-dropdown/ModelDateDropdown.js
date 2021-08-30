class ModelDateDropdown {
  constructor() {
    this._startDate = undefined;
    this._endDate = undefined;
    this._quantityDays = 0;
    this._millisecondsInDay = 86400000;
  }

  getStartDate = () => this._startDate;

  getEndDate = () => this._endDate;

  getQuantityDays = () => this._quantityDays;

  setStartDate = (value) => { this._startDate = value; };

  setEndDate = (value) => {
    this._endDate = value;
    this._calculateQuantityDays();
  }

  _isDates = () => this._startDate && this._endDate;

  _calculateQuantityDays = () => {
    this._quantityDays = this._isDates()
      ? (this._endDate - this._startDate) / this._millisecondsInDay
      : 0;
  }
}

export { ModelDateDropdown };
