/** @format */

const { Node, BiSearchTree } = require("./binarySearchTree");

const { isValidBST } = require("./validateBST");

function logHorizontalLine(length) {
  console.log(" ".repeat(length));
  console.log("_".repeat(length));
  console.log(" ".repeat(length));
}

const bst = new BiSearchTree();

bst.insert(20);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(30);
bst.insert(25);
bst.insert(35);

logHorizontalLine(20);
console.log("Lookup method");
logHorizontalLine(20);

console.log(bst.lookup(10));

//--------------------------------

logHorizontalLine(20);

console.log("printTreeStructure method");
logHorizontalLine(20);

bst.printTreeStructure();

// ? Parent only can have two (binary) children
// ? Parent.right is lager than parent
// ? Parent.left is smaller that parent

// * Output

/*


│       ┌── 35 R
│   ┌── 30 R
│   │   └── 25 L
└── 20 L
    │   ┌── 15 R
    └── 10 L
        └── 5 L

 */

//--------------------------------

logHorizontalLine(20);

console.log("remove method => remove the 10");

logHorizontalLine(20);

bst.remove(10);

bst.printTreeStructure();

// * Before remove the number [10] treeStructure 01
// * Before remove the number [10] treeStructure 02

/*

[01]

│       ┌── 35 R
│   ┌── 30 R
│   │   └── 25 L
└── 20 L
    │   ┌── 15 R
    └── 10 L
        └── 5 L

------------------------------------
[02]

│       ┌── 35 R
│   ┌── 30 R
│   │   └── 25 L
└── 20 L
    └── 15 L =>  Remove number 10 
        └── 5 L
 */

// * 15 > 5 so the right children [15] become parent
// * left children [5]  become children of [15]

const root = new Node(10);

const node5 = new Node(5);
const node15 = new Node(15);

const node3 = new Node(3);
const node7 = new Node(7);

const node13 = new Node(13);
const node17 = new Node(17);

root.left = node5;
root.right = node15;

node5.left = node3;
node5.right = node7;

node15.left = node13;
node15.right = node17;

//---------------------------------

logHorizontalLine(20);
console.log("validate the binary search tree");

const result = isValidBST(root);
console.log(result);

//--------------------------------
