const h3 = document.querySelector("h3");

//add event listener
h3.addEventListener("click", function () {
  alert("h3 is clicked");
});

h3.nextElementSibling.addEventListener("mousedown", () => {
  alert("event fired");
});

/* 
function func1(cb) {
    console.log('content of func1');
    cb();
}

func1(() => {
    console.log('this is callback function');
}) */
