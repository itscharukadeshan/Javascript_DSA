/** @format */

// * Using map and find

const findMissingLetter = (array) => {
  let start = array[0].charCodeAt(0);

  const missingLetter = array
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
