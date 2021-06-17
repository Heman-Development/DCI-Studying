//Classes Notes

//let, const, var:
//Preserved key-word to declare and (initialize) assign value
//Hoisting will save the value of "var" and "const" and will save it to the top

//reject expressions: (\n, \', \"")
let strWithChar = "I'm    \n Hi";
console.log(strWithChar);

//Numbers:
let float = 22.5;
console.log(typeof float);

//Strings
let concatenation = "Hi ";
let example = "I am sergio";
console.log(concatenation, example);
console.log(concatenation + example);

//Booleans:
let bool = false;
console.log(bool);
console.log(!bool);
let check = 1 < 12;
console.log(check);
console.log(!check);

let age = 12;
let age2 = "12";
console.log(age == age2);
console.log(age === age2);

//Ternary Operator:
//        condition  truthy     false
console.log(false ? "yeah" : "noooo");
//Note: There can be no more than three parts to a condition
//Real-life situations using ternary operator

let resultStr = 1 < 55 ? "cool" : "oh, sorry!";
// Which value should I assign to my variable "resultStr"
console.log(resultStr);

//Another example
let varstr1 = "😭";
let varstr2 = "😄";
let result = 1 < 55 ? varstr1 : varstr2;
console.log(result);

//Js methods from Math(.max, .min, .random, .floor, .ceil)

console.log(Math.max(22, 3, 555, -1));
console.log(Math.min(1, 2, 455, 2, -1));

let num1 = 33.5;
console.log(Math.floor(num1));
console.log(Math.ceil(num1));

console.log(Math.random());
console.log(Math.random() * 6);
console.log(Math.floor(Math.random() * 6) + 1); // the same result in another solution: console.log(Math.floor(Math.random() *7));

// Real life-situation example:
let str3 = "Hi I like";
let randomStr3 = Math.floor(Math.random() * str3.length);
console.log(str3[randomStr3]);

//Js methods for str (.trim, .length, .includes, .split)
let userName = "Hadi  ";
let lastName = "Nsreeny      ";

console.log(userName.trim());
console.log(lastName.trim().length);

let str4 = "Hi, I like sushi";
console.log(str4.includes("sushi"));
let strToArr = str4.split(" ");
console.log(strToArr);
console.log(strToArr.length);

//If Conditions
//Ilimited amount of steps for the "truthy" or "false == else"

/* if () {
    //correct 
} else {
    //not true 
}
 */

if (1 == 122) {
  console.log("Hi");
  x = 2 + 3;
  console.log(x);
} else {
  console.log("Not cool");
}

//Function
function funName(num1, num2) {
  let fumNumbers = num1 + num2;
  return fumNumbers; //return only one thing ever!
}

console.log(funName(2, 3));

//Es6 Ecma script version (2015)
const functioName = () => {
  // console.log("I am Es6 function 💪"); //Not professional way of doing
  return `I am Es6 function 💪`;
};
console.log(functioName());

// Array
//               0      1       2
const myArr = ["Zain", "Olga", "Nancy"];
console.log(myArr[1][4]);
let number = 1;
console.log(myArr[number]);
number++;
console.log(myArr[number]);

const NumArr = [22, 33, 55, 6754, 2, 22, 4, 55, 677, 432, 2];
console.log(NumArr[NumArr.length - 1]); // accessing the last index of an array

//Questions:
//1-XO exercise: Why did the ".includes" not work and then when used "[i] == "char" did?
//2- Repeat the second solution fot the password generator app
//3- Is there such a thing as excessive comments on my code
