//Declaring a function old school
/* function <name> (parameters) {
    commands
} */
// Declaring a fucntion on ES6
/*  const <nameOfFunction> = (parameters) => {
    commands
} */
//Old way of declaring a function 
function print(str){
    console.log(str);
}

//ES6 way of declaring a function 
const display = (str) => {
    console.log(str);
}

print("Hi");
display("cool");

const sum = (x, y) => x + y;
console.log(sum(3, 4));

const isBigger = (num1,num2) => num1 > num2;
console.log(isBigger(33, 43));

const printFullWord = (firstName, age, add) => console.log(`Hi ${firstName}, I am &{age}, I live in ${add}`);
printFullWord("Hadi", 31, "Berlin");

let isLogged = false
const login = () => {
    isLogged = true
}

login();

let name1 = "Hadi";
let name2 = "Zain";
let name3 = "Nancy";

//Sorting out the array's index:
//                0        1       2
let namesArr = ["Hadi", "Zain", "Olga"];
console.log(namesArr[2]);
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number[5]);
//
//
let hobbiesArr = ["Camping", "riding bikes", "Cooking", "travelling", "Reading"];
let i=0;
console.log(hobbiesArr[i]);
i++
console.log(hobbiesArr[i]);
i++
console.log(hobbiesArr[i]);

//Loops
//for([initialExpression]; [conditionExpression]; [incrementExpression])
//[intialExpression] = This is where you can declare the necessary variables to build the loop 
//[condtionExpression] = This is where you can declare the condition to end the loop. Watch out for the infinite loops
//[incrementeExpressions] =  This is where you can declare what is to be done while the loop is running. Increment, decrement.
for(let i = 0; i < hobbiesArr.length; i++) {
    console.log(hobbiesArr[i]);
}

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

//
for(let i = 1; i < 10; i++){
    console.log(`${i} * 1 = ${i * 1}`);
}

for (let i = 8; i >= 0; i--) {
    console.log(`${i} * 1 = ${i * 1}`);
} 

const chrArr = ["a", "b", "c"];
for (let i = 0; i < chrArr.length; i++) {
    console.log(chrArr[i].toUpperCase());
}

let str = "";
const names = ["hadi", "nancy"];
for (let i = 0; i < names.length; i++) {
    str = "";
    str = names[i][0].toUpperCase() + names[i].substring(1);
//index to array element //letter inside that element  //+names[i].substring(1);
    console.log(str);
}

//To remember: 
/*  
Functions, if else, scopes, objects - All with {}  
Arrays, strings - All with []
If conditions, methods, condition function cal - Will use () */


console.log(1 == 11 ? "cool" : "noooo");
let isSmart = false;
if (isSmart) {
    console.log("cool");
}else {
    console.log("nooo");
}
let count = 0;
if (22 * 3 == 299 + 3) {
    count++;
    console.log("YOu are write");
}else {
    count --;
    // \' \" ignore
    // \n new linw
    console.log("No that's \n this is new line");
 
}


let a = true;
let b = false;
let c = 11 == 23;
if (a == b && c !=a  || c == a){
    console.log("wow");
}else{
    console.log("I don't know what you need from me");
}