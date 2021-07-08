class Persons {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  Display() {
    return ``;
  }
}
const newBuddy = new Persons("Steel", 25);
console.log(newBuddy);

class Kid extends Persons {
  constructor(_name, _age, _height = 0) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `This is a kid class from Person, ${this.name}`;
  }
}

let time = new Date().getFullYear(); //.getHours() / .getSeconds() / .getMiliseconds /
console.log(time);

//Assigments from Edabit
/* 
A decimal number can be represented as a sequence of bits. To illustrate:

6 = 00000110
23 = 00010111
From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001
Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

Examples
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11
Notes
JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number. */
console.log("=======bitwiseAND==========");
const bitwiseAND = (n1, n2) => {
  let newN1 = n1
    .toString(2)
    .padStart(8, 0)
    .split("")
    .map((item, i) => {
      let newN2 = n2.toString(2).padStart(8, 0);
      return (item = item == 1 && newN2[i] == 1 ? 1 : 0);
    })
    .join("");
  return parseInt(newN1, 2);
};
console.log(bitwiseAND(7, 12));

console.log("=======bitwiseOR==========");

const bitwiseOR = (n1, n2) => {
  let newN1 = n1
    .toString(2)
    .padStart(8, 0)
    .split("")
    .map((item, i) => {
      let newN2 = n2.toString(2).padStart(8, 0);
      return (item = item == 1 || newN2[i] == 1 ? 1 : 0);
    })
    .join("");
  return parseInt(newN1, 2);
};
console.log(bitwiseOR(7, 12));

console.log("=======bitwiseXOR==========");

const bitwiseXOR = (n1, n2) => {
  let newN1 = n1
    .toString(2)
    .padStart(8, 0)
    .split("")
    .map((item, i) => {
      let newN2 = n2.toString(2).padStart(8, 0);
      return (item = item ^ newN2[i] ? 1 : 0);
    })
    .join("");
  return parseInt(newN1, 2);
};
console.log(bitwiseXOR(7, 12));

console.log("=======binary==========");
const toBinary = (n) => n.toString(2);
console.log(toBinary(10));
console.log(((n) => n.toString(2))(10));
//console.log(toBinary(10));

console.log("=======addUp==========");
/* console.log(toBinary(44));
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000.
 */

function addUp(number) {
  let i = number;
  let sum = 0;
  while (i > 0) {
    sum += i;
    i--;
  }
  return sum;
}
console.log(addUp(600));

console.log("=======minMax==========");
/* Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
 */
const minMax = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
};
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));

console.log("=======christmasEve==========");
/* Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
Notes
Dates are zero zero based (see resources).
All test cases contain valid dates. */
const timeForMilkAndCookies = (obj) => {
  return obj.getMonth() == 11 && obj.getDate() == 24;
};

console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));

console.log("=======whichLarger==========");
const whichLarger = (f, g) => {
  return f() > g() ? "f" : g() > f() ? "g" : `neither`;
};

console.log(
  whichLarger(
    () => 10,
    () => 10
  )
);

console.log("=======canNest==========");
/* Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false */
function canNest(arr1, arr2) {
  let arr1Min = Math.min(...arr1);
  let arr1Max = Math.max(...arr1);
  let arr2Min = Math.min(...arr2);
  let arr2Max = Math.max(...arr2);

  return arr1Min > arr2Min && arr1Max < arr2Max;
}
console.log(canNest([1, 2, 3, 4], [0, 6]));

console.log(canNest([3, 1], [4, 0]));

console.log(canNest([9, 9, 8], [8, 9]));

console.log(canNest([1, 2, 3, 4], [2, 3]));

console.log("=======numbersSquare==========");
/* 
Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

Examples
numberSquares(2) ➞ 5

numberSquares(4) ➞ 30

numberSquares(5) ➞ 55
Notes
Input is a positive integer.
Square pyramidal number. */

const numbersSquare = (num) => {
  let value;
  if (num <= 0) {
    return 0;
  } else {
    return num ** 2 + numbersSquare(num - 1);
  }
};
console.log(numbersSquare(5));
console.log(numbersSquare(2));
console.log(numbersSquare(4));

console.log("=======compareAge==========");

/* Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.

Examples
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
 */

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  compareAge(obj) {
    return this.age < obj.age
      ? `${obj.name} is older than me`
      : this.age == obj.age
      ? `${obj.name} is the same age as me`
      : `${obj.name} is younger than me`;
  }
}

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

console.log("=======sortDrinkByPrice==========");
/* You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
The output of the sorted drinks object will be:

Examples
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}] */

let drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "Bear", price: 25 },
];

function sortDrinkByPrice(object) {
  return object.sort((a, b) => (a.name > b.name ? 1 : -1));
}
console.log(sortDrinkByPrice(drinks));

console.log("=======countTrue==========");

/* Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
 */

const countTrue = (arr) => {
  let counter = 0;
  for (let item of arr) {
    item == true ? counter++ : null;
  }
  return counter;
};
console.log(countTrue([false, true, false, true, false, true, true]));

console.log("=======countTrue==========");

/* Create a function that takes two arrays and insert the second array in the middle of the first array.

Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
Notes
The first array always has two elements.
Use the spread syntax to solve this challenge. */

function tuckIn(array1, array2) {
  let firstHalf = array1.slice(0, 1).join("");
  let secondHalf = array1.slice(1).join("");
  return [Number(firstHalf), ...array2, Number(secondHalf)];
}
console.log(tuckIn([15, 150], [45, 75, 35]));

console.log("=======countTrue==========");
/* You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

Worked Example
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.
Examples
isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false */

const isFirstSuperior = (array1, array2) => {
  let counter1 = 0;
  let counter2 = 0;
  let result = array1.map((item, i) => {
    if (item > array2[i]) {
      counter1++;
    } else if (item < array2[i]) {
      counter2++;
    }
    return item;
  }, "");
  return counter1 > counter2 ? true : false;
};

console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));
console.log(
  isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])
);
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]));
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]));
