// class Heap {
//   constructor() {
//     this.heap = [];
//   }

//   //Swap
//   swap(index1, index2) {
//     [this.heap[index1], this.heap[index2]] = [
//       this.heap[index2],
//       this.heap[index1],
//     ];
//   }

//   //   addElement
//   add(value) {
//     this.heap.push(value);
//     this.heapfyUp(this.heap.length - 1);
//   }
//   //   Heapify Up
//   heapfyUp(index) {
//     let parentIndex = Math.floor((index - 1) / 2);
//     while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
//       this.swap(index, parentIndex);
//       index = parentIndex;
//       parentIndex = Math.floor((index - 1) / 2);
//     }
//   }
//   //   Extract
//   extract() {
//     if (this.heap.length === 0) {
//       return;
//     }
//     const root = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.heapfyDown(0);
//     return root;
//   }
//   //   Heapify Down
//   heapfyDown(index) {
//     let largest = index;
//     let left = 2 * index + 1;
//     let right = 2 * index + 2;
//     if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
//       largest = left;
//     }
//     if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
//       largest = right;
//     }
//     if (largest !== index) {
//       this.swap(index, largest);
//       this.heapfyDown(largest);
//     }
//   }
//   display() {
//     console.log("Heap:", this.heap);
//   }
// }

// const heap = new Heap();
// heap.add(10);
// heap.add(20);
// heap.add(60);

// heap.display();

// class PriorityQueue {
//   constructor() {
//     this.heap = [];
//   }

//   // Swap elements in the heap array
//   swap(index1, index2) {
//     [this.heap[index1], this.heap[index2]] = [
//       this.heap[index2],
//       this.heap[index1],
//     ];
//   }

//   // Add element with priority
//   enqueue(value, priority) {
//     this.heap.push({ value, priority });
//     this.heapifyUp(this.heap.length - 1);
//   }

//   // Heapify Up
//   heapifyUp(index) {
//     let parentIndex = Math.floor((index - 1) / 2);
//     while (
//       index > 0 &&
//       this.heap[index].priority > this.heap[parentIndex].priority
//     ) {
//       this.swap(index, parentIndex);
//       index = parentIndex;
//       parentIndex = Math.floor((index - 1) / 2);
//     }
//   }

//   // Remove and return the element with the highest priority
//   dequeue() {
//     if (this.heap.length === 0) {
//       return null;
//     }

//     const root = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.heapifyDown(0);
//     return root.value;
//   }

//   // Heapify Down
//   heapifyDown(index) {
//     let largest = index;
//     let left = 2 * index + 1;
//     let right = 2 * index + 2;
//     if (
//       left < this.heap.length &&
//       this.heap[left].priority > this.heap[largest].priority
//     ) {
//       largest = left;
//     }
//     if (
//       right < this.heap.length &&
//       this.heap[right].priority > this.heap[largest].priority
//     ) {
//       largest = right;
//     }
//     if (largest !== index) {
//       this.swap(index, largest);
//       this.heapifyDown(largest);
//     }
//   }

//   // Display the priority queue
//   display() {
//     console.log("Priority Queue:", this.heap);
//   }
// }

// // Example usage of priority queue
// const pq = new PriorityQueue();
// pq.enqueue("Task 1", 1);
// pq.enqueue("Task 2", 3);
// pq.enqueue("Task 3", 2);
// pq.display(); // Displays the priority queue

// console.log(pq.dequeue()); // Output: Task 2
// pq.display(); // Displays the queue after removal

// class Heap {
//   constructor() {
//     this.heap = [];
//   }

//   // Swap
//   swap(index1, index2) {
//     [this.heap[index1], this.heap[index2]] = [
//       this.heap[index2],
//       this.heap[index1],
//     ];
//   }

//   // Add element
//   add(value) {
//     this.heap.push(value);
//     this.heapifyUp(this.heap.length - 1);
//   }

//   // Heapify Up
//   heapifyUp(index) {
//     let parentIndex = Math.floor((index - 1) / 2);
//     while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
//       this.swap(index, parentIndex);
//       index = parentIndex;
//       parentIndex = Math.floor((index - 1) / 2);
//     }
//   }

//   // Extract root element
//   extract() {
//     if (this.heap.length === 0) {
//       return;
//     }
//     const root = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.heapifyDown(0);
//     return root;
//   }

//   // Heapify Down
//   heapifyDown(index) {
//     let largest = index;
//     let left = 2 * index + 1;
//     let right = 2 * index + 2;
//     if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
//       largest = left;
//     }
//     if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
//       largest = right;
//     }
//     if (largest !== index) {
//       this.swap(index, largest);
//       this.heapifyDown(largest);
//     }
//   }

//   // Display the heap array
//   display() {
//     console.log("Heap:", this.heap);
//   }

//   // Heap Sort
//   heapSort(arr) {
//     // Build the heap from the array
//     for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//       this.heapifyDown(i);
//     }

//     // Extract elements from the heap and place them in sorted order
//     for (let i = arr.length - 1; i > 0; i--) {
//       this.swap(0, i);
//       this.heapifyDown(0);
//     }
//   }
// }

// // Example usage of heap sort
// const heap = new Heap();
// const arr = [10, 20, 60, 40, 50, 30];
// heap.heapSort(arr);
// console.log("Sorted array:", arr);

class Heap {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  add(value) {
    this.items.push(value);
    this.heapifyUp(this.items.length - 1);
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.items[index] > this.items[parentIndex]) {
      [this.items[index], this.items[parentIndex]] = [
        this.items[parentIndex],
        this.items[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }
    const removedValue = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown(0);
    return removedValue;
  }

  heapifyDown(index) {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    if (left < this.items.length && this.items[left] > this.items[largest]) {
      largest = left;
    }
    if (right < this.items.length && this.items[right] > this.items[largest]) {
      largest = right;
    }
    if (largest !== index) {
      [this.items[index], this.items[largest]] = [
        this.items[largest],
        this.items[index],
      ];
      this.heapifyDown(largest);
    }
  }

  heapsort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.heapifyDown(0);
    }
    return arr;
  }

  // heapifyUp heapsort
  heapsortHeapifyUp(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.heapifyUp(i);
    }
    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.heapifyUp(0);
    }
    return arr;
  }

  display() {
    console.log("Heap:", this.items);
  }
}
