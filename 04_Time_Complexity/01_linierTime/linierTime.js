/** @format */

const linierTime = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const firstArray = [1, 2, 3, 4, 5, 6, 7];
const secondArray = Array.from({ length: 100000 }, (_, index) => index + 1);

// * With smaller input

console.time("Access the fifth element | With smaller input ");

console.log(linierTime(firstArray, 5));

console.timeEnd("Access the fifth element | With smaller input ");

// * With lager input

console.time("Access the fifth element | With lager input ");

console.log(linierTime(secondArray, 5));

console.timeEnd("Access the fifth element | With lager input ");
