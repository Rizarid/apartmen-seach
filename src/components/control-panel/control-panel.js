import '../../scripts/create-element.js';
import './control-panel.sass';

class ControlPanel {
  constructor() {
    this._createEvents();
    this._createCleanButton();
    this._createApplyButton();
    this._addListeners();

    this._controlPanel = createElement('div', 'control-panel');
    this._controlPanel.appendChild(this._cleanButton);
    this._controlPanel.appendChild(this._applyButton);
  }

  getPanel = () => this._controlPanel;

  _createEvents = () => {
    this._cleanEvent = new Event('cleanButtonClick', { bubbles: true });
    this._applyEvent = new Event('applyButtonClick', { bubbles: true });
  }

  _handleCleanButtonClick = () => this._cleanButton.dispatchEvent(this._cleanEvent);

  _handleApplyButtonClick = () => this._applyButton.dispatchEvent(this._applyEvent);

  _createCleanButton = () => {
    this._cleanText = createElement('p', 'button__text');
    this._cleanText.innerHTML = 'очистить';

    this._cleanButton = createElement('div', 'button button_minimal control-panel__clean-button');
    this._cleanButton.appendChild(this._cleanText);
  }

  _createApplyButton = () => {
    this._applyText = createElement('p', 'button__text');
    this._applyText.innerHTML = 'применить';

    this._applyButton = createElement('div', 'button button_minimal control-panel__apply-button');
    this._applyButton.appendChild(this._applyText);
  }

  _addListeners = () => {
    this._cleanButton.addEventListener('click', this._handleCleanButtonClick);
    this._applyButton.addEventListener('click', this._handleApplyButtonClick);
  }
}

export { ControlPanel };
