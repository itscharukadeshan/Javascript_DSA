/** @format */

// * Using built in methods

/*
const reverseString = (string) => {
  const result = string.split("").reverse().join("");

  //! Took the string and spit to get an array with letters

  //! Use reverse array method and use join method to join the letters and spaces

  return result;
};

console.log(reverseString("desrever uoy gnirts eht si sihT"));

*/

const reverseStringWithForLoop = (string) => {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  const result = reversed;

  return result;
};

console.log(reverseStringWithForLoop("desrever uoy gnirts eht si sihT"));
