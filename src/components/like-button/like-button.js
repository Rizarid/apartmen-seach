import './like-button.sass';

{
  const handleLikeButtonClick = function () {
    this.classList.toggle('like-button_liked');
    let text;

    if (this.classList.contains('like-button_liked')) {
      text = Number(this.querySelector('.like-button__quantity').innerText) + 1;
    } else {
      text = Number(this.querySelector('.like-button__quantity').innerText) - 1;
    }

    this.querySelector('.like-button__quantity').innerHTML = text.toString();
  };

  const likeButtons = document.querySelectorAll('div .js-like-button');
  if (likeButtons.length) {
    for (let i = 0; i < likeButtons.length; i += 1) {
      likeButtons[i].addEventListener('click', handleLikeButtonClick);
    }
  }
}
