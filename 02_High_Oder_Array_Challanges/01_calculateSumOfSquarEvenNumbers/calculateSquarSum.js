/** @format */

// * Generate number array

let numbers = [];

for (let i = 0; i <= 10; i++) {
  numbers.push(i);
}

// * calculate sum using Filter , Map and Reduce

const calculateSquareSum = (numberArray) => {
  // ? Use filter method to filter the array to only contain even numbers (return new array)

  const evenNumberArray = numberArray.filter((number) => {
    return number % 2 === 0;
  });

  // console.log(evenNumberArray);

  // ? Use map to get square of all the even numbers (return new array)

  const squareOfEvenNumbers = evenNumberArray.map((number) => {
    return number * number;
  });

  // console.log(squareOfEvenNumbers);

  // ? Use reduce to calculate the sum of the square of the numbers (return the Sum)

  const sumOfArray = squareOfEvenNumbers.reduce((total, number) => {
    return total + number;
  }, 0);

  // console.log(sumOfArray);

  const result = sumOfArray;

  return result;
};

console.log(calculateSquareSum(numbers));

// * Summarize version

const calculateSquareSuSummarize = (numberArray) => {
  const oneLiner = numberArray
    .filter((number) => number % 2 == 0)
    .map((number) => number * number)
    .reduce((total, number) => {
      return total + number;
    }, 0);

  const result = oneLiner;

  return result;
};

console.log(calculateSquareSuSummarize(numbers));
