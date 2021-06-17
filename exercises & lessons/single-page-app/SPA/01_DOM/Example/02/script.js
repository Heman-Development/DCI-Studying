function manipulateClassList() {
  // step1. select element
  // step2. reading the classList
  // step3. manipulate the list of classes (add, remove, toggle)

  let firstPar = document.querySelector("p");
  let classes = firstPar.classList;
  console.log(classes);

  //add a new class
  firstPar.classList.add("newClass");
  console.log(firstPar.classList);

  //remove a class
  firstPar.classList.remove("text-light");
  console.log(firstPar.classList);
}

function toggleClass() {
  let allP = document.querySelectorAll("p");
  for (let i = 0; i < allP.length; i++) {
    allP[i].classList.toggle("text-secondary");
  }
}

function addHeading() {
  //step1. create the element
  let newElement = document.createElement("h3");
  // add some text for heading
  newElement.innerText = "Welcome to DOM module";

  //step2. injecting element as a child of another element
  document.querySelector("#article").appendChild(newElement);
}

function getChildNodes(element) {
  console.log(element.childNodes);
}

function getParentNode(element) {
  console.log(element.parentNode);
}

function getFirstChild(element) {
  console.log("firstchild:");
  console.log(element.firstChild);
  console.log("lastchild: ");
  console.log(element.lastChild);
}

function getSibilings(element) {
  console.log("previous sibling");
  console.log(element.previousSibling);
  console.log("next sibling");
  console.log(element.nextSibling);
}

//check the type of Nodes
let button = document.querySelector(".btn");
console.log("nodeType: ", button.nodeType);

let head = document.querySelector("head");
console.log(head.childNodes);

let body = document.querySelector("body");
console.log("body sibling");
console.log(body.children);

let par5 = document.querySelector("#parag-5");
console.log(par5);
console.log(par5.closest("button"));
