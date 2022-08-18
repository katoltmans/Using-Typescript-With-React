"use strict";
//Interfacing example - (structural sub typing)
let a = { someProp: 1 };
let b = a; // can only be assigned if they share the same number of/type of properties
let profile = {
    name: "John",
    age: 30,
};
const c = { someProp: "some prop" };
c.x = 1; // properties can be added on the fly, but they must match the interface
c.y = 2;
const sum = (a, b) => a + b;
sum.prop1 = "some prop";
let child = { x: "some prop", y: "y prop", z: "z prop" };
