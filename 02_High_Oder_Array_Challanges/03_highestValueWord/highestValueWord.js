/** @format */

const string = "This is the String With XX";

const highestValueWord = (string) => {
  const words = string.toLowerCase().split(" ");

  let scores = 0;

  const value = words.map((word) => {
    for (const letter of word) {
      scores += letter.charCodeAt(0) - 96;
    }
    return scores;
  });

  let highestValue = 0;
  let highestIndex = 0;

  for (let i = 0; i < value.length; i++) {
    if (scores[i] > highestValue) {
      highestIndex = i;
      highestValue = scores[i];
    }
  }

  return words[highestIndex];
};

console.log(highestValueWord(string));
