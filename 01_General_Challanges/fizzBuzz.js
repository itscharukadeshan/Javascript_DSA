/** @format */

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
