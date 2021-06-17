import { user } from "./datasource.js";

let JSuser = JSON.parse(user);
let div = document.querySelector("#user");
debugger;
for (let prop in JSuser) {
  let span = document.createElement("span");
  span.innerText = prop;
  div.appendChild(span);
}

function TestDebugging(par) {
  console.log(par);
}
TestDebugging("Debugging");
