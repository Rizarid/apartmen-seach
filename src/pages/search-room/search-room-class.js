import { Filters } from '../../blocks/filters-block/filters-block';
import { RoomCard } from '../../blocks/room-card-block/room-card-block';
import '../../components/pagination/pagination';

class SearchRoom {
  constructor() {
    this._body = this._getBody();
    this._filters = new Filters(this._getTarget('.js-search-room__container'));
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
