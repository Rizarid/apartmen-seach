import * as $ from 'jquery';

import '../../components/button/button';
import '../../components/rate-button/rate-button';
import '../../styles/variables.sass';
import { RoomCard } from './room-card';
import './room-card-block.sass';

{
  const roomCardsSelection = $('.js-room-card-block');

  if (roomCardsSelection.length) {
    const roomCards = [];
    for (let i = 0; i < roomCardsSelection.length; i += 1) {
      roomCards.push(new RoomCard(roomCardsSelection[i]));
    }
  }
}
