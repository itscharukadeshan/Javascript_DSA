/** @format */

const Graph = require("./graph");

const graph = new Graph();

graph.addVertex("Shark");
graph.addVertex("Octopus");
graph.addVertex("Dolphin");
graph.addVertex("Seal");
graph.addVertex("Turtle");
graph.addVertex("Whale");
graph.addVertex("Penguin");

graph.addEdge("Shark", "Octopus");
graph.addEdge("Shark", "Dolphin");
graph.addEdge("Shark", "Turtle");
graph.addEdge("Octopus", "Dolphin");
graph.addEdge("Seal", "Whale");
graph.addEdge("Dolphin", "Whale");
graph.addEdge("Penguin", "Octopus");

graph.printAdjacencyList();

// ---------------------

// * Remove edge

graph.removeEdge("Octopus", "Dolphin");

graph.printAdjacencyList();

// ? remove Octopus and Dolphin connections

// --------------------

graph.removeNode("Penguin");
graph.printAdjacencyList();

// ? remove Penguin node
