import { LikeButton } from '../like-button/like-button';
import './review.sass';

class Review {
  constructor(target) {
    this._body = target;
    this._likeButton = this._getLikeButton();
  }

  _getLikeButton = () => {
    const likeButtonTarget = this._body.querySelector('.js-like-button');
    return new LikeButton(likeButtonTarget);
  }
}

export { Review };
