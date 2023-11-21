/** @format */

const countVowels = (string) => {
  const formattedString = string.toLowerCase();
  let count = 0;

  for (let i = 0; i < formattedString.length; i++) {
    const char = formattedString[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  const result = count;

  return result;
};

console.log(countVowels("Text with many Vowels"));
