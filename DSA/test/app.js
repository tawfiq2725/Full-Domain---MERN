// function timer() {
//   let count = 0;
//   let timer = setInterval(() => {
//     console.log("hello");
//     count++;

//     if (count === 5) {
//       clearInterval(timer);
//     }
//   }, 1000);
// }
// timer();

// 1
// 2
// 3
// 4
// 5

// function timer() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// timer();

// let string = "malaylam";
// function isPalindrome(str) {
//   let string2 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     string2 = string2 + str[i];
//   }

//   return str === string2;
// }
// console.log(isPalindrome(string));

// let string = "cat"
// for(let i=string.length; i>=0 ; i--)

// let snakcase = "this_is_snake_case";

// function caseI(stri) {
//   let str = stri.split("_");
//   let newr = [];
//   for (let word of str) {
//     newr.push(word.indexOf().toUpperCase()+);
//   }
//   return newr;
// }
// console.log(caseI(snakcase));
// let camelcase = "thisIsSnakeCase";

// let today = new Date().toLocaleDateString();
// console.log(today);

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("mam"));
