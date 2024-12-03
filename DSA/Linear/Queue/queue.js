class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  addFront(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addLast(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  addMid(value) {}
  addElem(value, index) {}
  avoidDup_addElem(value) {}
  removeFromStart() {}
  removeFromEnd() {}
  removeMid() {}
  removeusingIndex() {}

  display() {
    let queue = [];
    let curr = this.head;
    while (curr) {
      queue.push(curr.value);
      curr = curr.next;
    }
    console.log(queue);
  }
}
const q = new Queue();
q.addFront(10);
q.addFront(20);
q.addFront(30);
q.display();
