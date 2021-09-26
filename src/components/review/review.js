import { LikeButton } from '../like-button/like-button';
import './review.sass';

class Review {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._likeButton = new LikeButton(this._getTarget('.js-review__like-button-container'));
  }

  _getBody = (parent) => parent.querySelector('.js-review');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);
}

export { Review };
