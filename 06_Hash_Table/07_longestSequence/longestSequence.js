/** @format */

const longestSequence = (array) => {
  const numSet = new Set(array);
  let longestSeq = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSeq = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSeq++;
      }
      longestSeq = Math.max(longestSeq, currentSeq);
    }
  }
  return longestSeq;
};

console.log(longestSequence([100, 4, 200, 1, 2, 3]));
