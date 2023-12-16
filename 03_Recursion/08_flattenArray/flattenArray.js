/** @format */

const flattenArray = (array) => {
  let result = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log(
  flattenArray([1, 2, 3, [1, 5, 8, 3, 6, [4, 4, 3, 2]], [3, 6, 8, 4]])
);
