/** @format */

const Queue = require("../queue");

const breathFirstTraversal = (graph, startingNode) => {
  const visited = new Set();
  const result = [];
  const queue = new Queue();

  queue.enqueue(startingNode);
  visited.add(startingNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    result.push(currentNode);

    for (const neighbor of graph.adjacencyList[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
        visited.add(neighbor);
      }
    }
  }
  return result;
};

module.exports = breathFirstTraversal;
