class ControllerDropdownItem {
  constructor(options = {}) {
    const { model, view } = options;
    this._model = model;
    this._view = view;
    this._addListeners();
  }

  clean = () => {
    this._model.setQuantity(0);
    this._view.setQuantity(this._model.getQuantity());
    this._view.deactivateMinusButton();
  }

  _addListeners = () => {
    this._view.getItem().addEventListener('minusButtonClick', this._handleMinusButtonClick);
    this._view.getItem().addEventListener('plusButtonClick', this._handlePlusButtonClick);
  }

  _handleMinusButtonClick = () => {
    if (this._model.getQuantity() === 0) return;
    this._model.reduce();
    this._view.setQuantity(this._model.getQuantity());
    if (this._model.getQuantity() === 0) this._view.deactivateMinusButton();
  }

  _handlePlusButtonClick = () => {
    if (this._model.getQuantity() === 0) this._view.activateMinusButton();
    this._model.increase();
    this._view.setQuantity(this._model.getQuantity());
  }
}

export { ControllerDropdownItem };
