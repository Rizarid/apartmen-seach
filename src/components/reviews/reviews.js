import { Review } from '../review/review';
import './reviews.sass';

class Reviews {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._reviews = this._getReviews();
  }

  _getBody = (parent) => parent.querySelector('.js-reviews');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getReviews = () => {
    const reviewsTargets = Array.from(this._body.querySelectorAll('.js-reviews__review'));
    return reviewsTargets.map((item) => new Review(item));
  };
}

export { Reviews };
