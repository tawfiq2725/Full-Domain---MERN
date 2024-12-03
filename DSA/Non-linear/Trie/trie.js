// class Node {
//   constructor() {
//     this.child = {};
//     this.isEnd = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new Node();
//   }

//   insert(word) {
//     let curr = this.root;
//     for (let key of word) {
//       if (!curr.child[key]) {
//         curr.child[key] = new Node();
//       }
//       curr = curr.child[key];
//     }
//     curr.isEnd = true;
//   }

//   search(word) {
//     let curr = this.root;
//     for (let char of word) {
//       if (!curr.child[char]) {
//         return false;
//       }
//       curr = curr.child[char];
//     }
//     return curr.isEnd;
//   }

//   startswith(prefix) {
//     let curr = this.root;
//     for (let char of prefix) {
//       if (!curr.child[char]) {
//         return false;
//       }
//       curr = curr.child[char];
//     }
//     return true;
//   }

//   collector(node, prefix, word) {
//     if (node.isEnd) {
//       word.push(prefix);
//     }
//     for (let key in node.child) {
//       this.collector(node.child[key], prefix + key, word);
//     }
//   }

//   getwords() {
//     const words = [];
//     this.collector(this.root, "", words);
//     return words;
//   }
// }

// const trie = new Trie();
// trie.insert("apple");
// trie.insert("app");
// console.log(trie.getwords());

// class TrieNode {
//   constructor() {
//     this.children = {}; // Maps characters to TrieNode
//     this.isEndOfWord = false; // Indicates if this node is the end of a word
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new TrieNode(); // Root node of the Trie
//   }

//   // Insert a word into the Trie
//   insert(word) {
//     let currentNode = this.root;
//     for (const char of word) {
//       if (!currentNode.children[char]) {
//         currentNode.children[char] = new TrieNode();
//       }
//       currentNode = currentNode.children[char];
//     }
//     currentNode.isEndOfWord = true; // Mark the end of the word
//   }

//   // Search for a word in the Trie
//   search(word) {
//     let currentNode = this.root;
//     for (const char of word) {
//       if (!currentNode.children[char]) {
//         return false; // Word does not exist
//       }
//       currentNode = currentNode.children[char];
//     }
//     return currentNode.isEndOfWord; // Return true if it's a valid word
//   }

//   // Check if any word starts with the given prefix
//   startsWith(prefix) {
//     let currentNode = this.root;
//     for (const char of prefix) {
//       if (!currentNode.children[char]) {
//         return false; // Prefix does not exist
//       }
//       currentNode = currentNode.children[char];
//     }
//     return true; // Prefix exists
//   }

//   // Helper function to collect all words from a node
//   _collectWords(node, prefix, words) {
//     if (node.isEndOfWord) {
//       words.push(prefix);
//     }
//     for (const char in node.children) {
//       this._collectWords(node.children[char], prefix + char, words);
//     }
//   }

//   // Get all words stored in the Trie
//   getAllWords() {
//     const words = [];
//     this._collectWords(this.root, "", words);
//     return words;
//   }

//   // Get words starting with a given prefix (autocomplete suggestions)
//   autocomplete(prefix) {
//     let currentNode = this.root;
//     for (const char of prefix) {
//       if (!currentNode.children[char]) {
//         return []; // No words with the given prefix
//       }
//       currentNode = currentNode.children[char];
//     }
//     const words = [];
//     this._collectWords(currentNode, prefix, words);
//     return words;
//   }
// }

class Node {
  constructor() {
    this.child = {};
    this.isEnd = false;
  }
}

class Triie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let key of word) {
      if (!curr.child[key]) {
        curr.child[key] = new Node();
      }
      curr = curr.child[key];
    }
    curr.isEnd = true;
  }

  search(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.child[char]) {
        return false;
      }
      curr = curr.child[char];
    }
    return curr.isEnd;
  }

  startsWith(prefix) {
    let curr = this.root;
    for (let char of prefix) {
      if (!curr.child[char]) {
        return false;
      }
      curr = curr.child[char];
    }
    return true;
  }

  collectWords(node, prefix, words) {
    if (node.isEnd) {
      words.push(prefix);
    }
    for (let key in node.child) {
      this.collectWords(node.child[key], prefix + key, words);
    }
  }

  autoComplete(prefix) {
    let curr = this.root;
    for (let char of prefix) {
      if (!curr.child[char]) {
        return [];
      }
      curr = curr.child[char];
    }
    const words = [];
    this.collectWords(curr, prefix, words);
    return words;
  }
}
