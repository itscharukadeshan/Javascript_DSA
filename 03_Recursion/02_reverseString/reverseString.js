/** @format */

const reverseString = (String) => {
  // Base case

  if (String === "") {
    return "";
  }

  const newStr = String.substr(1);
  const reversedRest = reverseString(newStr);

  const result = reversedRest + String.charAt(0);

  return result;
};

console.log(reverseString("hello"));
