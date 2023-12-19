/** @format */

// * Constant Time [ O (1) ]

// ? Constant time is very hard to achieve in complex algorithm

// Example 01 | Smaller Input

const constantTime = (arr, index) => {
  return arr[index];
};

console.time("Access the fifth element ");

console.log(constantTime([1, 2, 3, 4, 5, 6], 5));

console.timeEnd("Access the fifth element ");

// Example 02 | Lager Input

const BigArray = Array.from({ length: 1000 }, (_, index) => index + 1);

const constantTimeWithBigInput = (arr, index) => {
  return arr[index];
};

console.time("Access the fifth element ");

console.log(constantTimeWithBigInput(BigArray, 5));

console.timeEnd("Access the fifth element ");
