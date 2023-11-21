/** @format */

// * First we need to get array with big range of numbers

let count = 10000;
let NumberArray = [];

for (let i = 1; i <= count; i++) {
  NumberArray.push(i);
}

/*

console.log(
  `Generated non repeating array with 1 - 1000 numbers. | NumberArray.length = ${NumberArray.length} |`
);

*/
let missing = Math.floor(Math.random() * count) + 1;

let index = NumberArray.indexOf(missing);
if (index > -1) {
  NumberArray.splice(index, 1);
}

/*

console.log(
  `Remove one random number updated. | NumberArray.length = ${NumberArray.length} |`
);

*/

const findMissingNumber = (array) => {
  if (array.length === 0) return 1;

  const n = array.length + 1;

  const expectedSum = (n * (n + 1)) / 2;

  /*

  console.log(`Expected sum = ${expectedSum}`);

  */

  let currentSum = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
  }
  /*

  console.log(`Current Sum = ${currentSum}`);

  */

  const result = expectedSum - currentSum;

  /*

  console.log(
    `Result = expectedSum(${expectedSum}) - currentSum(${currentSum})`
  );

  */

  return result;
};

console.log(findMissingNumber(NumberArray));
