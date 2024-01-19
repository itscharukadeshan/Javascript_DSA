/** @format */

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

const recDepthFirstTraversals = (root) => {
  const result = [];

  const traverse = (node) => {
    if (node !== null) {
      result.push(node.data);

      traverse(node.left);
      traverse(node.right);
    }
  };

  traverse(root);

  return result;
};

module.exports = { Node, recDepthFirstTraversals };
