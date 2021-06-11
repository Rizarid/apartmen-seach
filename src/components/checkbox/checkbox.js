import './checkbox.sass'
import * as $ from 'jquery'

{
  const checkboxs = document.querySelectorAll(".checkbox__checkbox");

  if (checkboxs.length){
    for (let i=0; i <= checkboxs.length-1; i++){
      checkboxs[i].addEventListener("click",checkboxChecked); 
      if(checkboxs[i].checked) $(checkboxs[i]).parent().toggleClass("checked");
    }
  }
  
  function checkboxChecked(){
    $(this).parent().toggleClass("checked");
  }
}