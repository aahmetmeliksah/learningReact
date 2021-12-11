// setTimeout(() => console.log("New beginnings!"), 2000);
// setInterval(() => {
//   console.log("Tic toc!"), 1000;
// });

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => console.log("Hi!"));

import fetch from "node-fetch";
import axios from "axios"; 

// fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
//   data.json()).then((users) => {
//     console.log("fetched users", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) => 
//       data.json())
//       .then((posts) => console.log("fetched post" ,posts))
//     })

/*
async function getData() {

  // get users 
  const { data: users } = await axios("https://jsonplaceholder.typicode.com/users"
    );
    
    // get post 1
    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1"
  );
  
  // get post 2
  const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2"
  );

  // console.log users and post1 and post2 
  console.log(users);
  console.log("post1 is uploaded", post1);
  console.log("post2 is uploaded", post2);
}

getData();
*/

const getComments = (n) => {
  return new Promise((resolve, reject) => {

    if (n === 1) {
      resolve({ text: "Comment" }); 
    }

    reject({ text: "Rejected" });

  })
}

getComments(0)
.then((data) => console.log(data))
.catch((e) => console.log(e))