class ModelDropdownItem {
  constructor(options = {}) {
    const { title, quantity } = options;
    this._title = title;
    this._quantity = quantity;
  }

  increase = () => { this._quantity += 1; };

  reduce = () => { this._quantity -= 1; };

  getQuantity = () => this._quantity;

  getTitle = () => this._title;

  getItemToString = () => `${this._quantity} ${this._title}`;

  setTitle = (value) => { this._title = value; };

  setQuantity = (value) => { this._quantity = value; };
}

export { ModelDropdownItem };
