// Destructuring objects as function parameters
function fun(num, { name = "new" }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
fun(2, {});

const userData = {
  firstName: "Steel",
  lastName: "soWhat",
  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fullName(str) {
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};
// getter
userData.fullName;

//setter
userData.fullName = "Hadi Nsreeny";

//constructor
function Person(name, age, act) {
  // Template. That is the reason why the name of the function is capitalized
  this.name = name;
  this.age = age;
  this.act = act;
  this.printOut = function () {
    console.log(
      `Hey, ${this.name}, you are too old ${this.age} and you do ${this.act}`
    );
  };
}

let zain = new Person("Zain", 21, ["sleep"]);
console.log(zain);
zain.printOut();
const olga = new Person("Olga", 40, "No thing");
olga.printOut();

// for in object.
//Note: Can only be used in object
for (let prop in zain) {
  console.log(`zain.${prop} : ${zain[prop]}`);
}

let family = [
  ["Zain", 22, "teacher"],
  ["Olga", 40, "chef"],
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].lenght; j++) {
    console.log(family[i][j]);
  }
}

//forEach arr
//Note: Can only be used with arr. Is similar to mapping in which you can access each and every element of the array
family.forEach((arr) => arr.forEach((element) => console.log(element)));

//for of arr
//Note: Can only be used with arr. It is mainly used for nested arrays wherein you can access blocks of information inside an array
for (let [key, val] of Object.entries(zain)) {
  console.log(`${key}:${val}`);
}

//assignmentes:

// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

function Soda(productName, price, inventory) {
  this.name = productName;
  this.price = price;
  this.inventory = inventory;
  this.printOut = function () {
    console.log(
      `For item ${this.name} selling price ${this.price}. We have ${this.inventory} in our store`
    );
  };
}

const pepsi = new Soda("Pepsi", 2.33, 2232);
console.log(pepsi);
pepsi.printOut();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const car = {
  modelName: "Audi",
  modelNumber: "2019",
  enginCapacity: "600hp",

  get data() {
    console.log(`${this.modelName} ${this.modelNumber} ${this.enginCapacity}`);
  },
  set data(str) {
    let array = str.split("-");
    this.modelName = array[0];
    this.modelNumber = array[1];
    this.enginCapacity = array[2];
  },
};

car.data;
car.data = "BMW-2021-1200hp";
car.data;

//classes
class Animals {
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  display() {
    console.log(`this very cute ${this.kind} lives in ${this.hometown}`);
  }
}

const cat = new Animals("cat", "LA");
cat.display();
console.log(cat);

const newPet = new Animals("dog", "NY");
newPet.display();

class Color {
  constructor() {
    this.name = "";
    this.temp = 0;
  }
}

const red = new Color();
console.log(red);
red.name = "red";
red.temp = 232;
console.log(red);

//tv app

class Tv {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    if (this.volume < 100) {
      this.volume++;
    } else {
      console.log("You are already in the max volume");
    }
  }
  decVolume() {
    if (volume > 0) {
      this.volume--;
    } else {
      console.log("Mute");
    }
  }
  reset() {
    this.channel = 1;
    this.volume = 10;
  }
  randomChannel() {
    this.channel = Math.floor(Math.random() * 50) + 1;
    console.log(`You are watching channel ${this.channel}`);
  }
  display() {
    return `This Tv ${this.brand}, had ${this.channel} and the volume in on ${this.volume}`;
  }
}

const phillips = new Tv("Phillips", 3, 50);
console.log(phillips);
phillips.incVolume();
console.log(phillips);
phillips.reset();
console.log(phillips);
const samsung = new Tv("Samsung", 20, 99);
samsung.incVolume();
console.log(samsung);
samsung.randomChannel();

const apple = new Tv("Apple", 30, 100);
console.log(apple);

function bitwiseAND(n1, n2) {
  let num1 = n1.toString(2).split("");
  console.log(num1);
  let num2 = n2.toString(2).split("");
  console.log(num2);
  return num1.map((item, i) => (item == num2[i] ? 1 : 0));
}
console.log(bitwiseAND(6, 23));
