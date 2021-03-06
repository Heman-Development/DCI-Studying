// One is not like the others Create a function that takes an array of numbers and return the number that’s unique.

// Examples:

// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
// unique([3, 3, 3, 7, 3, 3]) ➞ 7

const unique = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      result.push(currentValue);
    }
  }
  return result.join(", ");
};
console.log(unique([3, 3, 3, 7, 3, 3]));
// The Greater Numbers Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

// Examples:

// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > num) {
      result.push(element);
    }
  }
  return result.join(", ");
};
console.log(findGreatest([10, 20, 30], 12));
// The longest word Create a function to find the longest word in a given string.

// Example: longestWord("this is a web development course") ➞ development

const longestWord = (str) => {
  let strToArr = str.split(" ");
  let longWord = "";
  for (let i = 0; i < strToArr.length; i++) {
    if (longWord.length < strToArr[i].length) {
      longWord = strToArr[i];
    }
  }
  return longWord;
};

console.log(longestWord("this is a web development course"));

// Reverse Create a function to reverse a number.

// Example: reverse(34532) ➞ 23543
const reverse = (num) => {
  // let x = ""+ num;
  // let x = `${num}`
  // let x = num.toString()
  return num.toString().split("").reverse().join("");
};

console.log(reverse(34532));

// Alphabetical Order Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.

// Example: alphaOrder("webdev") ➞ "bdeevw"

const alphaOrder = (word) => {
  // let wordToArr = word.split("");
  // let sortedArr = wordToArr.sort();
  // let joinedArr = sortedArr.join("");
  // return joinedArr
  return word.split("").sort().join("");
};

console.log(alphaOrder("webdev"));

// Bonus Questions

// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// Examples:

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

const hackerSpeak = (str) => {
  const lowerStr = str.toLowerCase();
  const letters = lowerStr.split("");
  const hackerSpeak = [];
  for (let i = 0; i < letters.length; i++) {
    switch (letters[i]) {
      case "a":
        letters[i] = "4";
        break;
      case "e":
        letters[i] = "3";
        break;
      case "i":
        letters[i] = "1";
        break;
      case "o":
        letters[i] = "0";
        break;
      case "s":
        letters[i] = "5";
        break;
      default:
        letters[i];
    }
    hackerSpeak.push(letters[i]);
  }
  return hackerSpeak.join("");
};

// console.log(hackerSpeak("become a coder"));
// console.log(hackerSpeak("I love map"));
// snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.

// Examples:

// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

const toCamelCase = (str) => {
  let strToArr = str.toLowerCase().split("_");
  for (let i = 1; i < strToArr.length; i++) {
    strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1); //  W + orld = World
  }
  return strToArr.join("");
};
console.log(toCamelCase("hello_world"));
console.log(toCamelCase("javascript_is_fun"));
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

// Examples:

// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true

const isSymmetrical = (num) => {
  return num.toString() === num.toString().split("").reverse().join("");
};
console.log(isSymmetrical(1112111));
console.log(isSymmetrical(1123451));

let lettersArr = ["H", "a", "d", "i"];
console.log(lettersArr.join(""));

// Pig Latin Translation Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".
// Move the first letter of each word to the end of the word. Add "ay" to the end of the word. Words starting with a vowel (A, E, I, O, U) append "way" to the end instead. Extra Practice

// Preserve proper capitalization as in the examples below. Examples:

// pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
// pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
// // pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."

const pigLatin = (str) => {
  const lowerCase = str.toLowerCase().split(".").join("");
  const splitStr = lowerCase.split(" ");

  const vowels = ["a", "e", "i", "o", "u"];
  const pigTranslation = [];
  for (let i = 0; i < splitStr.length; i++) {
    // this
    let firstChar = splitStr[i][0]; // t
    let remainder = splitStr[i].slice(1, splitStr[i].length); // his
    if (vowels.includes(firstChar)) {
      // checking if i is truthy or falsy.
      //If falsy, then it's the first word because it's 0.
      let firstCharVowel =
        (i ? firstChar : firstChar.toUpperCase()) + remainder + "way";
      pigTranslation.push(firstCharVowel);
    } else {
      if (i === 0) {
        let firstCharRem = remainder[0];
        let wordRemainder = remainder.slice(1, remainder.length);
        remainder = firstCharRem.toUpperCase() + wordRemainder;
        //My solution to Hadi's challenge
      }
      let firstCharConsonant = remainder + firstChar + "ay";
      pigTranslation.push(firstCharConsonant);
    }
  }

  return `${pigTranslation.join(" ")}.`;
};

console.log(pigLatin("this pig latin"));
console.log(pigLatin("this pig latin."));
console.log(pigLatin("He told us a very exciting tale."));
