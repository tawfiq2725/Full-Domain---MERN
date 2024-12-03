class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Binary {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  addVal(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertValues(this.root, node);
    }
  }

  insertValues(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertValues(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertValues(root.right, node);
      }
    }
  }

  preorder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inorder(root = this.root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  postorder(root = this.root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }

  search(root, value) {
    if (!root) {
      return null;
    } else {
      if (root.value === value) {
        return root.value;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  min(root = this.root) {
    while (root.left) {
      root = root.left;
    }
    return root.value;
  }

  min(root = this.root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root = this.root) {
    while (root.right) {
      root = root.right;
    }
    return root.right;
  }

  max(root = this.root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  // height of the tree
  height(root = this.root) {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }

  // depth of the tree
  depth(root = this.root) {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(this.depth(root.left), this.depth(root.right));
  }

  // degree of the tree
  degree(root = this.root) {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(this.degree(root.left), this.degree(root.right));
  }

  // leaves of the tree
  leaves(root = this.root) {
    if (!root) {
      return 0;
    }
    if (!root.left && !root.right) {
      return 1;
    }
    return this.leaves(root.left) + this.leaves(root.right);
  }

  // degree of node
  findDegree(node) {
    let degree = 0;
    if (node.left !== null) {
      degree++;
    }
    if (node.right !== null) {
      degree++;
    }
    return degree;
  }

  // find kth largest element
  findKthLargest(root = this.root, k) {
    if (!root) {
      return null;
    }
    return this.findKthLargest(root.right, k);
  }
}

const tree = new Binary();
tree.addVal(5);
tree.addVal(3);
tree.addVal(7);
tree.addVal(2);
tree.addVal(4);
tree.addVal(6);
tree.addVal(8);
tree.addVal(1);
tree.addVal(9);
tree.inorder();
tree.preorder();
console.log(tree.findKthLargest(2));
