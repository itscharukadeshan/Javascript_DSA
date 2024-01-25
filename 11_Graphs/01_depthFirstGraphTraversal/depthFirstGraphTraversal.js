/** @format */
const Stack = require("./stack");

const depthFirstTraversal = (graph, startingNode) => {
  if (!graph.adjacencyList[startingNode]) {
    return [];
  }
  const visited = {};
  const stack = new Stack();
  const result = [];

  stack.push(startingNode);
  visited[startingNode] = true;

  while (!stack.isEmpty()) {
    const currentNode = stack.pop();
    result.push(currentNode);

    graph.adjacencyList[currentNode].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
};

module.exports = depthFirstTraversal;
