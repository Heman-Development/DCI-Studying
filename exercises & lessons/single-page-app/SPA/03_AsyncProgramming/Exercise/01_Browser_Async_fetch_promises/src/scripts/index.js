// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

//produce the promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(document.getElementById("myModal"));
  }, 3000);
});

//conumer of the promise
promise.then((modal) => {
  modal.style.display = "block";
  let close = document.querySelector(".close");
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
