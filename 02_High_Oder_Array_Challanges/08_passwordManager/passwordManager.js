/** @format */

const passwordManager = (string) => {
  const isValueCorrect = string.length >= 8;
  const hasUpperCase = string
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());
  const hasLowerCase = string
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());
  const hasDigits = string.split("").some((char) => !isNaN(parseInt(char, 10)));

  return isValueCorrect && hasUpperCase && hasLowerCase && hasDigits;
};

console.log(passwordManager("Abcd12345"));
