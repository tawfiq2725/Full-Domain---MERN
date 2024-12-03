class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }

  delete(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let remove;
    if (index === 0) {
      remove = this.head;
      this.head = this.head.next;
    } else {
      let cur = this.head;
      for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
      }
      remove = cur.next;
      cur.next = remove.next;
    }
    this.size--;
    return remove.value;
  }

  display() {
    let ll = [];
    let curr = this.head;
    while (curr) {
      ll.push(curr.value);
      curr = curr.next;
    }
    console.log(ll);
  }
}

const link = new Linkedlist();
link.prepend(10);
link.prepend(20);
link.append(30);
link.display();
