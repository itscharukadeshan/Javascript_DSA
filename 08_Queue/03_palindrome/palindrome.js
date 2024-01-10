/** @format */

const Stack = require("../../07_Stacks/01_stackExample/stack");
const Queue = require("../01_queue/queue");

const palindrome = (string) => {
  formattedStr = string.replace(/[^a-zA-Z0-1]/g, "").toLowerCase();
  const chatStack = new Stack();
  const charQueue = new Queue();

  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr.charAt(i);

    charQueue.enqueue(char);
    chatStack.push(char);
  }
  while (!charQueue.isEmpty()) {
    if (charQueue.dequeue() !== chatStack.pop()) {
      return false;
    }
  }
  return true;
};

console.log(palindrome("a Man , a Plan , a canal:panama"));

console.log(palindrome("Hello !"));
