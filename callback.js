// setTimeout(() => console.log("New beginnings!"), 2000);
// setInterval(() => {
//   console.log("Tic toc!"), 1000;
// });

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => console.log("Hi!"));

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
//   data.json()).then((users) => {
//     console.log("fetched users", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) => 
//       data.json())
//       .then((posts) => console.log("fetched post" ,posts))
//     })

async function getData() {

  // fetch users
  const dataUsers = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    console.log(dataUsers);

    // fetch post 1
  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  console.log("post1 is uploaded", post1);

  // fetch post 2
  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();
  console.log("post2 is uploaded", post2);
}

getData();