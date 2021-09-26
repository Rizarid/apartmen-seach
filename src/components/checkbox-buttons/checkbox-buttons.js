import { Checkbox } from '../checkbox/checkbox';
import './checkbox-buttons.sass';

class CheckboxButtons {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._checkboxes = this._getCheckboxes();
    if (this._isExpandable()) this._addListener();
  }

  _getBody = (parent) => parent.querySelector('.js-checkbox-buttons');

  _getCheckboxes = () => {
    const checkboxesTargets = Array.from(this._body.querySelectorAll('.js-checkbox-buttons__item'));
    return checkboxesTargets.map((item) => new Checkbox(item));
  }

  _addListener = () => { this._body.addEventListener('click', this._handleCheckboxButtonsClick); };

  _handleCheckboxButtonsClick = () => {
    this._body.classList.toggle('checkbox-buttons_visible');
  };

  _isExpandable = () => this._body.classList.contains('checkbox-buttons_expandable');
}

export { CheckboxButtons };
