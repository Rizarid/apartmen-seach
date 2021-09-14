const numberMargins = (number) => {
  const arr = String(number).split('');
  const len = Math.trunc(arr.length / 3);

  for (let i = 1; i <= len; i += 1) {
    arr.splice(arr.length - (i * 3 + i - 1), 0, ' ');
  }

  return arr.join('');
};

export { numberMargins };
