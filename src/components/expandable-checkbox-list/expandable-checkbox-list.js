import * as $ from 'jquery';

import './expandable-checkbox-list.sass';
import './__item/expandable-checkbox-list__item';

{
  const showExpandableCheckboxList = function () {
    $(this).toggleClass('expandable-checkbox-list__titles-container_visible');
  };
  const $expandableCheckboxList = $('section.js-expandable-checkbox-list .js-expandable-checkbox-list__titles-container');
  if ($expandableCheckboxList.length) $expandableCheckboxList.click(showExpandableCheckboxList);
}
