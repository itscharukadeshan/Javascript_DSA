/** @format */

const CountLetters = (str, letter) => {
  let count = 0;
  let string = str.toLowerCase();
  let letterInLowercase = letter.toLowerCase();

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
