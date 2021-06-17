//Different solutions for the 12-01 assignments.js file
//to remember:
//1- Always comment your code, explaining what you are doing.
//2- Switch from console.log() to return in the end of functions.

console.log("--------Exercise-------");
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false

const isLEQZero = (num) => {
  return num <= 0;
};

console.log(isLEQZero(3));

console.log("--------Exercise-------");

//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:

// dogAge(4) ➞ "Your doggy is 28 years old in dog years!"

console.log("--------Exercise-------");

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

// Examples:

// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

const calcLifetimeSupply = (age, ServingsPerDay) => {
  let lifeTimeAmount = 0;
  let ageInDays = age * 365; //transforming client age from years to days
  let FinalDays = 100 * 395 - ageInDays; //Find out how many days does the client has left to live
  lifeTimeAmount = FinalDays * ServingsPerDay; //Finding out how many snacks will the client receive in his life-time
  return lifeTimeAmount;
};

console.log(calcLifetimeSupply(34, 2));

console.log("--------Exercise-------");
//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
//   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

// Examples:

// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"

console.log("--------Exercise-------");
// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3

console.log("--------Exercise 6-------");
/*  draw this shapes in your console
First shape
T
TT
TTT
TTTT

Second shape
****
***
**
*
*/

const secondShape = () => {
  let text;
  for (let i = 5; i >= 1; i--) {
    text = "";
    for (let j = 1; j <= i; j++) {
      text += j;
    }
    console.log(text);
  }
  return;
};
secondShape();

/* Third shape
1
12
123
1234
12345

Bounce: Forth shape
Be creative and show us your Artistic side
 */

console.log("--------Exercise 7-------");
/*  Finish the following function so it outputs looks like this:
1
12
123
1234
12345


 const numbersCount = () => {
  for (let i = 0; i <= 5; i++) {
    // something
    for (let j = 1; j <= i; j++) {
        // something
    }
      // something
  }
};

numbersCount();


Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/

/* const numbersCount = () => {
  let text = "";
  for (let i = 5; i >= 0; i--) {
    text = "";
    for (j = 1; j <= i; j++) {
      text += j;
    }
    console.log(text);
  }
};

numbersCount(); */

/* const numbersCount = () => {
    let text = "";
    for (let i = 5; i >= 0; i--) {
        text = "";
        for (j= 1; j <= i; j++){
        text += j;
        console.log(text);
        }
    }
    
}

numbersCount(); */

console.log("--------Exercise 8-------");
/* create a function. 
should that checks if a store contains a specific product in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)

// Examples

inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false 
*/

let storeArr = ["milk", "eggs", "cheese", "butter"];

const inventoryCheck = (word) => {
  let text = "";

  if (storeArr.includes(word)) {
    text += "You can go shopping!";
  } else {
    text = "The store does not have it 😞";
  }

  //return storeArr.includes(word)
  //? "You can go shopping!"
  //: "The store does not have it";

  //return storeArr.includes(word);

  return text;
};

console.log(inventoryCheck("pizza"));
console.log(inventoryCheck("eggs"));
console.log(inventoryCheck(12));
console.log(inventoryCheck("jhsgduicashlviu"));

/* let storeArr = ["milk", "eggs", "cheese", "butter"];
const inventoryCheck = (product) => {
  return storeArr.includes(product);
};
console.log(inventoryCheck("butter")); */

console.log("--------Exercise-------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

let characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
const passwordGen = () => {
  let randomNum;
  let result = "";
  for (let i = 0; i >= 30; i++) {
    randomNum = Math.floor(Math.random() * characters.length);
    // console.log(randomNum);
    result += characters[randomNum];
  }
  return result;
};
passwordGen();

//Other Way
let number = [];
let alpha = [];
let charactersSp = [];

const passGen = () => {
  let result = "";
  for (let i = 0; i < 17; i++) {
    if (i % 2 == 0) {
      randomNum = Math.floor(Math.random() * numbers.length);
      result += numbers[randomNum];
    }
    if (i % 3 == 0) {
      randomNum = Math.floor(Math.random() * numbers.length);
      result += number;
    }
  }
};

console.log("--------Exercise-------");
// 11. XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// isEqualNumXandO(“ooxx”) ➞ true
// isEqualNumXandO(“xooxx”) ➞ false
// isEqualNumXandO(“ooxXm”) ➞ true (case insensitive)
// isEqualNumXandO(“zpzpzpp”) ➞ true (returns true if no x and o)
// isEqualNumXandO(“zzoo”) ➞ false

const isEqualNumXandO = (str) => {
  let newStr = str.toLowerCase();
  console.log(newStr.length);
  let counterX = 0;
  let counterO = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] == "x") {
      counterX++;
    }
    if (newStr[i] == "o") {
      counterO++;
    }
  }
  if (counterX == counterO) {
    //  console.log(counterX);
    //  console.log(counterO);
    return true;
  } else {
    // console.log(counterX);
    // console.log(counterO);
    return false;
  }
};

console.log(isEqualNumXandO("Xxxoo"));
console.log(isEqualNumXandO("ooxXm"));
console.log(isEqualNumXandO("mhmnbg"));

console.log("--------Exercise-------");
// Today's lesson points

const someFun = (name = "Hadi") => {
  return name;
};
console.log(someFun());

const names = ["T", "Hi", "something very long"];
console.log(names[1]);
console.log(names[2][4]);

//Old school vs ES6 function calling
function sum(x, y) {
  return x * y;
}
sum(2, 4);

const print = (str) => {
  let newStr = `Hi my name is ${str}`;
  return newStr;
};

console.log(print("Zain"));

//Reviewing FOR loop

//Incrementing out and leaving the loop
for (let i = 1; i < 100; ) {
  console.log(i);
  i += 300; // If it is outside increment or decrement of 1, needed to be wrote here
}

for (let i = 1; i < 100; ) {
  console.log(i);
  i += 20; // If it is outside increment or decrement of 1, needed to be wrote here
}

//Falsy Condition, so ir won't run
for (let i = 0; i > 100; i++) {
  console.log("hi, this is coool");
}
//Truthy condition, it will run just fine
for (let i = 0; i < 5; i++) {
  console.log("T");
  console.log("hi, this is coool");
}
