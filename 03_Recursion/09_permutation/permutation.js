/** @format */

const permutation = (string) => {
  let result = [];
  if (string.length === 0) {
    result.push("");

    return result;
  }

  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i];

    const restOfString = string.slice(0, i) + string.slice(i + 1);

    const subPermutation = permutation(restOfString);

    for (let j = 0; j < subPermutation.length; j++) {
      result.push(firstChar + subPermutation[j]);
    }
  }

  return result;
};

console.log(permutation("abc"));
