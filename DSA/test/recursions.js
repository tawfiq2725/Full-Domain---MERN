// fibbonacci
function fibbonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibbonacci(n - 1) + fibbonacci(n - 2);
  }
}

function fibbonacciPrint() {
  for (let i = 0; i <= 10; i++) {
    console.log(fibbonacci(i));
  }
}
// console.log(fibbonacciPrint());

function factorial(a) {
  if (a <= 1) {
    return 1;
  }
  return factorial(a - 1) * a;
}
// console.log(factorial(5));

// isPrime

function isPrime(n, divisor = 2) {
  if (n < 2) {
    return false;
  }

  if (divisor > Math.sqrt(n)) {
    return true;
  }

  if (n % divisor === 0) {
    return false;
  }

  return isPrime(n, divisor + 1);
}
// console.log(isPrime(11));

// ṣum of arrays
let array = [1, 2, 3, 4, 5];
function sum(arr, index = 0) {
  if (arr.length === index) {
    return 0;
  }
  return arr[index] + sum(arr, index + 1);
}
// console.log(sum(array));

function sumofEven(arr, index = 0) {
  if (arr.length === index) {
    return 0;
  }

  return (arr[index] % 2 === 0 ? arr[index] : 0) + sumofEven(arr, index + 1);
}
// console.log(sumofEven(array));

function sumofOdd(arr, index = 0) {
  if (arr.length === index) {
    return 0;
  }

  return (arr[index] % 2 !== 0 ? arr[index] : 0) + sumofOdd(arr, index + 1);
}
// console.log(sumofOdd(array));

// reverse string

let string = "mam";
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
// console.log(reverseString(string));

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome(string));

// Binary search using recursion

function BinarySearch() {}
