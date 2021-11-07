import '../button/button';
import './control-panel.scss';

class ControlPanel {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._createEvents();
    this._getButtons();
    this._addListeners();
  }

  _getBody = (parent) => parent.querySelector('.js-control-panel');

  _createEvents = () => {
    this._cleanEvent = new Event('cleanButtonClick', { bubbles: true });
    this._applyEvent = new Event('applyButtonClick', { bubbles: true });
  }

  _handleCleanButtonClick = () => this._cleanButton.dispatchEvent(this._cleanEvent);

  _handleApplyButtonClick = () => this._applyButton.dispatchEvent(this._applyEvent);

  _getButtons = () => {
    this._applyButton = this._body.querySelector('.js-control-panel__apply-button');
    this._cleanButton = this._body.querySelector('.js-control-panel__clean-button');
  }

  _addListeners = () => {
    this._cleanButton.addEventListener('click', this._handleCleanButtonClick);
    this._applyButton.addEventListener('click', this._handleApplyButtonClick);
  }
}

export default ControlPanel;
