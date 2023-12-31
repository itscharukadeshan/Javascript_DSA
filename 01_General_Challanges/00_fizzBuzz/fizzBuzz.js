/** @format */

// ? Common  question

const fizzBuzz = (number) => {
  const array = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }

  const result = array;

  return result;
};

console.log(fizzBuzz(15));

const fizzBuzzWithFistCommonNum = (number) => {
  const array = [];

  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }

  const uniq = new Set(array);

  const size = uniq.size - 3;

  const result = array;

  return `${result} ==> There are [${size}] numbers that not follow the pattern`;
};

console.log(fizzBuzzWithFistCommonNum(30));
