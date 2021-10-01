import { FiltersForm } from '../../blocks/filters-form/filters-form';
import { RoomCard } from '../../blocks/room-card/room-card';
import { Header } from '../../blocks/header/header';
import '../../components/pagination/pagination';
import './search-room.sass';

class SearchRoom {
  constructor() {
    this._body = this._getBody();
    this._header = new Header(this._getTarget('.js-search-room__header'));
    this._filtersForm = new FiltersForm(this._getTarget('.js-search-room__container'));
    this._roomCards = this._getRoomCards();
  }

  _getBody = () => document.querySelector('.js-search-room');

  _getTarget = (targetSelector) => this._body.querySelector(targetSelector);

  _getRoomCards = () => {
    const roomCardsTargets = Array.from(this._body.querySelectorAll('.js-search-room__results-item'));
    return roomCardsTargets.map((item) => new RoomCard(item));
  };
}

export { SearchRoom };
