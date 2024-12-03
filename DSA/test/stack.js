class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.root === null;
  }
  getSize() {
    return this.size;
  }

  // remove last
  removeLast() {}

  contains(value) {
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  addFirst(value) {
    const node = new Node(value);
    if (this.contains(value)) {
      console.log("Value already exists");
      return;
    } else if (this.isEmpty()) {
      this.root = node;
      this.tail = node;
    } else {
      node.next = this.root;
      this.root = node;
    }
    this.size++;
  }

  addLast(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.tail = node;
    } else {
    }
    this.size++;
  }

  addMid(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      let mid = Math.floor(this.getSize() / 2);
      let curr = this.root;
      for (let i = 0; i < mid - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
    }
    this.size++;
  }

  removeMid() {
    let mid = Math.floor(this.getSize() / 2);

    let curr = this.root;
    for (let i = 0; i < mid - 1; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
    this.size--;
  }

  removeFirst() {
    if (this.isEmpty()) {
      return;
    } else {
      let remove = this.root;
      this.root = this.root.next;
      return remove.value;
    }
  }

  removeLast() {
    if (this.isEmpty()) {
      return;
    } else {
      let curr = this.root;
      while (curr.next.next) {
        curr = curr.next;
      }

      curr.next = null;
    }
  }
  display() {
    if (this.isEmpty()) {
      return;
    } else {
      let curr = this.root;
      let stack = [];
      while (curr) {
        stack.push(curr.value);
        curr = curr.next;
      }
      console.log(stack);
    }
  }
}

const stack = new Stack();
stack.addFirst(10);
stack.addFirst(20);
stack.addFirst(30);
stack.addFirst(40);
stack.addMid(50);
stack.removeLast();
stack.removeLast();
stack.display();
