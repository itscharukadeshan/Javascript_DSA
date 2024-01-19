/** @format */

const {
  Node,
  depthFirstTraversal,
  depthFirstTraversalWithStack,
} = require("./depthFirstTraversals");

const { recDepthFirstTraversals } = require("./recDepthFirstTraversals");

// * Add Nodes and data

const root = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

// * Create the structure of the tree

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;

// * Add result

const result = depthFirstTraversal(root);
const resultWithStack = depthFirstTraversalWithStack(root);
const resultWithRecursion = recDepthFirstTraversals(root);

console.log(result);
console.log(resultWithStack);
console.log(resultWithRecursion);
