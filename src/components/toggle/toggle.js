import * as $ from 'jquery'
import './toggle.sass';
import './__checkbox/toggle__checkbox.sass';
import './__switch/toggle__switch.sass';
import './__circle/toggle__circle.sass';
import './__text/toggle__text.sass';
import './_active/toggle_active.sass';

let toggles = $(".toggle .toggle__switch");

if (toggles.length){
  toggles.click(toggleSwitching);
}

function toggleSwitching(){
  $(this).parent().find(".toggle .toggle__checkbox").trigger('click');
  $(this).parent().toggleClass("toggle_active");
}