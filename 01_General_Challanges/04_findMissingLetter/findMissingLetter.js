/** @format */

// * Using for loops

const findMissingLetter = (letterArray) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const startIndex = alphabet.indexOf(letterArray[0]);

  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  return "";
};

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));

const findMissingLetterWithUniCode = (letterArray) => {
  const start = letterArray[0].charCodeAt(0);
};
