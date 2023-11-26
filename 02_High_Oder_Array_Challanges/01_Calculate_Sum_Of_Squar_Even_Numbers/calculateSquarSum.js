/** @format */

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

console.log(calculateSquareSum([1, 2, 3, 4, 5, 6, 7, 8]));
