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

  removeEdges(v1, v2) {
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }

  removeVertex(v) {
    if (!this.adjacencyList[v]) {
      return;
    }
    for (let neighbor of this.adjacencyList[v]) {
      this.removeEdges(neighbor, v);
    }

    delete this.adjacencyList[v];
  }
  BFS(start) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);
    while (queue.length > 0) {
      let vertex = queue.pop();
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
      let vertex = stack.shift();
      console.log(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }

  DFScycleCount(start, visited, parent) {
    visited.add(start);

    for (let neighbor of this.adjacencyList[start]) {
      if (!visited.has(neighbor)) {
        if (this.DFScycleCount(neighbor, visited, start)) {
          return true;
        }
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  }

  CountCycles() {
    let visited = new Set();
    let cycleCount = 0;

    // Start DFS from each unvisited node to cover disconnected components
    for (let vertex in this.adjacencyList) {
      if (!visited.has(vertex)) {
        if (this.DFScycleCount(vertex, visited, null)) {
          cycleCount++;
        }
      }
    }
    return cycleCount;
  }

  display() {
    for (let neighbor in this.adjacencyList) {
      console.log(neighbor + " --->" + [...this.adjacencyList[neighbor]]);
    }
  }
}

const g = new Graph();

g.addEdges("A", "B");
g.addEdges("B", "C");
g.addEdges("C", "A");
g.addEdges("C", "D");
g.addEdges("D", "E");

g.display();

console.log(g.DFScycleCount("A", new Set(), null));
console.log(g.CountCycles());
