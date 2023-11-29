/** @format */

// Using maps

const hashtagGenerator = (string) => {
  if (string.trim() === "") {
    return false;
  }

  const words = string.trim().split(/\s+/);

  const formattedWords = words.map((word) => {
    return (word[0] = word[0].toUpperCase() + word.slice(1));
  });

  const hashTag = "#" + formattedWords.join("");

  return hashTag.length > 140 ? false : hashTag;
};

console.log(hashtagGenerator("hello world"));

//* Using reduce

const hashtagGeneratorWithReduce = (string) => {
  const hashTag = string
    .trim()
    .split(" ")
    .reduce((tag, word) => {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, "#");

  return hashTag.length === 1 || hashTag.length > 140 ? false : hashTag;
};

console.log(hashtagGeneratorWithReduce("hello world With Reduce"));
