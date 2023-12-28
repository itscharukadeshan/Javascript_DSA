/** @format */

// ? Take input array and target check what two numbers sum to the target.

// ? Return index of the two numbers

const sumTwo = (numberArray, target) => {
  const numSet = new Set();
  for (let i = 0; i < numberArray.length; i++) {
    const compliment = target - numberArray[i];

    if (numSet.has(compliment)) {
      return [numberArray.indexOf(compliment), i];
    }
    numSet.add(numberArray[i]);
  }

  return [];
};

console.log(sumTwo([1, 2, 3], 5));
