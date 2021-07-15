import * as $ from "jquery";

import "../../components/button/button.js";
import "../../components/rate-button/rate-button.js";
import "../../styles/variables.sass";
import { RoomCard } from "./room-card";
import "./room-card-block.sass";

{
  const roomCardsSelection = $(".js-room-card-block");

  if(roomCardsSelection.length){
    const roomCards = [];
    for (let i = 0; i < roomCardsSelection.length; i++){
      roomCards.push(new RoomCard(roomCardsSelection[i]));
    }
  }
}