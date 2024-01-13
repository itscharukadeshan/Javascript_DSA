/** @format */

const { LinkedList } = require("../linkedList");

const list = new LinkedList();

list.add(100);
list.add(200);
list.add(300);

list.insertAt(1, 500);

console.log(`Check for insert at => ${list.get(1)}`);

list.removeFrom(1);

console.log(`Check for remove => ${list.get(1)}`);

console.log(
  `Get method loop trough data and get the index value => ${list.get(2)}`
);

list.printAll();
