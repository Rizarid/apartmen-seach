/* global document */

const createElement = (elementType, className) => {
  const element = document.createElement(elementType);
  element.className = className;
  return element;
};

const getDecline = (number, dictionary) => {
  const numberInStr = number.toString();
  const { length } = numberInStr;
  const isNominative = numberInStr[length - 1] === '1' && numberInStr[length - 2] !== '1';

  const isGenitive = (((numberInStr[length - 1] === '2') || (numberInStr[length - 1] === '3') || (
    numberInStr[length - 1] === '4')) && numberInStr[length - 2] !== '1'
  );

  let wordIndex;

  if (isNominative) wordIndex = 0;
  else if (isGenitive) wordIndex = 1;
  else wordIndex = 2;

  return dictionary[wordIndex];
};

const numberMargins = (number) => {
  const arr = String(number).split('');
  const len = Math.trunc(arr.length / 3);

  for (let i = 1; i <= len; i += 1) {
    arr.splice(arr.length - (i * 3 + i - 1), 0, ' ');
  }

  return arr.join('');
};

export { createElement, getDecline, numberMargins };
