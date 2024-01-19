/** @format */

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const recDepthFirstTraversals = (root) => {
  const result = [];

  const traverse = (node) => {
    if (node !== null) {
      result.push(node.value);

      traverse(node.left);
      traverse(node.right);
    }
  };

  traverse(root);

  return result;
};

module.exports = { Node, recDepthFirstTraversals };
