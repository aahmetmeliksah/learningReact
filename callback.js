// setTimeout(() => console.log("New beginnings!"), 2000);
// setInterval(() => {
//   console.log("Tic toc!"), 1000;
// });

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => console.log("Hi!"));

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
  console.log(data)
);
