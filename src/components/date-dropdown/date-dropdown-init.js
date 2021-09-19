/* eslint-disable no-unused-vars */

import { DateDropdown } from './date-dropdown';

{
  const dateDropdownTargets = [...document.querySelectorAll('.js-date-dropdown')];
  if (dateDropdownTargets) {
    const dateDropdownCollection = dateDropdownTargets.map((item) => new DateDropdown(item));
  }
}
