/** @format */

const uniqNumbers = (array_1, array_2) => {
  const set_01 = new Set(array_1);
  const set_02 = new Set(array_2);

  const result = [];

  for (const number of set_01) {
    if (!set_02.has(number)) {
      result.push(number);
    }
  }

  for (const number of set_02) {
    if (!set_01.has(number)) {
      result.push(number);
    }
  }

  return result;
};

console.log(uniqNumbers([1, 2, 3, 4, 5, 6, 7], [1, 5, 6, 7, 8, 9, 10]));
