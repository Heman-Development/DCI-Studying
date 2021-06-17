import "../style/style.scss";
import { users } from "./data";

/* 
    - check the given username and password with our datasource
    - if user already registered set a flage together with full name inside browser
    - set another flag for remember me to keep data about that user
    - the data should be there even after closing the browser window


*/

let uname = document.querySelector("#loginName");
let pass = document.querySelector("#loginPassword");
let rememberMe = document.querySelector("#loginCheck");
let signin = document.querySelector("#signin-btn");
console.log(signin);

let givenUdata = {};

uname.addEventListener("change", (e) => {
  givenUdata[`${e.target.id}`] = e.target.value;
  console.log(givenUdata);
});

pass.addEventListener("change", (e) => {
  givenUdata[`${e.target.id}`] = e.target.value;
  console.log(givenUdata);
});

rememberMe.addEventListener("change", (e) => {
  givenUdata[`${e.target.id}`] = e.target.checked;
  console.log(givenUdata);
});




signin.addEventListener('click', (e) => {
    console.log(e.target);
    e.preventDefault()
    if(givenUdata.loginName && givenUdata.loginPassword){
        sessionStorage.setItem('isLoggedIn', false)
        for (let user of users) {
            if(user.uname == givenUdata.loginName && user.pass == givenUdata.loginPassword) {
                sessionStorage.setItem('isLoggedIn', true);
            }     
        }
    }
})