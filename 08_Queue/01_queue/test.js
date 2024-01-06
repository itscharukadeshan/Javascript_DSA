/** @format */

const Queue = require("./queue.js");

const queue = new Queue();

queue.enqueue("a");

queue.enqueue("b");

queue.enqueue("c");

console.log(queue.peek());

// * peek method get the top item in the queue

queue.dequeue("a");

// * dequeue method remove the first item in queue

console.log(queue.peek());
