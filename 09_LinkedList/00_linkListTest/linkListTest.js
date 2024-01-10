/** @format */

const { LinkedList } = require("../linkedList");

const list = new LinkedList();

list.add(100);
list.add(200);
list.add(300);

console.log(
  `Get method loop trough data and get the index value => ${list.get(2)}`
);

list.printAll();
