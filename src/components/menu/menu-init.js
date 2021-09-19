/* eslint-disable no-unused-vars */

import { Menu } from './menu';

{
  const menuTarget = document.querySelector('.js-nav');
  if (menuTarget) {
    const menu = new Menu(menuTarget);
  }
}
