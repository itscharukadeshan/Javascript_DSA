/** @format */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(node_1, node_2) {
    this.adjacencyList[node_1].push(node_2);
    this.adjacencyList[node_2].push(node_1);
  }

  removeEdge(node_1, node_2) {
    this.adjacencyList[node_1] = this.adjacencyList[node_1].filter(
      (node) => node !== node_2
    );

    this.adjacencyList[node_2] = this.adjacencyList[node_2].filter(
      (node) => node !== node_1
    );
  }
  removeNode(node) {
    while (this.adjacencyList[node].length) {
      const adjacencyNode = this.adjacencyList[node].pop();

      this.removeEdge(node, adjacencyNode);
    }

    delete this.adjacencyList[node];
  }
  printAdjacencyList() {
    let maxLen = 0;
    for (let vertex in this.adjacencyList) {
      maxLen = Math.max(
        maxLen,
        vertex.length + this.adjacencyList[vertex].join(",").length
      );
    }
    maxLen += 10;

    console.log("-".repeat(maxLen));
    console.log(" ".repeat(maxLen));

    for (let vertex in this.adjacencyList) {
      let edges = this.adjacencyList[vertex].join(", ");
      console.log(`${vertex} --> ${edges}`);
    }

    console.log(" ".repeat(maxLen));
    console.log("-".repeat(maxLen));
  }
}

module.exports = Graph;
