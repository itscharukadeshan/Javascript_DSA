/** @format */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const isValidateBST = (root) => {
  const isValidSubTree = (node, min, max) => {
    if (!node) return true;

    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    ) {
      return false;
    }

    return (
      isValidSubTree(node.left, min, node.value) &&
      isValidSubTree(node.right, max, node.value)
    );
  };

  return isValidSubTree(root, null, null);
};

module.exports = { Node, isValidateBST };
