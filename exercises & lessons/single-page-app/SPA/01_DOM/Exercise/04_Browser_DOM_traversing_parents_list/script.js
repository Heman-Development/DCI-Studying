function elementTree(element, str) {
  if (element.parentElement) {
    str += element.localName + " > ";
    elementTree(element.parentElement, str);
  } else {
    str += element.localName;
    console.log(str);
    return null;
  }
}
let result = "";
let mystr = elementTree(document.querySelector("section"), result);

document.querySelector("button").addEventListener("click", () => {
  //change the theme
  document.body.style.backgroundColor = "#300000";
  document.querySelector("p").style.color = "white";
  
});
