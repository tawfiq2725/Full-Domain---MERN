// import express from "express";
// const app = express();

// const PORT = process.env.PORT;
// console.log(process.env.PORT);

// app.use(express.json());

// app.get("/", (req, res) => {
//   const { name, age } = req.body;
//   console.log(name, age);
//   res.status(200).json({ message: "success" });
// });

// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });

// import express from "express";
// const app = express();

// app.use((req, res, next) => {
//   console.log(`Request Method: ${req.method}`);
//   next();
// });

// // app.get("/ho", (req, res) => {
// //   res.send("GET Request");
// // });

// app.post("/submit", (req, res) => {
//   res.send("POST Request");
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

// import EventEmitter from "events";

// const myEmitter = new EventEmitter();

// myEmitter.on("talk", (who) => {
//   console.log(who + " speaking");
// });

// myEmitter.emit("talk", "man");

import fs from "fs";

let date = new Date().toLocaleString();
let yesterdat = new Date(date);
yesterdat.setDate(yesterdat.getDate() - 1);

// let data = yesterdat.toString();

// fs.writeFile("output2.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done-as");
//   }
// });
let data = "this is updated data";
// fs.appendFile("output.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.link("output.txt", "output3.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.unlink("output3.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.stat("output.txt", (err, data) => {
//   if (err) {
//     console.log("error");
//   } else {
//     console.log("done");
//     console.log(data.isFile());
//     console.log(data.size);
//     console.log(data.isDirectory());
//   }
// });

// fs.mkdir("new", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// fs write synchronous

// fs.writeFileSync("output.txt", data);
// console.log("done");

// what is eval() => it is used to execute the code in javascript file as a string code or expression
// const code = "console.log(5+2)";
// eval(code);

import express from "express";
const app = express();

app.get("/", (req, res) => {
  const { a, b } = req.query;
  let num = Number(a);
  let num2 = Number(b);
  console.log(a, b);
  const sum = num + num2;
  res.json({ sum });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
