/** @format */

const anagramGroupe = (array) => {
  const anagramGroups = new Map();

  for (const word of array) {
    const shortedChar = word.split("").sort().join("");
    if (anagramGroups.has(shortedChar)) {
      anagramGroups.get(shortedChar).push(word);
    } else {
      anagramGroups.set(shortedChar, [word]);
    }
  }
  return Array.from(anagramGroups.values());
};

console.log(anagramGroupe(["cat", "act", "dog", "god", "nonAnagram"]));
