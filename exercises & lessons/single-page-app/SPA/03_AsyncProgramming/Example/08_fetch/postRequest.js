//placeholder API guide: https://jsonplaceholder.typicode.com/guide/

function addPost(t, b, uid) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: t,
      body: b,
      userId: uid,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

let inputs = document.querySelectorAll(".form-control");
let post = { title: "", body: "", uId: 0 };

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    post[`${e.target.id}`] = e.target.value;
    console.log(post);
  });
});

let button = document.querySelector("input[type='button']");
button.addEventListener("click", (e) => {
  addPost(post.title, post.body, parseInt(post.uId));
});
