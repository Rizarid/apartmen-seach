import './checkbox-buttons.sass';

class CheckboxButtons {
  constructor(target) {
    this._body = target;
    if (this._isExpandable()) this._addListener();
  }

  _addListener = () => { this._body.addEventListener('click', this._handleCheckboxButtonsClick); };

  _handleCheckboxButtonsClick = () => {
    this._body.classList.toggle('checkbox-buttons_visible');
  };

  _isExpandable = () => this._body.classList.contains('checkbox-buttons_expandable');
}

export { CheckboxButtons };
