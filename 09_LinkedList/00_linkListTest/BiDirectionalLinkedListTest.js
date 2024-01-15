/** @format */

const { BiDirectionalLinkedList } = require("../BiDirectionalLinkedList");

const list = new BiDirectionalLinkedList();

// * Append items to the list

list.append(100);
list.append(200);
list.append(300);
list.append(400);
list.append(400);

// * Adding new node before 100

list.prePend("=> 50");

// * Adding new node in between index 0 - 1 (50 -[>=newNodeHere<=] -100)

list.insertAt(1, ">= 70 <=");

list.printAll();

// * Get data with index

console.log(list.get(0).data);

// * Remove the data with index

list.remove(1);
