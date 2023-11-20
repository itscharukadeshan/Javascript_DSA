/** @format */

// * Using for loop

const capitalFirstWord = (string) => {
  const splitByWords = string.toLowerCase().split(" ");

  // ! Separate the string to array with words

  //?  [this,text,should,be,in,camel,case]

  for (let i = 0; i < splitByWords.length; i++) {
    splitByWords[i] =
      splitByWords[i][0].toUpperCase() + splitByWords[i].slice(1);

    // ! Took the array word's on by one and capitalize first letter

    // ? [ This , Text , Should , Be , In Camel , Case ]
  }

  const result = splitByWords.join(" ");

  // ! Join the array to one string

  return result;
};

console.log(capitalFirstWord("This text should be in camel case"));
