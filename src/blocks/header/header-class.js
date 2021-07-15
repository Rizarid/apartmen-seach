import * as $ from "jquery";

class Header {
  constructor(header){
  
    this.header = header;

    this.buttons = $(this.header).find(".js-header__authorization")[0];
    this.content = $(this.header).find(".js-header__content")[0];
    this.navContainer = $(this.header).find(".js-nav__container")[0];
    this.navList = $(this.header).find(".js-nav__list")[0];

    this.isHidden = false;

    this._init();
  }
  
  _hiddenButtons = () => {
    if (window.innerWidth < 530 & !this.isHidden){
      this.navContainer.insertBefore(this.buttons, this.navList);
      this.isHidden = true;
    }

    if (window.innerWidth >= 530 & this.isHidden){
      this.content.appendChild(this.buttons);
      this.isHidden = false;
    }
  }

  _init = () => {
    window.addEventListener("resize", this._hiddenButtons);
    this._hiddenButtons();
    this.buttons.classList.add("header__authorization_activated");
  }
}

export {Header}
