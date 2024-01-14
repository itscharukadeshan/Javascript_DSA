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
