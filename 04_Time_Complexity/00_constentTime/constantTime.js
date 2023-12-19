/** @format */

// * Constant Time [ O (1) ]

// ? Constant time is very hard to achieve in complex algorithm

const constantTime = (arr, index) => {
  return arr[index];
};

console.time("Access the fifth element ");

console.log(constantTime([1, 2, 3, 4, 5, 6], 5));

console.timeEnd("Access the fifth element ");
