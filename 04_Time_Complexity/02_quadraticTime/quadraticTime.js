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

// * With smaller input

const firstArray = [1, 2, 3, 4, 5, 6, 7];

console.time("Access the fifth element | With smaller input ");

console.log(quadraticTime(firstArray));

console.timeEnd("Access the fifth element | With smaller input ");

// * With lager input

const secondArray = Array.from({ length: 100000000 }, (_, index) => index + 1);

console.time("Access the fifth element | With lager input ");

console.log(quadraticTime(secondArray));

console.timeEnd("Access the fifth element | With lager input ");
