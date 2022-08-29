"use strict";
// Union types are used to describe a value that can be one of several types
function someFn(myArgument) {
    if (typeof myArgument === "string") {
        let x = myArgument.toUpperCase();
    }
    else if (typeof myArgument === "number") {
        myArgument.toFixed();
    }
    else {
        myArgument;
    }
}
function isDog(someObj) {
    return someObj.bark !== undefined;
}
// function isDog(someObj: Dog | Cat): someObj is Dog {
//     return (<Dog>someObj).bark !== undefined;
// }
function callMyPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
// Using assertions
// function callMyPet(pet: Dog | Cat) {
//     pet.walk();
//     if ((<Dog>pet).bark) {
//         (<Dog>pet).bark();
//     } else {
//         (<Cat>pet).meow();
//     }
// }
// Class Examples
class Foo {
}
class Bar {
}
function fooBarFunction(obj) {
    if (obj instanceof Foo) {
        obj.foo;
    }
    else {
        obj.bar;
    }
}
