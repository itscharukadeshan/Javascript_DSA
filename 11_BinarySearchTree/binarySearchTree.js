/** @format */

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BiSearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;

            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;

            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  printTree() {
    const printNode = (node) => {
      if (node === null) return;

      printNode(node.left);
      console.log(node.value);
      printNode(node.right);
    };
    printNode(this.root);
  }

  printTreeStructure() {
    const print = (node, prefix = "", isLeft = true) => {
      if (node.right) {
        print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }

      const side = isLeft ? "L" : "R";

      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value} ${side}`);

      if (node.left) {
        print(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    };

    print(this.root, "");
  }
}

module.exports = { Node, BiSearchTree };
