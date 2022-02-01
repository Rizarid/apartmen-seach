import './pagination.scss';

class Pagination {
  constructor(parent) {
    this._body = this._getBody(parent);
    this._prevButton = this._getTarget('.js-pagination__prev-button');
    this._nextButton = this._getTarget('.js-pagination__next-button');
    this._firstDots = this._getTarget('.js-pagination__dots_first');
    this._secondDots = this._getTarget('.js-pagination__dots_second');
    this._paginationText = this._getTarget('.js-pagination__text');
    this._pages = Array.from(this._getPages());
    this._lastIndex = this._pages.length - 1;

    this._pages[0].classList.add('pagination__page_active');
    [this._currentPage] = this._pages;
    [this._prevPage, this._nextPage] = this._pages;
    this._pages[1].classList.add('pagination__page_next');
    this._pages[2].classList.add('pagination__page_visible');
    this._secondDots.classList.add('pagination__dots_visible');

    this._addListeners();
  }

  _getBody = (parent) => parent.querySelector('.js-pagination');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getPages = () => this._body.querySelectorAll('.js-pagination__page');

  _getText = (newIndex) => (
    `${newIndex * 12 + 1} - ${(newIndex + 1) * 12} из 100+ вариантов аренды`
  );

  _setCurrentPage = (newIndex) => {
    this._currentPage.classList.remove('pagination__page_active');
    this._currentPage = this._pages[newIndex];
    this._currentPage.classList.add('pagination__page_active');
  }

  _setPrevPage = (newIndex, currentIndex) => {
    if (currentIndex === 0) this._pages[2].classList.remove('pagination__page_visible');

    this._prevPage.classList.remove('pagination__page_prev');

    if (newIndex === 0) {
      this._prevPage = this._pages[newIndex];
      this._pages[2].classList.add('pagination__page_visible');
      this._prevButton.classList.remove('pagination__prev-button_visible');
    } else {
      this._prevPage = this._pages[newIndex - 1];
      this._prevButton.classList.add('pagination__prev-button_visible');
    }

    this._prevPage.classList.add('pagination__page_prev');
  }

  _setNextPage = (newIndex, currentIndex) => {
    if (currentIndex === this._lastIndex) {
      this._pages[this._lastIndex - 2].classList.remove('pagination__page_visible');
    }

    this._nextPage.classList.remove('pagination__page_next');

    if (newIndex === this._lastIndex) {
      this._nextPage = this._pages[newIndex];
      this._pages[this._lastIndex - 2].classList.add('pagination__page_visible');
      this._nextButton.classList.remove('pagination__next-button_visible');
    } else {
      this._nextPage = this._pages[newIndex + 1];
      this._nextButton.classList.add('pagination__next-button_visible');
    }

    this._nextPage.classList.add('pagination__page_next');
  }

  _udateDots = (newIndex) => {
    if (newIndex > 2) this._firstDots.classList.add('pagination__dots_visible');
    else this._firstDots.classList.remove('pagination__dots_visible');

    if (newIndex < this._lastIndex - 2) this._secondDots.classList.add('pagination__dots_visible');
    else this._secondDots.classList.remove('pagination__dots_visible');
  }

  _switchPagination = (newIndex, currentIndex) => {
    this._setCurrentPage(newIndex);
    this._setPrevPage(newIndex, currentIndex);
    this._setNextPage(newIndex, currentIndex);
    this._udateDots(newIndex);
    this._paginationText.innerText = this._getText(newIndex);
  }

  _handlePageClick = (event) => {
    const newIndex = this._pages.indexOf(event.target);
    const currentIndex = this._pages.indexOf(this._currentPage);

    if (this._pages[newIndex] !== this._currentPage) {
      this._switchPagination(newIndex, currentIndex);
    }
  }

  _handlePrevBattonClick = () => {
    const currentIndex = this._pages.indexOf(this._currentPage);
    const newIndex = currentIndex - 1;

    this._switchPagination(newIndex, currentIndex);
  }

  _handleNextBattonClick = () => {
    const currentIndex = this._pages.indexOf(this._currentPage);
    const newIndex = currentIndex + 1;

    this._switchPagination(newIndex, currentIndex);
  }

  _addListeners = () => {
    this._pages.forEach((item) => item.addEventListener('click', this._handlePageClick));
    this._prevButton.addEventListener('click', this._handlePrevBattonClick);
    this._nextButton.addEventListener('click', this._handleNextBattonClick);
  }
}

export default Pagination;
