// Graph is a non linear datastructure that consists of vertices and connected by edges

// Types
//  Directed -edges are represent by arrow
//  Undirected - edges are bidirectional

// Application - Google Maps, social media sites

// To represent the graph 2 ways
// Adjacency matrix - An adjacency matrix represents a 2d array
// Adjacency list - To store like Map data structure

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //   Adding the vertex to the adjacency list - list = {"a" : []}

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  //   Adding the edges to the adjcency list -  list = {"a" : ["b"] , "b" : ["a","c"]}

  addEdges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  //   Display the vertex and edges
  display() {
    for (let v in this.adjacencyList) {
      console.log(v + "-->" + [...this.adjacencyList[v]]);
    }
  }

  removeEdges(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let vert of this.adjacencyList[vertex]) {
      this.removeEdges(vert, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  BFS(start) {
    let queue = [start];
    const visited = new Set();
    visited.add(start);
    while (queue.length > 0) {
      const vertex = queue.pop();
      console.log(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  DFS(start) {
    let stack = [start];
    const visited = new Set();
    visited.add(start);

    while (stack.length > 0) {
      let vertex = stack.pop();
      console.log(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdges("A", "B");
graph.addEdges("A", "C");
graph.addEdges("B", "D");
graph.addEdges("C", "E");
graph.addEdges("D", "E");

graph.display();

console.log("-------------");
graph.BFS("A");
console.log("-------------");
// graph.DFS("A");
// Graph asked questions
// how to find no.of cycles in a graph?.
// Weighted graph
// degree of the graph
// BFS , DFS - graph
// Loop in graph
// shortest path algorithms
// application of weighted graph
// Adjacency matrix , list
// Directed graph
// Minimum spanning tree
// Connected graph
// Cycle in graph
// eulerian path
// dijikstra algorithm
