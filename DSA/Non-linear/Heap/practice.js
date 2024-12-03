class HeapP {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  addValue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (
      index > 0 &&
      this.heap[index].priority > this.heap[parentIndex].priority
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return;
    }
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root.value;
  }

  heapifyDown(index) {
    const largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (
      left < this.heap.length &&
      this.heap[index].priority > this.heap[largest].priority
    ) {
      largest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right].priority > this.heap[largest].priority
    ) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }
  display() {
    console.log("Priority Queue:", this.heap);
  }
}
const prq = new HeapP();
prq.addValue("Task 1", 3);
prq.addValue("Task 2", 2);
prq.addValue("Task 3", 1);
prq.display();

class HeapP {
  constructor() {
    this.heap = [];
  }

  // Swap two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // Add a value with priority
  addValue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp(this.heap.length - 1);
  }

  // Heapify Up
  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (
      index > 0 &&
      this.heap[index].priority > this.heap[parentIndex].priority
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // Remove and return the element with the highest priority
  remove() {
    if (this.heap.length === 0) {
      return null; // Handle empty heap
    }
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root.value;
  }

  // Heapify Down
  heapifyDown(index) {
    let largest = index; // Assume current index is the largest
    const left = 2 * index + 1; // Left child index
    const right = 2 * index + 2; // Right child index

    // Check if left child exists and has a higher priority
    if (
      left < this.heap.length &&
      this.heap[left].priority > this.heap[largest].priority
    ) {
      largest = left;
    }

    // Check if right child exists and has a higher priority
    if (
      right < this.heap.length &&
      this.heap[right].priority > this.heap[largest].priority
    ) {
      largest = right;
    }

    // If the largest is not the current index, swap and continue heapify down
    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  // Display the priority queue
  display() {
    console.log("Priority Queue:", this.heap);
  }
}

// Example usage
const prq1 = new HeapP();
prq1.addValue("Task 1", 3);
prq1.addValue("Task 3", 1);
prq1.addValue("Task 2", 2);
prq1.display(); // Displays the current priority queue
console.log("Removed:", prq1.remove()); // Removes the element with the highest priority
prq1.display(); // Displays the priority queue after removal
