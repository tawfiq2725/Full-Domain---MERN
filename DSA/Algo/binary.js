// normal method

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 2, 5, 7, 8, 9, 4, 3, 5], 8));

function binary(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
console.log(binary([1, 2, 37, 5, 4, 78], 23));

// recursive method
function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1; // Base case: Target not found
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid; // Base case: Target found
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, high); // Search right half
  } else {
    return binarySearchRecursive(arr, target, low, mid - 1); // Search left half
  }
}

// Example
let sortedArr = [10, 20, 30, 40, 50];
console.log(binarySearchRecursive(sortedArr, 30)); // Output: 2
console.log(binarySearchRecursive(sortedArr, 60)); // Output: -1

function linearSearchRecursive(arr, target, index = 0) {
  if (index >= arr.length) {
    return -1; // Base case: Target not found
  }
  if (arr[index] === target) {
    return index; // Base case: Target found
  }
  return linearSearchRecursive(arr, target, index + 1); // Recursive call
}

// Example
let arr = [10, 20, 30, 40, 50];
console.log(linearSearchRecursive(arr, 30)); // Output: 2
console.log(linearSearchRecursive(arr, 60)); // Output: -1
