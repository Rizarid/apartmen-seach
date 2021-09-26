import './toggle.sass';

class Toggle {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._addListener();
  }

  _getBody = (parent) => parent.querySelector('.js-toggle');

  _addListener = () => this._body.addEventListener('click', this._handleToggleClick);

  _handleToggleClick = () => this._body.classList.toggle('toggle_active');
}

export { Toggle };
