import './dropdown.sass'
import './__item/dropdown__item.sass'
import './__title/dropdown__title.sass'
import './__quantityBlok/dropdown__quantityBlok.sass'
import './__button/dropdown__button.sass'
import './__itemValue/dropdown__itemValue.sass'
import './__field/dropdown__field.sass'
import './__list/dropdown__list.sass'
import './__controlPanel/dropdown__controlPanel.sass'
import '../../scripts/createElement.js'
import './DropdownClass.js'
import './_guests/dropdown__Guests.js'

function getAmenitiesDropdown(selector, elementName, initQuantity = [2, 2, 0]){
  return new Dropdown(selector, elementName, {"спальни": initQuantity[0], "кровати": initQuantity[1],
   "ванные комнаты": initQuantity[2]})
}

let dropdown = new Guests(".dropdown", "dropdown");