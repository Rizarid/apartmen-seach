import * as $ from "jquery";

import "./checkbox.sass";

{
  const checkboxs = document.querySelectorAll(".js-checkbox__checkbox");

  if (checkboxs.length){
    for (let i=0; i <= checkboxs.length-1; i++){
      checkboxs[i].addEventListener("click",checkboxChecked); 
      if(checkboxs[i].checked) $(checkboxs[i]).parent().toggleClass("checkbox_checked");
    }
  }
  
  function checkboxChecked(){
    $(this).parent().toggleClass("checkbox_checked");
  }
}