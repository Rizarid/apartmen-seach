import { Filters } from '../../blocks/filters-block/filters-block';
import { RoomCard } from '../../blocks/room-card-block/room-card';

class SearchRoom {
  constructor() {
    this._body = this._getBody();
    this._filters = new Filters(this._getTarget('.js-filters'));
    this._createRoomCards();
  }

  _getBody = () => document.querySelector('.js-search-room');

  _getTarget = (selector) => this._body.querySelector(selector);

 _createRoomCards = () => {
   const roomCardsSelection = Array.prototype.slice.call(document.querySelectorAll('.js-room-card-block'));
   if (roomCardsSelection) {
     this._roomCards = roomCardsSelection.map((item) => new RoomCard(item));
   }
 }
}

export { SearchRoom };
