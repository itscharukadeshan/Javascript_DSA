/** @format */

const Queue = require("../01_queue/queue");

const reverseString = (string) => {
  const queue = new Queue();

  for (let i = string.length - 1; i >= 0; i--) {
    queue.enqueue(string[i]);
  }

  let reverseString = "";

  while (!queue.isEmpty()) {
    reverseString += queue.dequeue();
  }

  return reverseString;
};

console.log(reverseString("! dlrow olleH"));
