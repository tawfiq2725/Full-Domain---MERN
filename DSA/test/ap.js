// function QuickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...QuickSort(left), pivot, ...QuickSort(right)];
// }
// console.log(QuickSort([2, 3, 1, 7, 5, 4, 9]));

// function Merge(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let mid = arr.length / 2;
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   return MergeSort(Merge(left), Merge(right));
// }

// function MergeSort(left, right) {
//   let sort = [],
//     i = 0,
//     j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       sort.push(left[i]);
//       i++;
//     } else {
//       sort.push(right[j]);
//       j++;
//     }
//   }

//   return sort.concat(left.slice(i)).concat(right.slice(j));
// }
// console.log(Merge([1, 5, 7, 2, 3, 4, 7, 8, 9]));

function insertion(arr) {
  let n = arr.length;

  for (i = 1; i < n; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}
console.log(insertion([1, 5, 7, 2, 3, 4, 7, 8, 9]));
