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
