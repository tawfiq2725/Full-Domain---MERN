class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  addValue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addValueLast(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  deleteValue() {
    if (this.isEmpty()) {
      return;
    } else {
      let deleteNode = this.head;
      this.head = this.head.next;
      return deleteNode.value;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return;
    } else {
      return this.head.value;
    }
  }

  getSize() {
    let size = 0;
    let cur = this.head;
    while (cur) {
      size++;
      cur = cur.next;
    }
    return size;
  }

  popMid() {
    let size = this.getSize();
    let mid = Math.floor(size / 2);
    if (size === 1) {
      this.head = null;
    } else {
      let cur = this.head;
      for (let i = 1; i < mid; i++) {
        cur = cur.next;
      }
      cur.next = cur.next.next;
    }
  }

  display() {
    let queue = [];
    if (this.isEmpty()) {
      return;
    } else {
      let current = this.head;
      while (current) {
        queue.push(current.value);
        current = current.next;
      }
    }
    console.log(queue);
  }
}

const stack = new Stack();
stack.addValue(10);
stack.addValue(20);
stack.addValue(30);
stack.addValue(40);
stack.addValue(40);

stack.display();

class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  display() {
    console.log(this.stack);
  }
}
