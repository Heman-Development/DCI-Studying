// Functions declarations as values:
//const functionName = function(parameters){ ... }
/* function (x, y) {
    return x *y;
} */
//Note: This is the best for hoisting the function so that I can access it anywhere on my code.

// const functionName = (parameters) =>{ ... }
/* const sum = (x, y) => {
  return x + y;
}; */
//Note:Does not hoist the value of the function.Hoisting value only work when used to store variables.

//const functionName = function (parameters) {....}
/* const sum = function (x, y) {
  return x + y;
}; */

// Invoke the function

// call stack

/* const login = () => {
  // some things
  halloUser();
  //more steps
};

const halloUser = () => {
  return `Hej, ${user} welcome back`;
}; */

//login();

// break;
// Breaking out of a loop:

// continue;
// Skipping an iteration:

// .map()

//old school
//for (let i = 0; i<array.length; i++)

// Clever way
//Array.map = (()=>{})


const names = ["Zain", "Olga", "Nancy"];
const cities = ["Berlin", "Paris"];
const newArr = names.map((name, i) => {
    if (name == "Nancy"){
        console.log("I don't like you")
    }
  console.log(`This is ${name} with index ${i}`));

const newcity = cities.map((city, i) => console.log(city));

// .reduce()
//array.reduce(acc,cur) => (< stuff to process>, first value for the accumulater)
const = numArr = [1,2,33,5,66];
const reducer = numArr.reduce((acc,cur)=> (acc + cur, 100);
console.lgo(reducer);

// Break
// Breaking out of the loop:

let tBox = "";
for (let i =0; i<=3; i++){
    for (let j=0; j<=3; j++){
        if (i==j){
            break;
        }
        tBox += "T"
        console.log(tBox);
    }
}

//continue

for (let i= 1; i<=10; i++){
    if (i = 4){
        continue;
    } else {
        console.log(i);
    }
}

const arr1 = [2,2,2,2,3,3,3,3,3,44,55,44,55];
const cleanUp = arr => {
    let result = [];
    for (let i = 0; i <arr.length; i++){
        if (result.includes(array[i])){
            continue;
        }else {
            result.push(arr[i]);
        }
    }
    return result;
}
