/** @format */

const {
  Node,
  breathFirstTraversal,
  breathFirstTraversalWithQueue,
} = require("./breathFirstTraversal");

const root = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");
const nodeD = new Node("d");
const nodeE = new Node("e");
const nodeF = new Node("f");

root.right = nodeB;
root.left = nodeC;
nodeB.right = nodeD;
nodeB.left = nodeE;
nodeC.left = nodeF;

const result = breathFirstTraversal(root);
const resultWithQueue = breathFirstTraversalWithQueue(root);

console.log(result);
console.log(resultWithQueue);
