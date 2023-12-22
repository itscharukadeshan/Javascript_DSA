/** @format */

const slidingWindow = (array, k) => {
  console.time("slidingWindow");

  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += array[i];
  }

  currentSum = maxSum;

  for (let i = k; i < array.length; i++) {
    currentSum = currentSum - array[i - k] + array[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  console.timeEnd("slidingWindow");

  return maxSum;
};

// * With smaller input array

console.log(slidingWindow([2, 5, 3, 1, 11, 7, 6, 4], 3));

//* With lager input array

const lagerArray = Array.from({ length: 10000 }, (_, index) => index);

console.log(slidingWindow(lagerArray, 3));
