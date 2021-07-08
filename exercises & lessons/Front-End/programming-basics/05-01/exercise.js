//1. Create two variables.
// One variable should contain a string value and
//the other should contain a number. Concatenate the string and the number.

let x = "january"; 
let y = 5;
let b = x + " " + y;
console.log(b);


//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
//33, 40, 2,1,22


let z = 33;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd") 
z = 40;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd") 
z = 2;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd") 
z = 1;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd") 
z = 22;
z % 2 == 0 ? console.log("Number is even") : console.log("It is odd") 



//Think about it later :)
/* function oddOrEven (num) {
    return num % 2 == 0 ? "Even": "Odd" ;
}
console.log(oddOrEven(num)); */


// Create a variable with the value of “123”. Convert it to a number.
let r = "123";
let numR = parseInt(r, 10)
console.log(numR);

// Create a variable with the value of “130.7". Convert it to a number.

let s = "130.7";
let numS = parseFloat(s, 10)
console.log(numS);

// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!

let isdog = true;
isdog == true ? console.log("pat, pat") : console.log("Find me a dog to pat!")

/* Math
Perform Mathematical Tasks with JavaScript. Remember: you must use the Math functions and print all results to the console!
1. Minimum and maximum */
/* a. Lowest Number*/
/*Print out the lowest number between -1 and 4. */

console.log(Math.min(-1, 0, 1, 2, 3, 4));

/* 
b. Highest Number
Print out the highest number between -1 and 4. */

console.log(Math.max(-1, 0, 1, 2, 3, 4))

/* 2. Rounding
a. Round up
Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342. */

function roundUp (roundUpNumber){
    return Math.ceil(roundUpNumber);
}

console.log(roundUp(3321.32321))
console.log(roundUp(326.76))
console.log(roundUp(76788.7))
console.log(roundUp(-9.78))
console.log(roundUp(43.342))


/* b. Round down
Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.*/

function roundDown (randomNumber){
    console.log(Math.floor(randomNumber));
}

roundDown(3321.32321);
roundDown(326.76);
roundDown(76788.7);
roundDown(-9.78);
roundDown(43.342)
//
//
/*Strings and Numbers */
//
/* 1. Concatenation.
Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let introSentence = "Hi, my name is Nancy and I am";
let age = 25;
Expected Output:
"Hi, my name is Nancy and I am 25"
In this case, what is the + operator doing? Comment your answer in the js file. */
//
let introSentence = "Hi, my name is Sergio and I am";
let age = 27;
console.log(`${introSentence} ${age}`)
//
/* The Operator is just joining together the string and the number together making them appear like a sentence. In my answer I used the "`" so that I could more easily join together the variable and the string in order to create the whole phrase. */
//
/*2. Converting
Create a variable with the value of “1005”. Convert it to a number.*/
//
let convertNum = "1005";
let convertNumInt = parseInt(convertNum, 10);
console.log(convertNumInt);
//
//
/*Create a variable with the value of “10.05". Convert it to a number. */
//
//
let convertNum2 = "10.05";
convertNumInt = parseFloat(convertNum2, 10);
console.log(convertNumInt);
//
/* Create a program that prints a random integer from 1 - 6.
 */
console.log(Math.floor(Math.random() * 6) +1);















