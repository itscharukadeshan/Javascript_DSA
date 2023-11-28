/** @format */

const validAnagram = (string_01, string_02) => {
  const frequencyCount_01 = string_01
    .split("")
    .reduce((accumulator, letter) => {
      accumulator[letter] = (accumulator[letter] || 0) + 1;

      return accumulator;
    }, {});

  const frequencyCount_02 = string_02
    .split("")
    .reduce((accumulator, letter) => {
      accumulator[letter] = (accumulator[letter] || 0) + 1;

      return accumulator;
    }, {});

  return Object.keys(frequencyCount_01).every((letter) => {
    return frequencyCount_01[letter] === frequencyCount_02[letter];
  });
};

console.log(validAnagram("app", "pap"));
