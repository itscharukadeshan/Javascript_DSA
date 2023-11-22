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

// * Using Unicode

const findMissingLetterWithUniCode = (letterArray) => {
  let start = letterArray[0].charCodeAt(0);

  for (let i = 0; i < letterArray.length; i++) {
    const current = letterArray[i].charCodeAt(0);

    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }

  return "";
};

console.log(findMissingLetterWithUniCode(["a", "b", "c", "d", "f"]));
