import { Filters } from '../blocks/filters-block/filters-block';
import { RoomCard } from '../blocks/room-card-block/room-card';

class SearchRoom {
  constructor() {
    this._filters = new Filters();
    this._createRoomCards();
  }

 _createRoomCards = () => {
   const roomCardsSelection = Array.prototype.slice.call(document.querySelectorAll('.js-room-card-block'));
   if (roomCardsSelection) {
     this._roomCards = roomCardsSelection.map((item) => new RoomCard(item));
   }
 }

}

export { SearchRoom };
