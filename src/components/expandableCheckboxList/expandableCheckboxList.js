import * as $ from 'jquery'
import './__item/expandableCheckboxList__item.js'
import './expandableCheckboxList.sass'

{
  const expandableCheckboxList = $(".expandableCheckboxList__titleConteiner")
    
  if(expandableCheckboxList.length){
    expandableCheckboxList.click(showExpandableCheckboxList)
  }

  function showExpandableCheckboxList(){
    $(this).toggleClass("visible")
  }
}