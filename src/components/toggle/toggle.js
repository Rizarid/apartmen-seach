import * as $ from 'jquery'
import './toggle.sass';
import './__checkbox/__checkbox.sass';
import './__switch/__switch.sass';
import './__circle/__circle.sass';
import './__text/__text.sass';
import './_active/_active.sass';

let toggles = $(".toggle .toggle__switch");

if (toggles.length){
  toggles.click(toggleSwitching);
}

function toggleSwitching(){
  $(this).parent().find(".toggle .toggle__checkbox").trigger('click');
  $(this).parent().toggleClass("toggle_active");
}