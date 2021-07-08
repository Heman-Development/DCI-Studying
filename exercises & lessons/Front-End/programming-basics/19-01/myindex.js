const names = ["Zain", "Nancy", "Olga"];
const smileys = ["😎", "🤓", "🥳"];
// .length
// to get the number of elements in an array

// .length -1
// to access the last item
names.length - 1;
console.log(names[names.length - 1]);

//how edit specific index of the array:
//name;

// .join()
// create a string from an array

// .split()
// divide a string into an array
//You can also use:
/* let newArr = str.split(" ").length => Will tell you how many times " " will appear on your string. */

// .push()
// add an item to the very last element of an array
//Without arguments

// .pop()
// remove the very last element of an array
//Without arguments

// .shift()
// add an item to the beginning of an array
// Without arguments

// .unshift()
// remove an item to the beginning
//Without arguments

// .indexOf()
// Find the index of an item
// Requires an arguement, normally the element itself

// .splice()
// remove an item by the index number
// Require an arguement, (<which element to start from>, <how many elements to delete>);

// .concat ()
// Merge two or more arrays
let arr1 = [1, 233, 55];
let arr2 = [33, 3, 65];

let arr3 = arr1.concat(arr2);
console.log(arr3);

const add = ["Berlin", "Paris"];
let fakecopy = add; //This is not a real copy, it is called a refence array. It refers to the original array with a new name

//Slice()
//Making a shallow copy
let shallowCopy = add.slice();
console.log(shallowCopy);
shallowCopy.push("London");
console.log(shallowCopy);
console.log(add);

const smile = ["😁", "😉", "😍"];
let otherArr = smile.slice(0, 1);
console.log(otherArr);
let otherArr2 = smile.slice(-2);
console.log(otherArr2);

//Assignments

/* Repeat it. 
Create a program with two variables: “item” and “times”. Create a program that repeats the “item” as many times as specified by “times”. The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated. Print the result in an array. Examples:
(“example”, 3) ➞ [“example”, “example”, “example”] */

const repeat = (item, times) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(item);
  }
  return result;
};

console.log(repeat("example", 3));

/* The Greater Numbers.
 Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
i.e.
findGreatest([3, 4, 5], 4) ➞ 5
findGreatest([10, 20, 30], 12) ➞ 20, 30
findGreatest([0, 10, 3], 4) ➞ 10 */

const greatNumbers = (array, number) => {
  let text = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      text.push(array[i]);
    } else {
    }
  }

  return text.join(", ");
};

console.log(greatNumbers([10, 20, 30], 12));

/* AEIOU:
Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
i.e. findVowels(“this is a string”) ➞ 4 */

const findVowels = (str) => {
  let result;
  let counter = 0;
  let newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == "a") {
      counter++;
    } else if (newArr[i] == "e") {
      counter++;
    } else if (newArr[i] == "i") {
      counter++;
    } else if (newArr[i] == "o") {
      counter++;
    } else if (newArr[i] == "u") {
      counter++;
    } else {
    }
  }
  return counter;
};

console.log(findVowels("this is a string"));

//Different Solution

const findVowelsTwo = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const arr = str.split("");
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < vowels.length; j++)
      if (arr[i] == vowels[j]) {
        count++;
      }
  }
  return count;
};

console.log(findVowelsTwo("This is a aaiioo string"));

//Another Solution

const findVowelsThree = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const arr = str.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      count++;
    }
  }

  return count;
};

console.log(findVowelsThree("This is a aaiioo string"));

//indexof

/* No Duplicates!
 A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
[1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
[1, 6, 6, 9, 9] ➞ [1, 6, 9]
[2, 2, 2, 2, 2, 2] ➞ [2]
[5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25] */

const duplicate = (array) => {
  let newArray = [];
  let count;
  for (let i = 0; i < array.length; i++) {
    count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
    }
    if (count == 1) {
      newArray.push(array[i]);
    } else if (count > 1 && !newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(duplicate([1, 6, 6, 9, 9]));
console.log(duplicate([2, 2, 2, 2, 2, 2]));
console.log(duplicate([5, 10, 15, 20, 25]));

//Another Solution

const unique = (arr) => {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    } else {
      ///////////////////////////
    }
  }
  return uniqueArr;
};
console.log(unique([2, 2, 2, 2, 2, 2]));

/* Dictionary. (take your time on this pls ) also as tip you can use .includes()
 Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
Notes:
If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words.
Examples:
dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ [] */

const dictionary = (str, array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(str)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));

//Hadi solution1

const dictionaryHadi = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();
    if (currentValue.includes(userInput)) {
      result.push(currentValue);
    }
  }

  return result;
};

//Hadi solution 2

const dictionaryHadi2 = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();
    let shortStr = currentValue.substring(0, str.length);
    if (shortStr == userInput) {
      result.push(currentValue);
    }
  }

  return result;
};
