// class Hashtable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }
//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
total = total + key.charCodeAt(i);
//     }
//     return total % this.size;
//   }
//   insert(key, value) {
//     let index = this.hash(key);
//     this.table[index] = value;
//   }
//   search(key) {
//     let index = this.hash(key);
//     return this.table[index];
//   }
//   delete(key) {
//     let index = this.hash(key);
//     this.table[index] = undefined;
//   }
//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }

// const ht = new Hashtable(10);
// ht.insert("one", "apple");
// ht.insert("two", "banana");
// ht.insert("three", "cat");
// ht.display();

// class Hashtable {
//   constructor(size) {
//     this.size = size;
//     this.table = new Array(size);
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }

//   insert(key, value) {
//     let index = this.hash(key);
//     let bucket = this.table[index];
//     if (!bucket) {
//       bucket = [[key, value]];
//     } else {
//       let samekeyValue = bucket.find((item) => item[0] === key);
//       if (samekeyValue) {
//         samekeyValue[1] = value;
//       } else {
//         bucket.push([key, value]);
//       }
//     }
//   }

//   search(key) {
//     let index = this.hash(key);
//     let bucket = this.table[index];
//     if (bucket) {
//       let samekeyValue = bucket.find((item) => item[0] === key);
//       if (samekeyValue) {
//         return samekeyValue[1];
//       }
//     }
//     return undefined;
//   }

//   delete(key) {
//     let index = this.hash(key);
//     let bucket = this.table[index];
//     if (bucket) {
//       let samekeyValue = bucket.find((item) => item[0] === key);
//       if (samekeyValue) {
//         bucket.splice(bucket.indexOf(samekeyValue), 1);
//       }
//     }
//   }
// }

class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  insert(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      bucket = [[key, value]];
      this.table[index] = bucket;
    } else {
      let samekeyValue = bucket.find((item) => item[0] === key);
      if (samekeyValue) {
        samekeyValue[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  search(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let samekeyValue = bucket.find((item) => item[0] === key);
      if (samekeyValue) {
        return samekeyValue[1];
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let samekeyValue = bucket.find((item) => item[0] === key);
      if (samekeyValue) {
        bucket.splice(bucket.indexOf(samekeyValue), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hts = new Hashtable(10);
hts.insert("one", "apple");
hts.insert("two", "apple");
hts.insert("one", "banana");
hts.insert("one", "cat");
// hts.display();

// Linear probing

class Linear {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  insertLinearProb(key, value) {
    let index = this.hash(key);
    let startIndex = index;
    while (this.table[index] !== null) {
      index = (index + 1) % this.size;
      if (index === startIndex) {
        console.log("Hashtablw full");
        return;
      }
    }
    this.table[index] = [key, value];
  }
  insertQuadProb(key, value) {
    let index = this.hash(key);
    let startIndex = index;
    let i = 1;
    while (this.table[index] !== null) {
      index = (index + i * i) % this.size;
      i++;
      if (startIndex === index) {
        console.log("full");
        return;
      }
    }
    this.table[index] = [key, value];
  }
}

// Rehashing

class RehashingHashTable {
  constructor(size) {
    this.size = size; // Initial size of the hash table
    this.table = new Array(size).fill(null);
    this.count = 0; // Number of key-value pairs in the table
  }

  // Hash function
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  // Insert a key-value pair
  insert(key, value) {
    if (this.loadFactor() > 0.7) {
      console.log("Rehashing...");
      this.rehash();
    }

    let index = this.hash(key);
    while (this.table[index] !== null) {
      if (this.table[index][0] === key) {
        // Key already exists, update the value
        this.table[index][1] = value;
        return;
      }
      index = (index + 1) % this.size; // Linear probing
    }

    // Insert the new key-value pair
    this.table[index] = [key, value];
    this.count++;
  }

  // Search for a key
  search(key) {
    let index = this.hash(key);
    let startIndex = index;

    while (this.table[index] !== null) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.size;

      // Stop if we've looped back to the start
      if (index === startIndex) break;
    }
    return undefined; // Key not found
  }

  // Load factor calculation
  loadFactor() {
    return this.count / this.size;
  }

  // Rehashing logic
  rehash() {
    let oldTable = this.table; // Store the old table
    this.size *= 2; // Double the size of the hash table
    this.table = new Array(this.size).fill(null); // Create a new table
    this.count = 0; // Reset the count

    // Reinsert all key-value pairs into the new table
    for (let bucket of oldTable) {
      if (bucket !== null) {
        this.insert(bucket[0], bucket[1]);
      }
    }
  }

  // Display the hash table
  display() {
    for (let i = 0; i < this.size; i++) {
      console.log(i, this.table[i]);
    }
  }
}

// Example Usage
const hashTable = new RehashingHashTable(5);

// Insert key-value pairs
hashTable.insert("apple", 10);
hashTable.insert("banana", 20);
hashTable.insert("cherry", 30);
hashTable.insert("date", 40);
hashTable.insert("elderberry", 50); // Triggers rehashing

console.log("After Rehashing:");
hashTable.display();

console.log("Search for 'banana':", hashTable.search("banana")); // Output: 20

// function insertion(arr) {
//   let n = arr.length;

//   for (let i = 1; i < n; i++) {
//     let sort = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > sort) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = sort;
//   }
//   return arr;
// }

// console.log(insertion([1, 6, 5, 4, 2, 3, 9]));
