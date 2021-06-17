console.log("--------Exercise1-------");

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

const isLEQZero = (x) => {
  if (x != 0 && x > 0) {
    console.log(false);
  } else {
    console.log(true);
  }
};

isLEQZero(0);
isLEQZero(90);
isLEQZero(4534);

console.log("--------Exercise2------");

//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

let dogYears;
const toHumanYears = (dogYears) => {
  let x = dogYears * 7;
  console.log(`Your dog is ${x} years old in dog's years!`);
};
toHumanYears(2);
toHumanYears(12);
toHumanYears(8);
toHumanYears(18);

console.log("--------Exercise3-------");

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

const calcLifetimeSupply = (age, perDay) => {
  let finalYears = 100 * 365 - age * 365;
  let finalAmount = finalYears * perDay;
  console.log(
    `The snack company should provide you with ${finalAmount} units, until you are a ripe old age of 100. Happy snacking!`
  );
};

calcLifetimeSupply(25, 7);
calcLifetimeSupply(40, 5);
calcLifetimeSupply(70, 2);

console.log("--------Exercise4-------");

//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthName = (x) => {
  let y = x - 1;
  if (y >= 0 && y <= 11) {
    console.log(months[y]);
  } else {
    console.log(`Sorry, this is not a valid input!`);
  }
};
monthName(3);
monthName(12);
monthName(6);
monthName(15);
monthName(11);
monthName(9);

console.log("--------Exercise5-------");

// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

const countOccurances = (str, chr) => {
  let strIntoArr = str.split("");
  console.log(strIntoArr);
  let count = 0;
  for (let i = 0; i <= strIntoArr.length; i++) {
    if (strIntoArr[i] == chr) {
      count++;
    }
  }
  console.log(
    `The character "${chr}" appears ${count} times on the "${str}" string.`
  );
};

countOccurances(
  "Whatever string, just to create a task to execute my function.",
  "e"
);

console.log("--------Exercise6-------");
/* draw this shapes in your console

First shape
T
TT
TTT
TTTT */

const printT = () => {
  let draw = "";
  for (i = 1; i <= 4; i++) {
    draw += "T";
    console.log(draw);
  }
};
printT();

console.log("--------Exercise Shape-------");

/* Second shape
 ****
 ***
 **
 * */

const printShape = () => {
  let shape;
  for (let i = 5; i >= 1; i--) {
    shape = "";
    for (j = 1; j <= i; j++) {
      shape += "*";
    }
    console.log(shape);
  }
  return;
};

printShape();

console.log("--------exerciseDownStar-------");

const printAsteristicsDown = () => {
  let draw = "****";
  for (i = 0; i <= 4; i++) {
    finalDrawn = draw.substring(i);
    console.log(finalDrawn);
  }
};
printAsteristicsDown();

/* Third shape
TTTT
TTT
TT
T*/

const printTDown = () => {
  let draw = "TTTT";
  for (i = 0; i <= 4; i++) {
    let finalDrawn = draw.substring(i);
    console.log(finalDrawn);
  }
};

/*Fourth shape
1
12
123
1234
12345 */

const generateDrawing = () => {
  let totalNumberofRows = 5;
  let output = "";
  for (let i = 1; i <= totalNumberofRows; i++) {
    for (var j = 1; j <= i; j++) {
      output += j;
    }
    console.log(output);
    output = "";
  }
};
generateDrawing();

/* Bounce: Forth shape
Be creative and show us your Artistic side
 */

const printTDownNumbersCreative = () => {
  let number = "12345";
  for (i = 0; i <= 5; i++) {
    let finalNumber = number.substring(i);
    console.log(finalNumber);
  }
};

printTDownNumbersCreative();

console.log("--------Exercise7-------");

/*  Finish the following function so it outputs looks like this:
1
12
123
1234
12345 */

/* const generateDrawing = () => {
  let totalNumberofRows = 5;
  let output = "";
  for (let i = 1; i <= totalNumberofRows; i++) {
    for (var j = 1; j <= i; j++) {
      output += j;
    }
    console.log(output);
    output = "";
  }
};
generateDrawing(); */

/*Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  18*/

const printDownNumbersCreative = () => {
  let number = "12345";
  for (i = 0; i <= 4; i++) {
    let finalNumber = number.substring(0, number.length - i);
    console.log(finalNumber);
  }
};

printDownNumbersCreative();

console.log("--------Exercise9-------");
/* create a function should that checks if a store contains a specific product in it's inventory.
for example: let storeArr= ["milk", "eggs", "cheese", "butter"];*/
// try includes might help :)
// Examples

//inventoryCheck("cheese") returns true
//inventoryCheck( "ham") returns false

const inventoryCheck = (product) => {
  let storeArr = ["butter", "milk", "eggs", "cheese"];
  result = storeArr.includes(product);
  return result;
};
console.log(inventoryCheck("butter"));
console.log(inventoryCheck("pizza"));
console.log(inventoryCheck("cheese"));

//console.log("--------Exercise10-------");

// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

//For the solution on this exercise, take a closer look at my passwordGenerator repository. Look for passwordGenerator.js file :)
