/* eslint-disable no-unused-vars */

import { LikeButton } from './like-button';

{
  const likeButtonTargets = [...document.querySelectorAll('.js-like-button')];
  if (likeButtonTargets) {
    const likeButtonCollection = likeButtonTargets.map((item) => new LikeButton(item));
  }
}
