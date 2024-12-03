class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdges(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  hasEdge(v1, v2) {
    return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let neighbor of this.adjacencyList[vertex]) {
      this.removeEdge(neighbor, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  BFS(start) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);
    while (queue.length > 0) {
      let vertex = queue.shift();
      console.log(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  DFS(start) {
    let stack = [start];
    let visited = new Set();
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

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  // DFS helper for cycle detection
  DFS(vertex, visited, parent) {
    visited.add(vertex);

    for (let neighbor of this.adjacencyList[vertex]) {
      if (!visited.has(neighbor)) {
        if (this.DFS(neighbor, visited, vertex)) {
          return true; // Cycle found
        }
      } else if (neighbor !== parent) {
        // Cycle detected
        return true;
      }
    }
    return false;
  }

  countCycles() {
    let visited = new Set();
    let cycleCount = 0;

    for (let vertex in this.adjacencyList) {
      if (!visited.has(vertex)) {
        // If a cycle is detected in the component
        if (this.DFS(vertex, visited, -1)) {
          cycleCount++;
        }
      }
    }
    return cycleCount;
  }
}

// Example usage:
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
graph.addEdge("C", "D");

console.log("Number of Cycles:", graph.countCycles());
