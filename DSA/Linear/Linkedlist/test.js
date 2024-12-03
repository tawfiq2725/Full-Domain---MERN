// Linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  isEmpty() {
    return this.root === null;
  }

  getSize() {
    return this.size;
  }

  contains(value) {
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
    }
    return false;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      node.next = this.root;
      this.root = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      let curr = this.root;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  addAt(index, value) {
    if (this.contains(value)) {
      console.log("Value already exists");
      return;
    }
    const node = new Node(value);
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    }
    if (index === this.size) {
      this.append(value);
    }
    let curr = this.root;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = node;
    this.size++;
  }

  delete(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");

      return;
    }
    let remove;
    if (index === 0) {
      remove = this.root;
      this.root = this.root.next;
      this.size--;
    } else {
      let curr = this.root;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      remove = curr.next;
      curr.next = curr.next.next;
      this.size--;
    }
    return remove;
  }

  deleteMid() {
    if (this.isEmpty()) {
      return;
    }
    let mid = Math.floor(this.size / 2);
    return this.delete(mid);
  }

  deleteVal(value) {
    if (this.isEmpty()) {
      console.log("Empty");
      return;
    }
    let remove;
    if (this.root.value === value) {
      remove = this.root;
      this.root = this.root.next;
    } else {
      let curr = this.root;
      while (curr.next && curr.next.value !== value) {
        curr = curr.next;
      }
      remove = curr.next;
      curr.next = curr.next.next;
    }
    this.size--;
    return remove;
  }

  reverse() {
    if (this.isEmpty()) {
      return;
    } else {
      let curr = this.root;
      let previous = null;
      while (curr) {
        let next = curr.next;
        curr.next = previous;
        previous = curr;
        curr = next;
      }
      this.root = previous;
    }
  }

  display() {
    let list = "";
    let curr = this.root;
    while (curr) {
      list += curr.value + " ";
      curr = curr.next;
    }
    console.log(list);
  }

  removeDuplicates() {
    if (this.isEmpty()) {
      return;
    }
    let curr = this.root;
    while (curr.next) {
      if (curr.value === curr.next.value) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    this.size--;
  }
}

const list = new Linkedlist();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(40);
list.append(50);

// list.display();
// list.deleteMid();
// list.display();

// Merge two linkedlists

const list1 = new Linkedlist();
const list2 = new Linkedlist();

list1.append(10);
list1.append(20);
list1.append(30);
list1.append(40);
list1.append(50);

list2.append(60);
list2.append(70);
list2.append(80);
list2.append(90);
list2.append(100);

list1.display();
list2.display();

function merge(list1, list2) {
  const mergedList = new Linkedlist();
  let curr1 = list1.root;
  let curr2 = list2.root;
  while (curr1 && curr2) {
    if (curr1.value < curr2.value) {
      mergedList.append(curr1.value);
      curr1 = curr1.next;
    } else {
      mergedList.append(curr2.value);
      curr2 = curr2.next;
    }
  }
  while (curr1) {
    mergedList.append(curr1.value);
    curr1 = curr1.next;
  }
  while (curr2) {
    mergedList.append(curr2.value);
    curr2 = curr2.next;
  }
  return mergedList;
}

const mergedList = merge(list1, list2);

mergedList.display();

// const inputArray = [1, 3, 2, 5, 7, 8, 9, 11, 4];
// function adJacent(arr){
//   let i=0 , array = [];
//   while(i<arr.length){
//     if(arr[i]%2 !==0 && arr[i+1]%2 !==0){
//       array.push(arr[i])
//       i+=2
//     }else{
//       array.push(arr[i])
//       i++
//     }
//   }
//   return array
// }
// console.log(adJacent(inputArray))
