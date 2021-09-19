/* eslint-disable no-unused-vars */

import * as $ from 'jquery';
import './ui-datepicker';
import { DatePicker } from './date-picker';

{
  $.datepicker.regional.ru = {
    closeText: 'Закрыть',
    prevText: 'arrow_back',
    nextText: 'arrow_forward',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
  };

  $.datepicker.setDefaults($.datepicker.regional.ru);

  const datePickerTargets = [...document.querySelectorAll('.js-date-picker')];
  if (datePickerTargets) {
    const datePickerCollection = datePickerTargets.map((item) => new DatePicker(item));
  }
}