const getDecline = function (number, dictionary) {
  const numberInStr = number.toString();
  const { length } = numberInStr;
  const isNominative = numberInStr[length - 1] === '1' & numberInStr[length - 2] != '1';

  const isGenitive = (((numberInStr[length - 1] === '2') | (numberInStr[length - 1] === '3') | (
    numberInStr[length - 1] === '4')) & numberInStr[length - 2] != '1'
  );

  const wordIndex = isNominative ? 0 : isGenitive ? 1 : 2;
  return dictionary[wordIndex];
};

export { getDecline };
