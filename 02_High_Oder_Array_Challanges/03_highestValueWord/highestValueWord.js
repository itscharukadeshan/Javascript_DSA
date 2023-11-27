/** @format */

// * Using for of loops and maps

const string = "This String With highest value word => xxxx ";

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

// * With map and reduce

const highestValueWordWithMap = (string) => {
  const words = string.toLowerCase().split(" ");

  const values = words.map((word) => {
    return Array.from(word).reduce((value, letter) => {
      return value + letter.charCodeAt(0) - 96;
    }, 0);
  });

  const highestValue = Math.max(...values);
  const highestIndex = values.indexOf(highestValue);
  return words[highestIndex];
};

console.log(highestValueWordWithMap(string));
