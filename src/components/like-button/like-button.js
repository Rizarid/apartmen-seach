import './like-button.sass';

class LikeButton {
  constructor(target) {
    this._body = target;
    this._quantityElement = this._getQuantity();
    this._isLiked = this._body.classList.contains('like-button_liked');
    this._quantity = Number(this._quantityElement.innerText);
    this._addListener();
  }

  _getQuantity = () => this._body.querySelector('.like-button__quantity');

  _addListener = () => { this._body.addEventListener('click', this._handleLikeButtonClick); };

  _handleLikeButtonClick = () => {
    this._quantity = (this._isLiked) ? this._quantity - 1 : this._quantity + 1;
    this._isLiked = !this._isLiked;
    this._quantityElement.innerText = this._quantity.toString();
    this._body.classList.toggle('like-button_liked');
  }
}

export { LikeButton };
