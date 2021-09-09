import './toggle.sass';

class Toggle {
  constructor(target) {
    this._body = target;
    this._addListener();
  }

  _addListener = () => this._body.addEventListener('click', this._handleToggleClick);

  _handleToggleClick = () => this._body.classList.toggle('toggle_active')
}

export { Toggle };
