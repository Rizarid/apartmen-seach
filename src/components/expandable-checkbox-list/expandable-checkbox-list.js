import * as $ from 'jquery';

import './expandable-checkbox-list.sass';
import './__item/expandable-checkbox-list__item';

{
  const showExpandableCheckboxList = function () {
    $(this).toggleClass('expandable-checkbox-list__container-of-title_visible');
  };
  const $expandableCheckboxList = $('.js-expandable-checkbox-list__container-of-title');
  if ($expandableCheckboxList.length) $expandableCheckboxList.click(showExpandableCheckboxList);
}
