//Interfacing example - (structural sub typing)

interface A {
    someProp: number;
}

interface B {
    someProp: number;
}

let a: A = { someProp: 1 };
let b: B = a; // can only be assigned if they share the same number of/type of properties

//Interfaces
interface Profile {
    readonly name: string; // adding readonly will prevent a property from being able to be changed
    age?: number; //? makes the property name optional
}

let profile: Profile = {
    name: "John",
    age: 30,
};

//profile.name = "Jim";

// Index Signature

interface template {
    someProp: string; // property must match the index signature
    [key: string]: number | string; // properties can be added on the fly, but the key must be a string and the value must be a number
}

const c: template = { someProp: "some prop" };
c.x = 1; // properties can be added on the fly, but they must match the interface
c.y = 2;

// Call Signature
interface Sum {
    (a: number, b: number): number;
    prop1: string;
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = "some prop";

//Extending Interfaces
interface Parent {
    x: string;
}

interface Parent2 {
    y: string;
}

interface Parent3 {
    z: string;
}

interface Child extends Parent, Parent2, Parent3 {}

let child: Child = { x: "some prop", y: "y prop", z: "z prop" };
