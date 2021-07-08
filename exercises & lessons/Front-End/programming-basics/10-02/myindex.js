const car = {
  brandName: "Audi",
  modelYear: "2021",
  priseWithVAT: 20,
  colors: ["red", "black", "white"],
};

//Shallow copy (clone) for an object using ...
//Shallow copy works only with simple property. In order to be able to copy an object with a complex(compound) property(ies) there is a need for deep cloning (copy).
const newCloneObj = { ...car };
console.log(newCloneObj);
newCloneObj.brandName = "BMW";
newCloneObj.colors[0] = "orange";
console.log(car);

//Recursion
const factorial = (num) => {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

/* //Deep copy
  function deepCopy (ob) {
   if (typeof obj == "object"){
      return Object.keys(obj).map((key) => {[key]: deepyCopy(obj[key])} // look after the class and finish reading it 
   } 
  } */

//assignment

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]

const value = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
const scrabble = (arr) => {
  return arr.reduce((acc, cur) => (acc += cur.score), 0);
};
console.log(scrabble(value));

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
let person = {
  name: "John",
  job: "teacher",
};
// Expected Output:
// {“John”: name, “teacher”: job}
const switchKeys = (obj) => {
  let newKeys = Object.values(obj);
  let newValues = Object.keys(obj);
  let newObj = {};
  for (let i = 0; i < newValues.length; i++) {
    // need to solve this one using for in...
    newObj[newKeys[i]] = newValues[i];
  }
  return newObj;
};

console.log(switchKeys(person));

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]
const returnKeysValues = (obj) => {
  return [Object.keys(obj), Object.values(obj)];
};
console.log(returnKeysValues({ a: 1, b: 2, c: 3 }));
