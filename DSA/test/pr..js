// let object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// let structure = structuredClone(object);
// structure.a = 10;
// console.log(structure);
// console.log(object);

// let string = "Hello World 45 Hello World 45";
// let numbers = string.match(/\d+/g).map((n) => {
//   return parseInt(n);
// });
// console.log(numbers);

// let a = 10;
// let b = 20;
// eval('let result = a + b');
// console.log(result); // 30

// Today
let date = new Date().toLocaleDateString();
console.log(date);

// Tomorrow
let date1 = new Date();
// let Tomorrow = new Date(date1);
let yesterday = new Date(date1);
// Tomorrow.setDate(Tomorrow.getDate() + 1);
yesterday.setDate(yesterday.getDate() - 1);
// console.log(Tomorrow.toLocaleDateString());
// console.log(yesterday.toLocaleDateString());

// let obj = {
//   name: "tawfiq",
//   age: 21,
// };

// function getName() {
//   return `hello ${this.name}`;
// }

// console.log(getName.call(obj));

// example of apply

// let obj = { name: "tawfiq", age: 21 };
// function getName(company, salary) {
//   return `hello ${this.name}` + " " + company + " " + salary;
// }

// console.log(getName.apply(obj, ["google", 10000]));

// example of bind

// let obj = { name: "tawfiq", age: 21 };
// function getName(company, salary) {
//   return `hello ${this.name}` + " " + company + " " + salary;
// }

// let getName1 = getName.bind(obj, "google", 10000);
// console.log(getName1());
