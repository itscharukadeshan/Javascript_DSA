/** @format */

// * Using for loops

/*

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
*/

// * Using Set and for of loops

const commonNumbers = (array_01, array_02) => {
  const set_01 = new Set(array_01);
  const commonNumArray = [];

  for (let num of array_02) {
    if (set_01.has(num)) {
      commonNumArray.push(num);
    }
  }

  const result = commonNumArray;

  return result;
};
console.log(commonNumbers([1, 3, 5, 7, 2], [1, 3, 5, 9, 0]));
