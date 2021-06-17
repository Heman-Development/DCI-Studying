// Review from yesteday

// ways to initialize arrays
// 1-
const arr1 = [];
// 2-
const arr2 = ["Good", "Day"];
// 3-
const arr3 = new Array();
// 4-
const newArr = Array.of(1, 44, 55, 6);

// .sort()
// to sort the elements in an array
// will use the UTF-16 code
let alpha = ["c", "b", "a", "1", "$"];
let newSortAlpha = alpha.sort();
console.log(newSortAlpha);
//Order for it: Special character, number and roman letter

// .reverse()
// To reverse an array aka first is last and last is first
let crazyArr = ["3", "55", "2"];
let crazyArrRe = crazyArr.reverse();
console.log(crazyArrRe);

//Array.isArray()
//true or false
let bool = Array.isArray(crazyArr);
console.log(bool);
console.log(Array.isArray("1 2 4"));

// .lastIndexOf()
// Will star searching backwards
// -1 means nothing been found

const arr4 = ["go", "we", "home", "we", "I"];
console.log(arr4.lastIndexOf("we"));
console.log(arr4.indexOf("we"));

//.fill()
// (what, from , to) => (0, 1, 2)
let arr5 = [22, 33, 6, 4, 3, 5];
let newArr5 = arr5.fill(101, 1, 3);
console.log(newArr5);

console.log("--------doLoop------------");
// do

// begining of the loop
let counter = 0;
do {
  //what to do
  console.log(`My counter = ${counter}`);
  counter++;
  //end of it
  let count = 0;
  do {
    console.log(`My count = ${count}`);
    count++;
  } while (count < 2);
} while (/*condition to continue looping*/ counter < 10);

console.log("--------whileLoop------------");
//while
let loopOne = 0;
while (loopOne < 5) {
  loopOne++;
  console.log(loopOne);
}

console.log("-------forLoop-------------");
for (let i = 0; i < 10; ) {
  //do things
  console.log(i);
  i++;
}
