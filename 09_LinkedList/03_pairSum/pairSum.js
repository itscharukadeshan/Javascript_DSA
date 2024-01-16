/** @format */

const { BiDirectionalLinkedList } = require("../BiDirectionalLinkedList");

const pairSum = (numbers, targetNumber) => {
  const seen = new BiDirectionalLinkedList();

  for (const num of numbers) {
    const difference = targetNumber - num;

    if (seen.contain(difference)) {
      return [difference, num];
    }
    seen.append(num);
  }

  return null;
};

console.log(pairSum([1, 2, 3, 4, 5, 6, 7], 13));
console.log(pairSum([1, 2, 3, 4, 5, 6, 7], 100));
