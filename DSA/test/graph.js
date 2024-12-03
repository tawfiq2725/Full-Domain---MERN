class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = new Set();
    }
  }

  addEdge(v1, v2) {
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

  removeVertex(v) {
    if (!this.adjacencyList[v]) {
      return;
    }
    for (let neighbor of this.adjacencyList[v]) {
      this.removeEdge(neighbor, v);
    }

    delete this.adjacencyList[v];
  }
  Dfs(start) {
    let stack = [start];
    let visted = new Set();
    visted.add(start);
    while (stack.length > 0) {
      let vertex = stack.pop();
      console.log(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visted.has(neighbor)) {
          visted.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }
  bfs(start) {
    let queue = [start];
    let visted = new Set();
    visted.add(start);
    while (stack.length > 0) {
      let vertex = queue.shift();
      console.log(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visted.has(neighbor)) {
          visted.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}
