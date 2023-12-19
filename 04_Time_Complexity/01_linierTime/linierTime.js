/** @format */

const linierTime = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

// * With smaller input

const firstArray = [1, 2, 3, 4, 5, 6, 7];

console.time("Access the fifth element | With smaller input ");

console.log(linierTime(firstArray));

console.timeEnd("Access the fifth element | With smaller input ");

// * With lager input

const secondArray = Array.from({ length: 100000000 }, (_, index) => index + 1);

console.time("Access the fifth element | With lager input ");

console.log(linierTime(secondArray));

console.timeEnd("Access the fifth element | With lager input ");
