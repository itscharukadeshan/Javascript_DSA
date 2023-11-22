/** @format */

const findUniqueCharacters = (letterString) => {
  const characters = {};

  for (let i = 0; i < letterString.length; i++) {
    const character = letterString[i];

    if (characters[character]) {
      return false;
    }

    characters[character] = true;
  }

  return true;
};

console.log(findUniqueCharacters("StringWithRepeatingLetters"));

console.log(findUniqueCharacters("abcd ABCD"));

console.log(findUniqueCharacters("singular"));
