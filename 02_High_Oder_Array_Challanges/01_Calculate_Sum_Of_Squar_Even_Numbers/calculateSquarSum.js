/** @format */

// * Generate Big number array

let numbers = [];

for (let i = -1000; i <= 1000; i++) {
  numbers.push(i);
}

// * calculate sum using Filter , Map and Reduce

const calculateSquareSum = (numberArray) => {
  const evenNumberArray = numberArray.filter((number) => {
    return number % 2 === 0;
  });

  const squareOfEvenNumbers = evenNumberArray.map((number) => {
    return number * number;
  });

  const sumOfArray = squareOfEvenNumbers.reduce((total, number) => {
    return total + number;
  }, 0);

  const result = sumOfArray;

  return result;
};

console.log(calculateSquareSum(numbers));
