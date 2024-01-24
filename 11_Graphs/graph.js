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
  printAdjacencyList() {
    for (let vertex in this.adjacencyList) {
      let edges = this.adjacencyList[vertex];

      console.log(`${vertex} --> ${edges} `);
    }
  }
}

module.exports = Graph;