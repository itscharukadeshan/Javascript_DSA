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
