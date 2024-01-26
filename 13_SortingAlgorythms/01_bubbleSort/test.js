/** @format */

const { bubbleSort, bubbleSort_2 } = require("./bubbleSort.js");

const array = [5, 4, 2, 1];

// _____________________________________

const result = bubbleSort(array);

console.log(" ".repeat(10));

console.log(`result => ${result}`);

console.log(" ".repeat(10));

// _____________________________________

const result_02 = bubbleSort_2(array);

console.log(`result_02 => ${result_02}`);
