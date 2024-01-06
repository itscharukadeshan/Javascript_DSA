/** @format */

const Queue = require("./queue.js");

const queue = new Queue();

queue.enqueue("a");

queue.enqueue("b");

queue.enqueue("c");

console.log(queue);
