import '../checkbox/checkbox';
import './checkbox-buttons.sass';

class CheckboxButtons {
  constructor(parent) {
    this._body = this._getBody(parent);
    if (this._isExpandable()) this._addListener();
  }

  _getBody = (parent) => parent.querySelector('.js-checkbox-buttons');

  _addListener = () => { this._body.addEventListener('click', this._handleCheckboxButtonsClick); };

  _handleCheckboxButtonsClick = () => {
    this._body.classList.toggle('checkbox-buttons_visible');
  };

  _isExpandable = () => this._body.classList.contains('checkbox-buttons_expandable');
}

export { CheckboxButtons };
