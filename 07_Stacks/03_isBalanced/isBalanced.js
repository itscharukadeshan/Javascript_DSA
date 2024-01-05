/** @format */

const Stack = require("../01_stackExample/stack");

const isBalanced = (string) => {
  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(string[i]);
    } else if (string[i] === ")") {
      if (!stack.isEmpty()) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.isEmpty();
};

console.log(isBalanced("()()()"));
