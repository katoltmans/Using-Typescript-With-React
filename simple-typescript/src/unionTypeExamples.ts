// Union types are used to describe a value that can be one of several types

function someFn(myArgument: number | string | boolean) {
    if (typeof myArgument === "string") {
        let x = myArgument.toUpperCase();
    } else if (typeof myArgument === "number") {
        myArgument.toFixed();
    } else {
        myArgument;
    }
}

// Interface example
interface Dog {
    bark(): void;
    walk(): void;
}

interface Cat {
    meow(): void;
    walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
    return (someObj as Dog).bark !== undefined;
}

// function isDog(someObj: Dog | Cat): someObj is Dog {
//     return (<Dog>someObj).bark !== undefined;
// }

function callMyPet(pet: Dog | Cat) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    } else {
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
    foo: number;
    commonProp: string;
}

class Bar {
    bar: number;
    commonProp: string;
}

function fooBarFunction(obj: Foo | Bar) {
    if (obj instanceof Foo) {
        obj.foo;
    } else {
        obj.bar;
    }
}
