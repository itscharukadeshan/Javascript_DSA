/** @format */
// * Built in method

const findMaxWithBuiltIn = (array) => {
  const result = Math.max(...array);

  return result;
};

console.log(findMaxWithBuiltIn([1, 5, 3, 2, 7, 10, 5, 15]));

// * With For Loops

const findMaxWithForLoop = (array) => {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  const result = max;

  return result;
};

console.log(findMaxWithForLoop([1, 2, 5, 8, 9, 10, 12]));
