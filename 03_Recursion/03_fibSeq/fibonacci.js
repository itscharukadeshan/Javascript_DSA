/** @format */

let runtime = 0;

// * Take an number and return corresponding fib value at that Index

const fibonacci = (number) => {
  runtime++;
  console.log(`calculating ...fibonacci (${number}) `);

  if (number < 2) {
    return number;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
};

console.log(`Result : ${fibonacci(10)}`);

console.log(`Times fibonacci called : ${runtime} `);
