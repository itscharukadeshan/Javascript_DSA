/** @format */

const maxSubArraySum = (array, k) => {
  console.time("maxSubArraySum running time");

  // ? Negative infinity is valid number that also include negative numbers

  let maxSum = -Infinity;

  //? basically its make sure any valid number can be maxSum even negative numbers

  for (let i = 0; i < array.length - k; i++) {
    let currentSum = 0;

    for (let j = i; j < i + k; j++) {
      currentSum += array[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }

  console.timeEnd("maxSubArraySum running time");

  return maxSum;
};

// * With smaller input array

console.log(maxSubArraySum([1, 3, 4, 2, 5, 1, 7, 4, 5, 7], 3));

//* With lager input array

const lagerArray = Array.from({ length: 10000 }, (_, index) => index);

console.log(maxSubArraySum(lagerArray, 3));
