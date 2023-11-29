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
