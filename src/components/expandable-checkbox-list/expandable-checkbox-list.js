import * as $ from "jquery";

import "./expandable-checkbox-list.sass";
import "./__item/expandable-checkbox-list__item.js";

{
  const expandableCheckboxList = $(".js-expandable-checkbox-list__conteiner-of-title")
    
  if(expandableCheckboxList.length){
    expandableCheckboxList.click(showExpandableCheckboxList)
  }

  function showExpandableCheckboxList(){
    $(this).toggleClass("expandable-checkbox-list__conteiner-of-title_visible")
  }
}