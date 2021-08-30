import * as $ from 'jquery';

import './checkbox.sass';

{
  const checkboxes = Array.prototype.slice.call(document.querySelectorAll('.js-checkbox__checkbox'));

  if (checkboxes.length){
    checkboxes.map((item) => {
      item.addEventListener('click',checkboxChecked); 
      if(item.checked) $(item).parent().toggleClass('checkbox_checked');
    })
  }
  
  function checkboxChecked(){
    $(this).parent().toggleClass('checkbox_checked');
  }
}