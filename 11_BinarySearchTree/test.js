/** @format */

const { Node, BiSearchTree } = require("./binarySearchTree");

const bst = new BiSearchTree();

bst.insert(20);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(30);
bst.insert(25);
bst.insert(35);

console.log("Lookup method");

console.log(bst.lookup(10));

console.log("printTreeStructure method");

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
