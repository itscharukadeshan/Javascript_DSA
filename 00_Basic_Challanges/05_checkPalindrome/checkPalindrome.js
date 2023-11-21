/** @format */
// * Using regex

const checkPalindrome = (string) => {
  const formattedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reverseString = formattedString.split("").reverse().join("");

  const result = formattedString === reverseString;

  return result;
};

const result_1 = checkPalindrome("Race Car");
const result_2 = checkPalindrome("racecar");
const result_3 = checkPalindrome("Not and palindrome");

console.log(`Is "Race Car" a palindrome? => ${result_1}`);
console.log(`Is "racecar" a palindrome? => ${result_2}`);
console.log(`Is "Not a palindrome" a palindrome? => ${result_3}`);

// * Without built in methods and regex

const isPalindrome = (string) => {
  const formattedString = isLetterOrNumber(string.toLowerCase());

  const reverseStr = reverseString(formattedString);

  const result = formattedString === reverseStr;

  return result;
};

const isLetterOrNumber = (string) => {
  let formattedString = "";

  for (let i = 0; i < string.length; i++) {
    let character = string[i];

    if (removeSpecialCharacters(character)) {
      formattedString += character;
    }
  }

  const result = formattedString;

  return result;
};

const removeSpecialCharacters = (character) => {
  // ! use the unicode code range instead of regex

  const code = character.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) /* * Numbers unicode range */ ||
    (code >= 97 && code <= 122) /* * Lowercase letter unicode range */
  );
};

const reverseString = (string) => {
  let reverse = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }

  const result = reverse;

  return result;
};

const result_4 = isPalindrome("Race Car");
const result_5 = isPalindrome("racecar");
const result_6 = isPalindrome("Not and palindrome");

console.log(`Is "Race Car" a palindrome? => ${result_4}`);
console.log(`Is "racecar" a palindrome? => ${result_5}`);
console.log(`Is "Not a palindrome" a palindrome? => ${result_6}`);
