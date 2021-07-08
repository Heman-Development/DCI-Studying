//JSON
let JSONuser = `{"name": "Fahim","age": 36,"isMarried": true}`;

let obj = JSON.parse(JSONuser);
console.log(obj);

//JS Object
let JSuser = {
  name: "Fahim",
  age: 36,
  isMarried: true,
};

let JSUser2String = JSON.stringify(JSuser);
console.log(JSUser2String);


