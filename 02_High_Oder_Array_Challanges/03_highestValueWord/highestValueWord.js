/** @format */

const string = "This is the String With highest value word => xxxx ";

const highestValueWord = (string) => {
  const words = string.toLowerCase().split(" ");

  let scores;

  const value = words.map((word) => {
    scores = 0;

    for (const letter of word) {
      scores += letter.charCodeAt(0) - 96;
    }

    return scores;
  });

  let highestValue = 0;

  let highestIndex = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] > highestValue) {
      highestIndex = i;
      highestValue = value[i];
    }
  }

  return words[highestIndex];
};

console.log(highestValueWord(string));
