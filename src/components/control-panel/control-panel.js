import '../../scripts/create-element';
import './control-panel.sass';

class ControlPanel {
  constructor(target) {
    this._body = target;
    this._createEvents();
    this._getButtons();
    this._addListeners();
  }

  _createEvents = () => {
    this._cleanEvent = new Event('cleanButtonClick', { bubbles: true });
    this._applyEvent = new Event('applyButtonClick', { bubbles: true });
  }

  _handleCleanButtonClick = () => this._cleanButton.dispatchEvent(this._cleanEvent);

  _handleApplyButtonClick = () => this._applyButton.dispatchEvent(this._applyEvent);

  _getButtons = () => {
    this._applyButton = this._body.querySelector('.control-panel__apply-button');
    this._cleanButton = this._body.querySelector('.control-panel__clean-button');
  }

  _addListeners = () => {
    this._cleanButton.addEventListener('click', this._handleCleanButtonClick);
    this._applyButton.addEventListener('click', this._handleApplyButtonClick);
  }
}

export { ControlPanel };
