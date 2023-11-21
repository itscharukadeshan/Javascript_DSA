/** @format */

// ? Case inSensitive

const countLetters = (str, letter) => {
  let count = 0;
  let string = str.toLowerCase();
  let letterInLowercase = letter.toLowerCase();

  // !  Strings have an .length method likes arrays

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letterInLowercase) {
      count++;
    }
  }
  return `Letter ${letter} is present ${count} times in ${str}`;
};

// ? Using split method | Case InSensitive

/*
const countLetters = (str, letter) => {
  let stringInLowercase = str.toLowerCase();
  let letterInLowercase = letter.toLowerCase();
  let string = stringInLowercase.split(letterInLowercase);

  const result = string.length - 1;

  return result;
};
*/

// ? Case Sensitive

/*

const countLetters = (str, letter) => {
  let count = 0;
  let string = str;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return `Letter ${letter} is present ${count} times in ${str}`;
};

*/

// ? Using split method | Case Sensitive

/*

const countLetters = (str, letter) => {
  let string = str.split(letter);

  const result = string.length - 1;

  return result;
};

console.log(countLetters("My Name", "M"));
console.log(countLetters("My Name", "a"));
console.log(countLetters("My Name", "m"));

*/

console.log(countLetters("My Name", "M"));
console.log(countLetters("My Name", "a"));
console.log(countLetters("My Name", "m"));
