/** @format */

// Case inSensitive

const CountLetters = (str, letter) => {
  let count = 0;
  let string = str.toLowerCase();
  let letterInLowercase = letter.toLowerCase();

  // Strings have an length arrays

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letterInLowercase) {
      count++;
    }
  }
  return `Letter ${letter} is present ${count} times in ${str}`;
};

console.log(CountLetters("My Name", "M"));
console.log(CountLetters("My Name", "a"));
console.log(CountLetters("My Name", "m"));

// Case Sensitive

/*

const CountLetters = (str, letter) => {
  let count = 0;
  let string = str;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return `Letter ${letter} is present ${count} times in ${str}`;
};

console.log(CountLetters("My Name", "M"));
console.log(CountLetters("My Name", "a"));
console.log(CountLetters("My Name", "m"));

*/
