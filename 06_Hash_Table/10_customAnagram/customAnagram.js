/** @format */

const HashTable = require("../08_customHashTable/customHashTable");

const customAnagram = (words) => {
  const anagramGrouping = new HashTable();
  for (const word of words) {
    const shortedChar = word.split("").sort().join("");

    if (anagramGrouping.get(shortedChar)) {
      anagramGrouping.get(shortedChar).push(word);
    } else {
      anagramGrouping.set(shortedChar, [word]);
    }
  }
  return anagramGrouping.getValue();
};

console.log(customAnagram(["cat", "act", "dog", "god", "nonAnagram"]));
