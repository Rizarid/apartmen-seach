import { Review } from '../review/review';
import './reviews.sass';

class Reviews {
  constructor(target) {
    this._body = target;
    this._items = this._getItems();
  }

  _getItems = () => {
    const items = Array.prototype.slice.call(this._body.querySelectorAll('.js-review'));
    return items.map((item) => new Review(item));
  }
}

export { Reviews };
