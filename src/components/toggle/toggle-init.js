/* eslint-disable no-unused-vars */

import { Toggle } from './toggle';

{
  const toggleTargets = [...document.querySelectorAll('.js-toggle')];
  if (toggleTargets) {
    const togglesCollection = toggleTargets.map((item) => new Toggle(item));
  }
}
