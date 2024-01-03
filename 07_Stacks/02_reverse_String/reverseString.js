/** @format */
const Stack = require("../01_stackExample/stack");

const reverseString = (string) => {
  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  let reversedString = "";

  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
};

console.log(reverseString("! dlrow olleH"));
