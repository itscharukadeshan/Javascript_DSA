/** @format */

const WordFreqCounter = (string) => {
  const words = string.toLowerCase().split(/\b/);

  const wordFreq = new Map();

  for (const word of words) {
    if (word === " ") continue;

    if (wordFreq.has(word)) {
      wordFreq.set(word, wordFreq.get(word) + 1);
    } else {
      wordFreq.set(word, 1);
    }
  }

  return wordFreq;
};

console.log(
  WordFreqCounter("This is sentence with the word this in two times")
);
