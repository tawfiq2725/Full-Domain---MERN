// bubble sort

let array = [7, 5, 4, 7, 8, 9, 1, 2, 4, 3];
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swap = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    if (!swap) {
      break;
    }
  }
  return arr;
}
console.log(bubbleSort(array));
