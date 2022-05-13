"use strict";
const mainContainer = document.getElementById("mainContainer");

const fetchPosts = fetch("http://localhost:3000/posts");
fetchPosts
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    // console.log(data);
    data.map((post) => {
      const title = post.title;
      const body = post.body;
      console.log(title);
      console.log(body);
      
      const postTitle = document.createElement("h2");
      const postBody = document.createElement("p");
      postTitle.textContent = title;
      postBody.textContent = body;
      postsMain.append(postTitle, postBody);
      // postsMain.append(postBody);

      // document.getElementById("po").className = " newClass";  
      
    });
  });
