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

  add(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertVal(this.root, node);
    }
  }

  insertVal(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertVal(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertVal(root.right, node);
      }
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }
  preorder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
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
      console.log("no");
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  minimum(root = this.root) {
    while (root.left) {
      root = root.left;
    }
    return root.value;
  }

  maximum(root = this.root) {
    while (root.right) {
      root = root.right;
    }
    return root.value;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) {
      return null;
    }

    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.minimum(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root.value;
  }

  height(root = this.root) {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }

  degree(root = this.root) {
    let degree = 0;
    if (!root) {
      return 0;
    }

    if (root.left !== null) {
      degree++;
    }

    if (!root.right !== null) {
      degree++;
    }
    return degree;
  }

  /*************  ✨ Codeium Command 🌟  *************/
  /**
   * Finds if the given value is an ancestor of the given root.
   * @param {Node} root - The root of the tree.
   * @param {number} value - The value to search for.
   * @returns {boolean} True if the value is an ancestor of the root, false otherwise.
   */
  ancestors(root, value) {
    // If the root is null, the value is not an ancestor.
    if (!root) {
      return false;
    }

    // If the root's value matches the value, it is an ancestor.
    if (root.value === value) {
      return true;
    }

    // Recursively search the left and right subtrees for the value.
    return (
      this.ancestors(root.left, value) || this.ancestors(root.right, value)
    );
  }
  /******  7e45e198-18f9-460e-b630-43df63a5a12b  *******/

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

  areIdentical(root1, root2) {
    if (!root1 && !root2) {
      return true;
    }
    if (!root1 || !root2 || root1.value !== root2.value) {
      return false;
    }
    return (
      this.areIdentical(root1.left, root2.left) &&
      this.areIdentical(root1.right, root2.right)
    );
  }

  findClosest(root, target) {
    let closest = root.value;
    while (root) {
      if (Math.abs(root.value - target) < Math.abs(closest - target)) {
        closest = root.value;
      }
      if (root.value > target) {
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return closest;
  }

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
  }

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
}

const b = new Binary();
b.add(10);
b.add(20);
b.add(30);
b.add(40);
// b.inorder();
// console.log("Minimum : " + b.minimum());
// console.log("Maximum : " + b.maximum());
// console.log("Search : " + b.search(b.root, 43));
b.inorder(b.root);
// console.log("-----");
// console.log("-----");
// b.delete(10);
// b.inorder(b.root);
console.log(b.root);

console.log("-----");
console.log(b.height(b.root));

console.log("-----");
console.log(b.degree(b.root));
