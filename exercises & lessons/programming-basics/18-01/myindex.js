// Reviewing for loops
//            While the considition is truthy the loop will keep been executed
console.log("-------1st Loop--------------");
for (let i = 0; i < 5; i++) {
  console.log("Hi!");
  console.log(i);
}

console.log("--------2nd Loop-------------");
//Changing the increment of the "i"
for (let i = 0; i <= 10; ) {
  console.log(i);

  i += 2;
}
//Note: The "i" counter needs to be an integer, it can not be initialized as a float

console.log("--------3rd Loop-------------");

for (let i = 0; i < 5; i++) {
  if (i < 1) {
    console.log(`There is ${i} star in the sky`);
  } else {
    console.log(`There are ${i} star in the sky`);
  }
}

console.log("--------4th Loop-------------");
for (let i = 5; i > 0; i--) {
  console.log(` i is now ${i}`);
}

console.log("--------5th Loop-------------");
for (let i = 1; i <= 10; i++) {
  console.log(`4 * ${i} = ${i * 4}`);
}

console.log("--------6th Loop-------------");
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication Table: ${i} \n`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j}  = ${i * j}`);
  }
  console.log("---------------- \n");
}

console.log("--------7th Loop-------------");
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  }
}

//Homework
//Find other solution for printing only the even number in the interval 1 - 10

console.log("--------8th Loop-------------");
let drawShape = "";
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= i; j++) {
    drawShape += "+";
  }
  console.log(drawShape);
  drawShape = "";
}

console.log("--------9th Loop-------------");
const names = ["Zain", "Olga", "Nancy"];
const workOrHa = ["Webdev", "Sleep", "Eat"];
for (let i = 0; i < names.length; i++) {
  //console.log(names[i]);
  console.log(`Hi, I am ${names[i]}, I will be ${workOrHa[i]}`);
}

const images = ["💪", "😁", "😈"];
const likes = ["22", "344", "666"];
for (let i = 0; i < names.length; i++) {
  console.log(`
     ____________________
    |    This img ${images[i]}    |  
    |    got ${likes[i]}        |  
    |___________________|
    
    `);
}

console.log("--------Assignment1-------------");
//Assignment
/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
Store Mark’s and John’s mass and height in variables.
Calculate both their BMIs and store their BMIs in variables.
Create a boolean variable containing information about whether Mark has a higher BMI than John.
Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
Create an if statement which prints the name and BMI of the person with the highest BMI. */

const bmiMarkJohn = () => {
  let jMass = 70;
  let mMass = 90;
  let jHeight = 1.75;
  let mHeight = 1.7;
  let jBmi = jMass / (jHeight * jHeight);
  let mBmi = mMass / (mHeight * mHeight);
  let text = "";
  let bool = mBmi > jBmi;
  console.log(
    `Is Mark’s BMI higher than John’s? Why yes, it’s ${bool}, it is.`
  );
  if (mBmi > jBmi) {
    text = `Mark’s BMI higher than John’s.`;
    console.log(text);
  } else {
    text = `John’s BMI higher than Marks’s.`;
    console.log(text);
  }

  return;
};

bmiMarkJohn();

console.log("--------Assignment2-------------");
//Assignment
/* Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult” */

let firstName = "Mary";
let age = 35;
const figureAge = (firstName, age) => {
  let definition = "";
  if (age <= 13) {
    definition = `${firstName} is a child`;
  } else if (age > 13 && age <= 20) {
    definition = `${firstName} is a teenager`;
  } else if (age > 20 && age <= 30) {
    definition = `${firstName} is a young adult`;
  } else {
    definition = `${firstName} is a adult`;
  }

  return definition;
};

console.log(figureAge("Mary", 23));

//Futher topics of the day
//Switch

let color = "red";
switch (color) {
  case "pink":
    console.log("cool this is pink");
    break;
  case "red":
    console.log("cool this is red");
    break;
  case "white":
    console.log("cool this is white");
    break;
  default:
    console.log("Sorry this is not a color");
}

//
let userKidsNumber = 12;
switch (userKidsNumber) {
  case 1:
    console.log("You are new parent with 1 Child");
    break;

  case 2:
    console.log("You have 2 kids nice");
    break;

  case 4:
    console.log("You have 3 kids nice");
    break;

  case 4:
  case 5:
  case 6:
    console.log("You have many kids nice");
    break;

  default:
    console.log("You have many kids nice");
}

console.log("--------Assignment3-------------");
/* Capitalize. 
Create a program that capitalizes the first letter of each element in an array of names. Examples:*/

const firstNames = ["matt", "sara", "lara"];
const secondNames = ["samuel", "MARIA", "luke", "mary"];
const thirdNames = ["Cynthia", "Karen", "Jane", "Carrie"];

const capitalize = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLowerCase();
  }

  return array;
};

console.log(capitalize(firstNames));

console.log("--------Assignment4-------------");
/* Capitalize. 

/* City Names. 
Create an array of city names. Loop through the array and add the city names to a string. Examples:
[Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome”.*/

const cityNames = ["Berlin", "Paris", "Prague", "Rome"];

const printCities = (array) => {
  let cities = "";
  for (let i = 0; i < array.length; i++) {
    cities += array[i];
    if (i == array.length - 1) {
      cities += ".";
    } else {
      cities = +", ";
    }
  }
  return cities;
};

console.log(printCities(cityNames));

console.log("--------Assignment5-------------");

//Hello
/*  Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
[Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
Bonus [Susan, Rezvane, Mark] ➞ expected bonus output: “Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”. */

let family = ["Maria", "Mike", "Paul", "Doven"];

const hello = () => {
  let text = "";
  for (let i = 0; i < family.length; i++) {
    text += "Hello " + family[i] + "! ";
  }
  return text;
};

console.log(hello());

console.log("--------Assignment6-------------");
/* Odds and Evens. 
Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19] */

const numbersOne = [3, 5, 2, 4];
const numbersTwo = [6, 9, 10, 20];

const arraySumSub = (array) => {
  //console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      array[i] = array[i] - 1;
      console.log(array[i]);
    } else {
      array[i] = array[i] + 1;
      console.log(array[i]);
    }
  }
  return array;
};

console.log(arraySumSub(numbersOne));
