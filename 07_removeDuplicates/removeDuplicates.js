/** @format */

// * Using for loops and checks

const removeDuplicates = (array) => {
  const uniqArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!uniqArray.includes(array[i])) {
      uniqArray.push(array[i]);
    }
  }

  const result = uniqArray;

  return result;
};

// * Using set

const removeDuplicatesUsingSet = (array) => {
  const result = Array.from(new Set(array));
  return result;
};

console.log(
  removeDuplicates([
    1,
    2,
    4,
    2,
    1,
    4,
    5,
    6,
    7,
    3,
    8,
    9,
    5,
    true,
    true,
    "hello",
    "test",
  ])
);

console.log(
  removeDuplicatesUsingSet([
    1,
    2,
    4,
    2,
    1,
    4,
    5,
    6,
    7,
    3,
    8,
    9,
    5,
    true,
    true,
    "hello",
    "test",
  ])
);
