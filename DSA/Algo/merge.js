function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergesort(left), mergesort(right));
}
function merge(left, right) {
  let i = 0,
    j = 0,
    sort = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sort.push(left[i]);
      i++;
    } else {
      sort.push(right[j]);
      j++;
    }
  }

  return sort.concat(left.slice(i)).concat(right.slice(j));
}
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array (Merge Sort):", mergesort(numbers));

function ms(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(ms(left), ms(right));
}

function merge(left, right) {
  let sort = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sort.push(left[i]);
      i++;
    } else {
      sort.push(right[j]);
      j++;
    }
  }
  return sort.concat(left.slice(i)).concat(right.slice(j));
}
// console.log(ms([6, 4, 7, 3, 8, 2, 9]));
