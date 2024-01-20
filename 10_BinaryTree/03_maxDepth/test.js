/** @format */

const { Node, maxDepth } = require("./maxDepth");

const root = new Node(3);
const nodeB = new Node(9);
const nodeC = new Node(20);
const nodeD = new Node(15);
const nodeE = new Node(7);

root.right = nodeB;
root.left = nodeC;
nodeC.right = nodeE;
nodeC.left = nodeD;

const result = maxDepth(root);

console.log(result);
