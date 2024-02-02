/** @format */

const insertionSort = (unSortedArray) => {
  for (let i = 1; i < unSortedArray.length; i++) {
    const currentNum = unSortedArray[i];
    let j = i - 1;

    while (j >= 0 && unSortedArray[j] > currentNum) {
      unSortedArray[j + 1] = unSortedArray[j];
      j--;
    }
    unSortedArray[j + 1] = currentNum;
  }

  const sortedArray = unSortedArray;

  return sortedArray;
};

module.exports = { insertionSort };
