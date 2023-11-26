/** @format */

const numbers = [1, 2, 3, 4, 5, 6, 7];

// * Map method

const multipleByTwo = numbers.map((number, index, array) => {
  // ? Index give the index number of each number in array
  //console.log(index);
  //? Array gives access to the original input array
  // console.log(array);
  // ? You can do any operation to each individual number (in this case)
  return number * 2;
});

// console.log(multipleByTwo);

// * Filter Method

const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0;
});

console.log(oddNumbers);

// * Reduce method

const sumOfNumbers = numbers.reduce((total, number) => {
  // ? Reduce take tow arguments first (total here) accumulate the given input

  const result = total + number;

  return result;

  // ? Here this number (0) is the starting value of the first arguments (total here)
}, 0);

console.log(sumOfNumbers);

// * ForEach

const addTwo = numbers.forEach((number) => {
  // ? Work's identical to for loops
  console.log(number);
});

// * Find method

const findNumber = numbers.find((number) => {
  return number > 2;
});

console.log(findNumber);

// * Some method

const hasSomeEvenNumbers = numbers.some((number) => {
  // ? Checks for attest one of the array element pass the given condition

  return number % 2 === 0;

  // ? If you forgot to return its gives false as default
});

console.log(hasSomeEvenNumbers);

// ? Check every array element for given condition
const checkEveryNumber = numbers.every((number) => {
  return number >= 8;
});

console.log(checkEveryNumber);
