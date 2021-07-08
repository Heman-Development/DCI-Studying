// let var const local vs global
// global

//{
//    local
//}

// functions inside functions
function main(num1, num2) {
  //outer function
  function second(n) {
    //inner function
    return n * n;
  }

  return second(num1) + second(num2);
}

console.log(main(2, 3));

// Nested scopes: Accessing outer global variables

let nice = true;
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + " outerFunction");
  const innerFunction = (num) => {
    big = false;
    nice = false;
    let fat = true;
    console.log(`innerFunction : big = ${big}, nice = ${nice}`);
    return num + 10;
  };

  return innerFunction(x) + innerFunction(y);
};

console.log(outerFunction(3, 4));
// console.log(fat); It will not be able to access it's value, since fat is a local variable

//closure The most important thing ever
let number = 10;
function sum() {
  return number + number;
}
console.log(sum());
number = 33;
console.log(sum());

// invoking == calling
// functions that return other functions
const add = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();
console.log(add());

//SIAF
// self-involking anonymous function

(function () {
  console.log("Hi");
})();

/* 
(() => {
    console.log()
})(); */

//IIFE

//Immedietly-invoked Function Expression
const fum = ((x, y) => {
  return x + y;
})(3, 4);

console.log(fum);

// Examples:
let all = 3;
(() => {
  all = "hey";
  console.log(all);
})();

//Assignments
/* 
Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message ‘You’re already retired!’ should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000 */

const moneySaved = ((age, retirement, wage, savings) => {
  if (retirement <= age) {
    return `You are already retired`;
  } else {
    let time = (retirement - age) * 12; // time will receive the remaining time already converted in months
    let finalSavings = wage * (savings * 0.01); // converting the savings in percentage and then multiplying it by the wage, in order to store the saved value for the month in the finalSavings variable
    return `$${time * finalSavings}`;
  }
})(40, 65, 2000, 5);

console.log(moneySaved);

//Additional Methods
// charAt()

let chr = "a";
console.log(chr.charAt(0)); // == console..log(chr[0]);
console.log(chr[0]);


console.log(chr.charCodeAt(0) - 96);

// Create a function that receives as a string any month of the year and return the corresponding season.

const monthCheck = (str) => {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  const currentSe = (monthName) => {
    let n = months.indexOf(monthName);
    return n < 3
      ? seasons[0]
      : n < 6
      ? seasons[1]
      : n < 9
      ? seasons[2]
      : seasons[3];
  };
  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  return month == " "
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)}`;
};
console.log(monthCheck("I love december"));
