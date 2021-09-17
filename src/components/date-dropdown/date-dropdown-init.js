/* eslint-disable no-unused-vars */

import { DateDropdown } from './date-dropdown';

{
  const dateDropdownTargets = [...document.querySelectorAll('.js-date-dropdown')];
  let dateDropdownCollection = [];
  if (dateDropdownTargets) {
    dateDropdownCollection = dateDropdownTargets.map((item) => new DateDropdown(item));
  }
}