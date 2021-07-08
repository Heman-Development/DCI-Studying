import "./style/style.scss";

console.log("Hello World!");

//read form data
let inputs = document.querySelectorAll(".form-control");
let data = { body: "", title: "", userId: 0 };
inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    data[`${e.target.name}`] = e.target.value; //data.title = 'title'
    console.log(data);
  });
});

//send post request upon clicking on Register button
let button = document.querySelector('input[type="button"]');
button.addEventListener("click", async (e) => {
  //send request
  let url = "https://jsonplaceholder.typicode.com/posts";
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let respJson = await response.json();

  let span = document.createElement("span");
  span.innerText = "Body:" + respJson.body;
  document.body.appendChild(span);
});
