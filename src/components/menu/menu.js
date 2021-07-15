import * as $ from "jquery";

import "./menu.sass";

const menu = {
  burger: document.querySelector(".js-nav__burger"),
  navigation: document.querySelector(".js-nav__container"),
  darkening: document.querySelector(".js-nav__darkening"),

  $arrows: $(".js-nav__arrow"),
  $subLists: $(".js-nav__sub-list"),

  visibleItem: undefined,

  activateBurger() {
    menu.burger.classList.toggle("nav__burger_active");
    menu.navigation.classList.toggle("nav__container_active");
    menu.darkening.classList.toggle("nav__darkening_active");
  },
  
  showSubMenu() {
    menu.$subLists.removeClass("nav__sub-list_visible");
    if(menu.visibleItem != this){
      $(this).parent().next().toggleClass("nav__sub-list_visible");
      menu.visibleItem = this
    } else {
      menu.visibleItem = undefined
    }
  }

}
  if(menu.burger){
    menu.burger.addEventListener("click", menu.activateBurger);
  }

  if(menu.$arrows) {
    menu.$arrows.on("click", menu.showSubMenu);
  }

  