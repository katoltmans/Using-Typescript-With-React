"use strict";
//Two different ways to initialize a property
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    bark() {
        console.log("Woof!");
    }
}
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    animal.setGroup("mammals");
    return animal;
}
const cat = initializeAnimal(Cat, "Felix");
const dog = initializeAnimal(Dog, "Ava");
dog.bark();
