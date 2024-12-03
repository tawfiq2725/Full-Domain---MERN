// // class Node {
// //   constructor(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
// // }

// // class Queue {
// //   constructor() {
// //     this.head = null;
// //     this.rear = null;
// //   }

// //   isEmpty() {
// //     return this.head === null;
// //   }
// //   enqueue(value) {
// //     const node = new Node(value);
// //     if (this.isEmpty()) {
// //       this.head = node;
// //       this.rear = node;
// //     } else {
// //       this.rear.next = node;
// //       this.rear = node;
// //     }
// //   }
// //   dequeue() {
// //     if (this.isEmpty()) {
// //       return;
// //     } else {
// //       let remove = this.head;
// //       this.head = this.head.next;
// //       return remove.value;
// //     }
// //   }
// //   peek() {
// //     if (this.isEmpty()) {
// //       return;
// //     }
// //     return this.head.value;
// //   }
// //   display() {
// //     let queue = [];
// //     if (this.isEmpty()) {
// //       return;
// //     } else {
// //       let cur = this.head;
// //       while (cur) {
// //         queue.push(cur.value);
// //         cur = cur.next;
// //       }
// //     }
// //     console.log(queue);
// //   }
// // }

// // const queue = new Queue();
// // queue.enqueue(10);
// // queue.enqueue(20);
// // queue.enqueue(30);
// // queue.enqueue(40);
// // queue.dequeue();
// // queue.display();

// // Priority Queue

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.rear = null;
//   }

//   isEmpty() {
//     return this.head === null;
//   }
//   enqueue(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.rear = node;
//     } else {
//       this.rear.next = node;
//       this.rear = node;
//     }
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return;
//     } else {
//       let remove = this.head;
//       this.head = this.head.next;
//       return remove.value;
//     }
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return;
//     }
//     return this.head.value;
//   }

//   reprioritize(value) {
//     if (this.isEmpty() || this.head.value === value) return;

//     let pre = null;
//     let cur = this.head;
//     while (cur && cur.value !== value) {
//       pre = cur;
//       cur = cur.next;
//     }
//     if (!cur) return;
//     if (pre) {
//       pre.next = cur.next;
//     }
//     if (cur === this.rear) {
//       this.rear = pre;
//     }
//     cur.next = this.head;
//     this.head = cur;
//   }

//   display() {
//     let queue = [];
//     if (this.isEmpty()) {
//       return;
//     } else {
//       let cur = this.head;
//       while (cur) {
//         queue.push(cur.value);
//         cur = cur.next;
//       }
//     }
//     console.log(queue);
//   }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.dequeue();
// queue.display();

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.head = null;
  }
  isEmpty() {
    return this.head === null;
  }
  enqueue(value, priority) {
    const node = new Node(value, priority);
    if (this.isEmpty() || this.head.priority < priority) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.priority >= priority) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.error("The queue is empty");
      return;
    } else {
      let removeNode = this.head;
      this.head = this.head.next;
      return removeNode;
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("error");
    } else {
      let list = ` `;
      let curr = this.head;
      while (curr) {
        list = list + `${curr.value} `;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const que = new PriorityQueue();
que.enqueue("Task A", 1);
que.enqueue("Task B", 7);
que.enqueue("Task C", 3);
que.enqueue("Task D", 8);
que.print();
