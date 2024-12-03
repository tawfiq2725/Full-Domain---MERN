class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  addElement(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insert(this.root, node);
    }
  }

  insert(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insert(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insert(root.right, node);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value < value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // BFS

  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  Inorder(root) {
    if (root) {
      this.Inorder(root.left);
      console.log(root.value);
      this.Inorder(root.right);
    }
  }

  Postorder(root) {
    if (root) {
      this.Postorder(root.left);
      this.Postorder(root.right);
      console.log(root.value);
    }
  }

  //   dfs

  dfs() {
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  //   Minimum node

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  //   Maximum node
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteElement(this.root, value);
  }

  deleteElement(root, value) {
    if (!root) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteElement(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteElement(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteElement(root.right, root.value);
    }
    return root;
  }

  height(root) {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }

  countLeaves(root) {
    if (!root) {
      return 0;
    }
    if (!root.left && !root.right) {
      return 1;
    }
    return this.countLeaves(root.left) + this.countLeaves(root.right);
  }

  // find kth largest
  kthLargest(root, k) {
    let count = 0;
    let stack = [];
    while (root || stack.length > 0) {
      while (root) {
        stack.push(root);
        root = root.right;
      }
      root = stack.pop();
      count += 1;
      if (count === k) {
        return root.value;
      }
      root = root.left;
    }
    return null;
  }

  // kth smallest
  kthSmallest(root, k) {
    let count = 0;
    let stack = [];
    while (root || stack.length > 0) {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      count += 1;
      if (count === k) {
        return root.value;
      }
      root = root.right;
    }
  }

  isValid(root, min = -Infinity, max = Infinity) {
    if (!root) {
      return true;
    }
    if (root.value <= min && root.value >= max) {
      return false;
    }

    return (
      this.isValid(root.left, min, root.value) &&
      this.isValid(root.right, root.value, max)
    );
  }

  // Function to find the degree of a node
  findDegree(node) {
    let degree = 0;

    // Check for left child
    if (node.left !== null) {
      degree++;
    }

    // Check for right child
    if (node.right !== null) {
      degree++;
    }

    return degree; // Return the degree (0, 1, or 2)
  }

  findClosest(root, target) {
    let close = root.value;
    while (root) {
      if (Math.abs(root.value - target) < Math.abs(close - target)) {
        close = root.value;
      }
      if (target < root.value) {
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return close;
  }
}

const tree = new BinarySearchTree();
tree.addElement(10);
tree.addElement(20);
tree.addElement(30);
tree.addElement(40);
tree.addElement(50);
tree.addElement(60);
tree.addElement(70);
tree.Inorder(tree.root);
console.log("----------");
console.log(tree.findClosest(tree.root, 50));
// console.log(tree.min(tree.root));
// console.log("----------");
// console.log(tree.max(tree.root));
// console.log("----------");
// console.log(tree.height(tree.root));

function isIdentical(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2 || root1.value !== root2.value) {
    return false;
  }
  return (
    isIdentical(root1.left, root2.left) && isIdentical(root1.right, root2.right)
  );
}
