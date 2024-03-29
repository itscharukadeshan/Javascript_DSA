/** @format */

const Graph = require("../graph");
const depthFirstTraversal = require("./depthFirstGraphTraversal");

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

graph.printAdjacencyList();

const result = depthFirstTraversal(graph, "A");

console.log(result);
