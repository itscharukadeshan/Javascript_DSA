/** @format */

const { BiDirectionalLinkedList } = require("../BiDirectionalLinkedList");

const list = new BiDirectionalLinkedList();

list.append(100);
list.append(200);
list.append(300);
list.append(400);
list.append(400);

list.printAll();

// * adding new node before 100

list.prePend(50);

list.printAll();

// adding new node in between index 0 - 1 (50 -[>=newNodeHere<=] -100)

list.insertAt(1, 70);

list.printAll();
