/** @format */

const reverseString = (String) => {
  // Base case

  console.log(`Reverse function called with string: ${str}`);

  if (String === "") {
    console.log(`Hit base case, empty string. Returning empty string`);
    return "";
  }

  const newStr = String.substr(1);

  console.log(`Calling function recursively with: ${newStr}`);

  const reversedRest = reverseString(newStr);

  const result = reversedRest + String.charAt(0);

  console.log(`Returning reversed string: ${result}`);

  return result;
};

console.log(reverseString("hello"));
