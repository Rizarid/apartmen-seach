/* eslint-disable no-unused-vars */

import { Filters } from './filters-block';

{
  const filtersTarget = document.querySelector('.js-filters');
  if (filtersTarget) {
    const filters = new Filters(filtersTarget);
  }
}