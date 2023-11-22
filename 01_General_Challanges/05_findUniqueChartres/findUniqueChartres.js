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


const findUniqueCharactersWithSet = (letterString) => {
  const characters = new Set()

  for (let i = 0; i < letterString.length; i++) {
    const character = letterString[i];

    if (characters.has(character)) {
      return false;
    }

    characters.add(character)
  }

  return true;
};

console.log(findUniqueCharactersWithSet("StringWithRepeatingLetters"));

console.log(findUniqueCharactersWithSet("abcd ABCD"));

console.log(findUniqueCharactersWithSet("singular"));
