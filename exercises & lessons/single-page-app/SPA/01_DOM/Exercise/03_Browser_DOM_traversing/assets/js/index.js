//1.
let h1 = document.querySelector("h1");
let header = h1.closest("header");
header.style.border = "solid 5px darkblue";

//2.
let infos = document.querySelectorAll(".info");
infos.forEach((info) => {
  let infoChildren = info.children;

  for (let i = 0; i < infoChildren.length; i++) {
    let isContain = infoChildren[i].classList.contains("info-package");
    if (isContain) {
      childOfInfoChildren = infoChildren[i].children;
      for (let j = 0; j < childOfInfoChildren.length; j++) {
        const pTitle = childOfInfoChildren[j].classList.contains(
          "package-title"
        );
        if (pTitle) {
          childOfInfoChildren[j].previousElementSibling.style.border =
            "solid blue 2px";
        }
      }
    }
  }
});

//3.
let labels = document.querySelectorAll("label");

labels.forEach((label) => {
  if (label.matches(".mild")) {
    label.style.borderBottom = "solid yellow 2px";
  } else if (label.matches(".intense")) {
    label.style.borderBottom = "solid orange 2px";
  } else {
    label.style.borderBottom = "solid red 2px";
  }
});

//4.
//grab all navlist children as a collection
let navChildCollection = document.querySelector(".nav-list").children;
//conver collection to Array
let footerChildArray = [...navChildCollection];

//make a loop over array and clone every node element (li)
//node.cloneNode() is a method that help you to clone a node
footerChildArray.forEach((li) => {
  let newli = li.cloneNode(true);
  document.querySelector(".site-map").appendChild(newli);
});
