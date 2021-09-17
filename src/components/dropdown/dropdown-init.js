/* eslint-disable no-unused-vars */

import { Dropdown } from './dropdown';

{
  const dropdownTargets = [...document.querySelectorAll('.js-dropdown')];
  let dropdownCollection = [];
  if (dropdownTargets) dropdownCollection = dropdownTargets.map((item) => new Dropdown(item));
}