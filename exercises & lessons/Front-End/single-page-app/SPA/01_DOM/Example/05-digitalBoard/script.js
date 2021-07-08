let cells = document.querySelectorAll("td");


cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.classList.toggle("bg-dark");
  });
});

let startBtn = document.querySelector("#start");
startBtn.addEventListener("click", () => {
  //step1. grabb all black cells
  let blackCells = document.querySelectorAll(".bg-dark");
  //step2. set the class to next siblings of black cells
  blackCells.forEach((bcell) => {
    bcell.previousElementSibling.classList.add("bg-dark");
    bcell.classList.remove("bg-dark");
  });
});


