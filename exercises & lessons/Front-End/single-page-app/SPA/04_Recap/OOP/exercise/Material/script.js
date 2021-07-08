//

/* 

class => 1. properties (attributes)      2. methods (behavior)
car     color, maxspeed,                        moving, stopping, playingMusic

*/

class Car{
    constructor(color) {
        this.numberOfWheels = 4;
        this.color = color;
    }

    myVoidmethod() {
        this.color = 'new Value';
        console.log('hello, i am a void method');
    }

    secondMethod() {
        console.log('this is second method');
    }
}

//create an instance


class Animal{
    constructor(name) {
        this.name = name
    }

    eating() {
        console.log(`${this.name} is eating`);
    }

    getName() {
        return this.name
    }
}


class Dog extends Animal{
    constructor(name, tailColor) {
        super(name);
        this.tailColor = tailColor
    }
}

let doggy = new Dog('pluto', 'white-black');
doggy.eating()

let mydogName = doggy.getName()

let dogName = ['dog1', 'dog2', 'dog3'];

let dogs = [];

for (let dog of dogName) {
    dogs.push(new Dog(dog))
}
console.log(dogs);