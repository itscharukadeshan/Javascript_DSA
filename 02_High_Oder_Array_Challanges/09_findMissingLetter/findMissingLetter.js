/** @format */

// * Using map and find

const findMissingLetter = (array) => {
  let start = array[0].charCodeAt(0);

  const missingLetter = array
    .slice(1)
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - 1 > start) {
        return true;
      }

      start = current;
      return false;
    });

  return missingLetter ? String.fromCharCode(missingLetter - 1) : "";
};

console.log(findMissingLetter(["a", "b", "c", "e"]));

// * Using filter

const findMissingLetterUsingFilter = (array) => {
  const missingLetter = array.filter((char, index) => {
    if (index == 0) return false;

    const prevCharCode = array[index - 1].charCodeAt(0);

    const CurrentCharCode = char.charCodeAt(0);

    return CurrentCharCode - prevCharCode > 1;
  })[0];

  return missingLetter
    ? String.fromCharCode(missingLetter.charCodeAt(0) - 1)
    : "";
};

console.log(findMissingLetterUsingFilter(["a", "b", "c", "e"]));
