!function(){"use strict";class t{constructor(t){this._body=this._getBody(t),this._getElements(),this._addListeners()}_getBody=t=>t.querySelector(".js-nav");_getElements=()=>{this._burger=this._body.querySelector(".js-nav__burger"),this._navigation=this._body.querySelector(".js-nav__container"),this._darkening=this._body.querySelector(".js-nav__darkening"),this._arrows=[...this._body.querySelectorAll(".js-nav__arrow")],this._subLists=[...this._body.querySelectorAll(".js-nav__sub-list")],this._visibleItem=void 0};_addListeners=()=>{this._burger.addEventListener("click",this._handleBurgerClick),this._arrows.map((t=>t.addEventListener("click",this._handleArrowClick)))};_handleBurgerClick=()=>{this._burger.classList.toggle("nav__burger_active"),this._navigation.classList.toggle("nav__container_active"),this._darkening.classList.toggle("nav__darkening_active")};_handleArrowClick=t=>{this._subLists.map((t=>t.classList.remove("nav__sub-list_visible"))),this._visibleItem!==t.target?(t.target.parentNode.nextElementSibling.classList.toggle("nav__sub-list_visible"),this._visibleItem=t.target):this._visibleItem=void 0}}class e{constructor(t){this._body=this._getBody(t),this._isHidden=!1,this._getElements(),this._init(),this._body.classList.contains("header_with-filter-button")&&(this._getFilterButton(),this._createEvent(),this._addListener())}_getBody=t=>t.querySelector(".js-header");_getTarget=t=>this._body.querySelector(t);_getElements=()=>{this._buttons=this._getTarget(".js-header__authorization"),this._content=this._getTarget(".js-header__content"),this._navContainer=this._getTarget(".js-nav__container"),this._navList=this._getTarget(".js-nav__list"),this._menu=new t(this._getTarget(".js-header__navigation"))};_hiddenButtons=()=>{window.innerWidth<580&&!this._isHidden&&(this._navContainer.insertBefore(this._buttons,this._navList),this._isHidden=!0),window.innerWidth>=580&&this._isHidden&&(this._content.appendChild(this._buttons),this._isHidden=!1)};_init=()=>{window.addEventListener("resize",this._hiddenButtons),this._hiddenButtons(),this._buttons&&this._buttons.classList.add("header__authorization_activated")};_getFilterButton=()=>{this._filterButton=this._body.querySelector(".js-header__filters-button")};_createEvent=()=>{this._onFilterButtonClick=new CustomEvent("filterButtonClick")};_addListener=()=>{this._filterButton.addEventListener("click",this._handleFilterButtonClick)};_handleFilterButtonClick=()=>document.dispatchEvent(this._onFilterButtonClick)}Array.from(document.querySelectorAll(".js-headers__header-container")).map((t=>new e(t)))}();