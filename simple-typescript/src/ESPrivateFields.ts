class Robot2 {
    #name: string; //# denotes a private field (unique to the containing field)

    private somePrivateField = "It is private!!!"; // Using private instead of a hash will allow private fields to become public when accessed by sub classes.

    constructor(name: string) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

class AdvancedRobot extends Robot {
    #name: string;

    private somePrivateField = "OVERRIDDEN PRIVATE FIELD"; // Better to use a hash

    constructor(name: string) {
        super(name);
        this.#name = `Advanced ${name}`;
    }

    getAdvancedRobotName() {
        return this.name;
    }
}

const robot1 = new Robot2("Macey");
const robot2 = new AdvancedRobot("Jack");

// console.log("private", robot1.SomePrivateField); - should not be accessible if field is private

console.log("parent name", robot1.getName());
console.log("subclass name", robot2.getAdvancedRobotName());
