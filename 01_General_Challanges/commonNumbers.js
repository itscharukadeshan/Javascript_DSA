/** @format */
const commonNumbers = (array_01, array_02) => {
  const commonNumArray = [];

  for (let i = 0; i < array_01.length; i++) {
    if (
      array_02.includes(array_01[i]) &&
      !commonNumArray.includes(array_01[i])
    ) {
      commonNumArray.push(array_01[i]);
    }
  }
  const result = commonNumArray;

  return result;
};

console.log(commonNumbers([1, 3, 5, 7, 2], [1, 3, 5, 9, 0]));
