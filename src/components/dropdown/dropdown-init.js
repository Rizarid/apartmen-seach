/* eslint-disable no-unused-vars */

import { Dropdown } from './dropdown';

{
  const dropdownTargets = [...document.querySelectorAll('.js-dropdown')];
  if (dropdownTargets) {
    const dropdownCollection = dropdownTargets.map((item) => new Dropdown(item));
  }
}
