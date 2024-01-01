/** @format */

const HashTable = require("../08_customHashTable/customHashTable");

const wordInstantCounter = (string, word) => {
  const words = string.toLowerCase().split(/\W+/);

  const wordFreq = new HashTable();

  const targetWord = word.toLowerCase();

  let count = 0;

  for (const currentWord of words) {
    if (currentWord === "") continue;

    if (wordFreq.has(currentWord)) {
      wordFreq.set(currentWord, wordFreq.get(currentWord) + 1);
    } else {
      wordFreq.set(currentWord, 1);
    }

    if (currentWord === targetWord) {
      count = wordFreq.get(currentWord);
    }
  }

  return count;
};

const string = "This is an example of sentence with this two times";
const word = "this";

console.log(wordInstantCounter(string, word));
