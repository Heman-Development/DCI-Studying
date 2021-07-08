// callbacks
function first(cb) {
  const funFunction = () => "Noooo";
  return cb;
}
function cb() {
  return "fun";
}

console.log(first(cb()));

// map
const names = ["Zain", "Olga", "Nancy"];
const heynames = names.map(
  (item, index) => `Hi, ${item}, you live in ${index}`
);
const heyNames = names.map((name) => `Hi, ${name}`);
console.log(heyNames);

// reduce
const numArr = [2, 3, 4, 5, 6, 7, 8];
const totalArr = numArr.reduce((acc, cur) => (acc += cur), 0);
console.log(totalArr);

// Examples
const counterLetters = (str) => {
  let arr = str.toLowerCase().split("");
  let result = arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  return result;
};
console.log(counterLetters("tree"));

//filter
const filterArr = names.filter((name) => name.length > 3);
console.log(filterArr);

//find
const findVal = names.find((item) => item.length == 5);
console.log(findVal);

// fill
const numbers = [2, 4, 5, 67, 8, 9, 5, 4];
numbers.fill(3, 2);
console.log(numbers);

//some
const isEven = (item) => item % 2 == 0;
console.log(numbers.some(isEven));

//every
const isBigger = (item) => item > 55;
console.log(numbers.every(isBigger));

//sort
const alpha = ["a", "c", "b", "!"]; //UTF-16
console.log(alpha.sort());
const words = ["hi", "a", "web", "development"]; // think about how you can make it alphabetical
const sortedArr = words.sort((a, b) => b.length - a.length); // now we sorting according to the size of the word (bigger to the smaller).
console.log(sortedArr);
console.log([11, 3, 4, 2, 33].sort((a, b) => a - b));

// for in
const person = {
  userName: "Zain",
  age: 22,
  add: "H",
};
for (prop in person) {
  console.log(`${prop} : ${person[prop]}`);
}
const [userName] = person;
console.log(person);
// React is all about filter, this and

// for of
for ([key, value] of person) {
  console.log("key" + key + "value" + value);
}
