/** @format */

// * Using for loops

const findFirstNoneRepeatingCharacter = (string) => {
  const characterCount = {};

  for (const character of string) {
    characterCount[character] = (characterCount[character] || 0) + 1;
  }
  for (const character of string) {
    if (characterCount[character] === 1) {
      return character;
    }
  }

  return null;
};

console.log(findFirstNoneRepeatingCharacter("aabbccdefg"));
