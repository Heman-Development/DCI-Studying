// objects
const obj1 = {};
obj1["name"] = "Olga";
console.log(obj1);
const obj2 = {
  username: "Hadi",
};
console.log(obj2);
const obj3 = new Object();
const person = {
  userName: "Zain",
  age: 22,
  add: "Berlin",
};

// Method: Object.entries(objectName)
const arr = Object.entries(person);
console.log(arr); // [[], [], []]

const arrOfArr = [
  [33, 2],
  [22, 3],
  [44, 11],
  [51, 55],
];
console.log(arrOfArr[2][11]);

//
const objects = [
  { name: "Zain", lastName: "Zo" },
  {
    name: "Olga",
    lastName: "do",
    printOut: function () {
      console.log("hi");
    },
  },
];

//dot notation
objects[1].printOut();

//brackets notation
objects[1]["printOut"]();

//primitive: Integers, Strings, Boolean
//It is a clone/copy of the original value
let x = 3;
let z = x;
console.log(z);
z = 55;
console.log(x);

let strLong = "Hi, I am here";
let cloneStr = strLong;
cloneStr = "Noooooo";
console.log(strLong);

//Object
const car = {
  name: "Ford",
  year: "2020",
  color: "Red",
};

let newCar = car; //reference
newCar.name = "BMW";
console.log(car);

// shallow cloning arr
// 1st way, using spread
const names = ["Olga", "Zain", "Nacy", "jack"];
const namesClone = [...names];
namesClone[0] = "Sergio";
console.log(namesClone);
console.log(names);

//2 way, using concat
const newCloneArr = [].concat(names);

//3 way, using concat
const lastWay = names.slice(0);
lastWay[0] = "cool";
console.log(lastWay);

//exercises

/* Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
Examples:
objectToArray({
  A: 1,
  B: 2,
  C: 3
}) 
Expected output:
[["A", 1], ["B", 2], ["C", 3]]*/
const objectToArray = (obj) => {
  return Object.entries(obj);
};
console.log(
  objectToArray({
    A: 1,
    B: 2,
    C: 3,
  })
);

console.log(
  objectToArray({
    cats: 1,
    dogs: 2,
    turtles: 4,
  })
);

/*
List Properties. Create a function that returns an array of properties of a javascript object.
Example
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
Expected output:
["name", "class", "course"]
*/
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
const properties = (obj) => {
  return Object.keys(obj);
};
console.log(properties(student));

/*
Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
Example
let first = {firstName: "John"}
let last = {lastName: "Smith"}
Expected output:
{firstName: "John", lastName: "Smith"} */
let first = { firstName: "John" };
let last = { lastName: "Smith" };

const merge = (obj1, obj2) => {
  return Object.assign(obj1, obj2);
};
console.log(merge(first, last));
