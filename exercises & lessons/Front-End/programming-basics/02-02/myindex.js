// Objects
// keys, properties : value
// Object Literal
const userObj = {
  name: "Nancy",
  lastName: "Sad",
  age: 33,
  add: "xxx str",
  act: ["draw", "sleep", "eat"],
  fta: true,
};
console.log(userObj.name);
console.log(typeof userObj);

// Accessing properties
// 1- With bracket notion
console.log(userObj["act"][2]);

//2- with (dot notion);
console.log(userObj.name);

//That is how we fill the objects on the go
//Declare it empty
const obj2 = {};

//Fill it as the need comes up, with the bracketNotation
obj2["age"] = 31;

//Whenever want to acess the value or manipulate it, with the dotNotation
obj2.name = "Hadi";

// Other way to declare objects
// Using the keyword and calling the class (javascript template), Object or Array
const save = new Object();
console.log_ = typeof save;
const arr = new Array();
console.log(arr);

// cool for 😎
for (let prop in userObj) {
  //prop is the object property name
  console.log(`userObj.${prop} : ${userObj[prop]}.`);
}

// Tell me more about you

const person = {
  name: "Sergio",
  age: 27,
  birthYear: 1993,
  gender: "male",
  height: 170,
  print: function () {
    console.log(
      `I am ${this.name}, my age is ${this.age}. I was born in ${this.birthYear}` //this in this case works replacing the object name.
    );
  },
  old: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
};

person.print();
console.log(person.old());

//Object.keys

console.log(Object.keys(person));
//expected outcome: ["Sergio", "age", "birthYear", "gender", "height", "print", "old"]

//Obeject.values
console.log(Object.values(person));
//Expected outcome: [ 'Sergio', 27, 1993, 'male', 170, [Function: print], [Function: old] ]

//Object assign
const obj3 = { kids: 2, cars: 400 };
const obj4 = { colors: ["Red", "Gray", "Blacks"], pets: "fish" };
const totalObjects = Object.assign({ name: "Hadi" }, obj3, obj4);
console.log(totalObjects);

//Object.difineProperty()

const newPersonObject = {};
Object.defineProperty(newPersonObject, "bike", {
  value: "Ducati",
  writable: false,
});
//newPersonObject

//Object.defineProperties()
Object.defineProperties(newPersonObject, {
  p1: {
    value: "cool",
    writable: true,
  },
  p2: {
    value: "Nice",
    writable: false,
  },
  p3: {
    value: 102,
    writable: false,
  },
});
// Expected output:
//[["cats", 1],["dogs", 2], ["turtles", 3]]
function 
//Assignment:
// Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.

var newPerson = {
  name: "Sergio",
  age: 27,
  birthYear: 1993,
  gender: "male",
  height: 170,
};

console.log(newPerson);
for (let prop in newPerson) {
  console.log(`Property: ${prop}, value: ${newPerson[prop]}`);
}

/*

Given the following object
const student = { 
firstName: "Zain", 
lastName: "Oil", 
class: 48 };
Create a method that prints the following:
"Zain Oil a student in class 48"
*/

const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `${student.firstName} ${student.lastName} a student in class ${student.class}`
    );
  },
};

student.print();

/*
11:08
Get Values. Create a function that returns an array of all values of an object’s properties.
Examples:
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
Expected output:
["tea", "coffee", "milk"] 
11:09
List Properties. Create a function that returns an array of properties of a javascript object.
Example
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
Expected output:
["name", "class", "course"] */

let studentA = {
  name: "Mike",
  class: "4A",
  course: "English",
};

const getValues = (obj) => {
  let value = [];
  for (let prop in obj) {
    value.push(obj[prop]); // return Object.values(obj);
  }
  return value;
};

console.log(getValues(studentA));


