import './rate-button.scss';

class RateButton {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._starsContainer = this._getTarget('.js-rate-button__stars');
    this._reviewsQuantity = this._getTarget('.js-rate-button__reviews-quantity');
    this._stars = Array.from(this._getStars());
    this._evaluations = this._body.dataset.evaluations.slice(1, -1).split(',')
      .map((item) => Number(item));
    this._isVoted = false;
    this._updateRate();
    this._addListeners();
  }

  _getBody = (parent) => parent.querySelector('.js-rate-button');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getStars = () => this._body.querySelectorAll('.js-rate-button__star');

  _calcRate = () => {
    this._numberOfEvaluations = this._getNumberOfValutions();
    this._rate = this._getRate();
  };

  _getNumberOfValutions = () => this._evaluations.reduce((sum, current) => sum + current, 0);

  _getRate = () => {
    if (this._numberOfEvaluations > 0) {
      const totalScore = this._evaluations.map((item, index) => item * (index + 1))
        .reduce((sum, current) => sum + current, 0);
      return Math.round(totalScore / this._numberOfEvaluations);
    }
    return 0;
  }

  _updateRate = () => {
    this._calcRate();
    this._reviewsQuantity.innerText = this._numberOfEvaluations.toString();
    this._activateStars(this._rate);
  }

  _activateStars = (rate) => this._stars.forEach((item, index) => {
    if (index < rate) item.classList.add('rate-button__star_active');
    else item.classList.remove('rate-button__star_active');
  })

  _addListeners = () => {
    this._stars.forEach((item) => {
      item.addEventListener('mouseover', this._handleStarMouseover);
      item.addEventListener('mouseout', this._handleStarMouseout);
      item.addEventListener('click', this._handleStarClick);
    });
  }

  _handleStarMouseover = (event) => {
    if (!this._isVoted) this._activateStars(this._stars.indexOf(event.target) + 1);
  }

  _handleStarMouseout = () => {
    if (!this._isVoted) this._activateStars(this._rate);
  }

  _handleStarClick = (event) => {
    event.preventDefault();
    if (!this._isVoted) {
      this._evaluations[this._stars.indexOf(event.target)] += 1;
      this._isVoted = true;
      this._updateRate();
    }
  }
}

export default RateButton;
