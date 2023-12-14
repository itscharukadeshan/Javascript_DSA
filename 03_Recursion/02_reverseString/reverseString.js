/** @format */

const reverseString = (String) => {
  // Base case

  console.log(`Input: ${String}`);

  if (String === "") {
    console.log(`Hit base case, Input empty string.`);
    return "";
  }

  const newStr = String.substr(1);

  console.log(`Calling function Input: ${newStr}`);

  const reversedRest = reverseString(newStr);

  const result = reversedRest + String.charAt(0);

  console.log(`Returning reversed Input: ${result}`);

  return result;
};

console.log(reverseString("hello"));
