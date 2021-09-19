/* eslint-disable no-unused-vars */

import { Header } from './header';

{
  const headerTarget = document.querySelector('.js-header');
  if (headerTarget) {
    const header = new Header(headerTarget);
  }
}
