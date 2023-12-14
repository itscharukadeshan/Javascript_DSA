/** @format */

let runtime = 0;

const factorial = (number) => {
  if ((number === 1) | (number === 0)) {
    return 1;
  }

  runtime++;

  return number * factorial(number - 1);
};

console.log(factorial(10));

console.log(`Times factorial () called : ${runtime}  `);
