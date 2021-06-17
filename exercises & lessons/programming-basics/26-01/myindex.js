// parameters: Naming and order

// default value
const halloUser = (userName = "Zain") => {
  console.log(`Hi, ${userName}`);
};

halloUser();
halloUser("Hadi");

// Spread syntax

//...<arrayName>
const arr = ["Hi", "I", "You"];
const cloneArr = ["Nice one", ...arr, "super nice"];
//cloneArr[0] = "cool";
console.log(cloneArr);
console.log(arr);

//Note: The reason you are able to change tha value of the const variable, is due to the fact that const secure only the structure for the array not the value of the data itself.

// ...args

const sum1 = (x, y) => x + y;
console.log(sum1(2, 4, 5, 76, 7, 2));
const printFunThingsToDO = (userName, age, ...args) => {
  console.log(
    `Hi ${userName}, I am ${age}. You like ${args[0]}, and ${args[1]}`
  );
};
printFunThingsToDO(
  "Hadi",
  31,
  " Coding",
  "Cooking",
  "Do fun things",
  "Cool Draws"
);

const number = (...nums) => {
  console.log(nums);
};
number(2, 3, 4, 5, 65, 7);

// cool functions

function printMyName() {
  console.log("Sergio");
}

printMyName();

//or

(function printMyName() {
  console.log("Sergio");
})();

//printMyName();

const books = ["One Day", "One more thing", "Done by me"];

// .map
// Converting an array to a different array: `Array.prototype.map(<function>)`

const printBooks = books.map((item, index) => `${index}.title${item}`);
console.log(printBooks);
console.log(books);

//const nums = ["1", "2", "3"]
//const numbs = nums.map((item) => parseInt(item))
//console.log(mumbs);
const nums = ["1", "2", "3"].map((item) => parseInt(item));
console.log(nums);

const printMany = [1, 2, 3, 4, 5].map((item, index) => console.log(item));
//console.log(printMany);

//.reduce
// Getting a in single output value
const reducer = (acc, cur) => acc + cur;
const resultArr = [2, 3, 1, 3].reduce(reducer);
console.log(resultArr);

// .filter
// - Getting an array with items that aline with your condition: `Array.prototype.filter(<function>)`

const names = ["Zain", "Nancy", "Olga"];
const filtArr = names.filter((name) => name.length > 4);
console.log(filtArr);

// .find
// - Getting a the first item that aline with your condition : `Array.prototype.filter(<function>)`
//  Maybe more 😏
const coolNumbers = [1, 2, 34, 5, 6, 7];
const biggerThanFive = coolNumbers.find((num) => num > 5);
console.log(biggerThanFive);

console.log("Assignments");

/* Write a function that it returns  “Two for me and one for you” when no arguments are passed
e.g
console.log(twofer("Fran")) ---> "Two for me and one for Fran"
console.log(twofer()) ---> "Two for me and one for you" */

const twofer = (name = "you") => console.log(`Two for me and one for ${name}`);
twofer("Fran");
twofer();

/* Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
e.g
console.log(exponent(3, 3)) ---> 27
console.log(exponent(3)) ---> 9 */

const exponent = (number, exp = "2") => Math.pow(number, exp);
console.log(exponent(3));
console.log(exponent(3, 3));

/* Write a function that it returns the total amount of arguments passed to it.
e.g
console.log(howManyArgs()) ---> 0
console.log(howManyArgs(1, false, "hello")) ---> 3
console.log(howManyArgs("better")) ---> 1 */

const howManyArgs = (...args) => args.length;

console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));
/* Write a function which accepts any amount of numbers and return the sum of their addition
e.g
console.log(sum(1)) ---> 1
console.log(sum(1, 15)) ---> 16
console.log(sum(25, 25, 20)) ---> 70 */

const sum = (...args) => {
  let sumOfAgs = args.reduce((acc, number) => (acc += number));
  return sumOfAgs;
};
console.log(sum(1, 15));
console.log(sum(1));
console.log(sum(25, 25, 20));

/* Bonus: Write a function which accepts any amount of numbers and returns the average.
e.g
console.log(average(0)) ---> 0
console.log(average(1, 2)) ---> 1.5
console.log(average(1, 3, 6, 10)) ---> 5
console.log(average(12, 14, 16)) ---> 14 */

const average = (...args) => {
  let sumOfArgs = args.reduce((acc, number) => (acc += number));
  return sumOfArgs / args.length;
};
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));
console.log(average(1, 2));
console.log(average(0));

// hackerSpeak
/* **c4n y0u r34d th15?**
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
 NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
Examples:
* hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
* hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
* hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r" */

const hackerSpeak = (str) => {
  let strToArr = str.toLowerCase().split("");
  let output = strToArr.map((item) => {
    switch (item) {
      case "a":
        item = "4";
        break;
      case "e":
        item = "3";
        break;
      case "i":
        item = "1";
        break;
      case "o":
        item = "0";
        break;
      case "s":
        item = "5";
        break;
      default:
        item = item;
        break;
    }
    return item;
  });

  return output.join("");
};

console.log(hackerSpeak("javascript is cool"));

// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

const oddsEvens1 = (array) => {
  let newArray = array.map((number, index) => {
    if (number % 2 == 0) {
      number -= 1;
    } else {
      number += 1;
    }
    return number;
  });

  return newArray;
};

console.log(oddsEvens1([6, 9, 10, 20]));
console.log(oddsEvens1([3, 5, 2, 4]));

const oddsEvens2 = (array) => {
  let newArray = array.map((number) =>
    number % 2 == 0 ? (number -= 1) : (number += 1)
  );
  return newArray;
};

console.log(oddsEvens2([6, 9, 10, 20]));
console.log(oddsEvens2([3, 5, 2, 4]));

// how many chr in a str(not case sens)
// howManyStr(“I like pizza”,“p”) -> 1

const howManyStr1 = (str, chr) => {
  let strToArr = str.toLowerCase().split("");
  let filteredStr = strToArr.filter((item) => item == chr);
  return filteredStr.length;
};

console.log(howManyStr1("I like pizza", "p"));

//Alternative Shorter Solution

const howManyStr2 = (str, chr) => {
  return str
    .toLowerCase()
    .split("")
    .filter((item) => item == chr).length;
};

console.log(howManyStr2("I like pizza", "p"));
