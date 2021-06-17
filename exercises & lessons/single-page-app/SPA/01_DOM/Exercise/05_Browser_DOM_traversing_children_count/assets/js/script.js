//1.1
let wrapperChildren = document.getElementById("wrapper").children;
//console.log(wrapperChildren);

//1.2
let wrapperChildrenArray = Array.from(wrapperChildren);

wrapperChildrenArray.forEach((elem) => {
  //print grand child of #wrapper
  console.log(elem.children);
  console.log(`${elem.localName} has ${elem.childElementCount}`);
  //elem.children.length    alternative for     elem.childElementCount
});

//2.
function findElemWithHigherClasses(collectionElem) {
  let maxelem = null;
  let maxClasses = 0;

  for (let i = 0; i < collectionElem.length; i++) {
    console.log(maxelem, " ", maxClasses);
    if (collectionElem[i].classList.length > maxClasses) {
      maxelem = collectionElem[i];
      maxClasses = collectionElem[i].classList.length;
    }
  }

  return {
    element: maxelem,
    numberOfClasses: maxClasses,
  };
}

let result = findElemWithHigherClasses(wrapperChildren);
console.log(result);

//2. alternative solution
function alternativeHigherClasses(collection) {
  //to convert a collection to an array
  //let arrayofElem = [...collection];
  let arrayOfelem = Array.from(collection);

  //sort the array of element based on number of classes
  arrayOfelem.sort((elemA, elemB) => {
    //to swap the element after comparison number of classes
    if (elemA.classList.length < elemB.classList.length) {
      return 1;
    } else if (elemA.classList.length > elemB.classList.length) {
      return -1;
    } else {
      //if they are equal
      return 0;
    }
  });

  //if the element sorted from max to min, then first element has highest number of classes
  return {
    element: arrayOfelem[0],
    numberOfClasses: arrayOfelem[0].classList.length,
  };
}

console.log(alternativeHigherClasses(wrapperChildren));
