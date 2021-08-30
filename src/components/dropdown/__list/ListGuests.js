import { getDecline } from '../../../scripts/getDecline';
import { ControlPanel } from '../../control-panel/control-panel';
import { List } from './dropdown__list';

class ListGuests extends List {
  constructor(options) {
    super(options);
    this._controlPanel = new ControlPanel();
    this._parent.appendChild(this._controlPanel.getPanel());
  }

  getListValue = () => {
    let babies;
    const guests = this._list.reduce((sum, current) => {
      const isBabes = current.getTitle() === 'младенцы';

      if (isBabes) {
        babies = current.getQuantity();
        return sum + 0;
      } return sum + current.getQuantity();
    }, 0);

    const guestLabel = getDecline(guests, ['гость', 'гостя', 'гостей']);
    const babiesLabel = getDecline(babies, ['младенец', 'младенца', 'младенцев']);

    if (!guests && !babies) return 'Сколько гостей';
    if (!guests) return 'Нельзя бронировать только для младенцев';
    return (babies === 0) ? `${guests} ${guestLabel}` : `${guests} ${guestLabel}, ${babies} ${babiesLabel}`;
  }
}

export { ListGuests };
