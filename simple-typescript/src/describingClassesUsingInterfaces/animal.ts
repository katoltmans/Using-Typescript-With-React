interface Animal {
    name: string;
    group: string | undefined; //undefined allows a property to not need defining upon initialization
    setGroup(group: string): void;
}

//Two different ways to initialize a property
class Cat implements Animal {
    //name: string = "";  ALternate way to initialize a property
    name: string;
    group: string | undefined;
    constructor(name: string) {
        this.name = name;
    }
    setGroup(group: string) {
        this.group = group;
    }
}

class Dog implements Animal {
    name: string;
    group: string | undefined; //Must be undefined to match interface
    constructor(name: string) {
        this.name = name;
    }
    setGroup(group: string) {
        this.group = group;
    }
    bark() {
        console.log("Woof!");
    }
}

interface AnimalConstructor<T> {
    new (name: string): T;
}

function initializeAnimal<T extends Animal>(
    Animal: AnimalConstructor<T>,
    name: string
) {
    const animal = new Animal(name);
    animal.setGroup("mammals");
    return animal;
}

const cat = initializeAnimal(Cat, "Felix");
const dog = initializeAnimal(Dog, "Ava");
dog.bark();
