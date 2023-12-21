/** @format */

const quadraticTime = (array) => {
  let sum = 0;
  let sum_02 = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    for (let j = 0; j < array.length; j++) {
      sum += array[j];
    }
  }

  return sum + sum_02;
};
