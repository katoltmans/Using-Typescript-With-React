// Typescript can merge multiple declarations declared with the same name into a single declaration which has the features of all the original declarations
// Possible to merge interfaces and namespaces - can't merge modules, but can augment them

// INTERFACE EXAMPLE:

///////////// - pretend this is in an external file that cannot be touched
interface Cart {
    calculateTotal(): number;
}
/////////////

// Add properties to an external interface
interface Cart {
    x: number;
}

interface Cart {
    calculateTotal(options: { discountCode: number }): number; // Overload with options argument
}

let myCart: Cart = {
    x: 1,
    calculateTotal(options?: { discountCode: number }) {
        // adding ? at the end of makes the option optional
        if (options && options.discountCode) {
            // apply discount
        }
        return 1;
    },
};

// NAMESPACE EXAMPLE:

//////////// - pretend this is in an external file that cannot be touched

namespace MyNamespace {
    export const x: number = 10;
    export interface SomeInterface {
        y: number;
    }
}

///////////

// Create another namespace to add custom properties and methods - can only use exported properties/methods
namespace MyNamespace {
    export const getX = () => X;
    export interface SomeInterface {
        x: number;
    }
}

//Only exported numbers can be used in declaration merging

// namespace MyNamespace {
//     export function getX() {
//         return x;
//     }
//     export interface SomeInterface {
//         x: number;
//     }
// }

MyNamespace.x;
MyNamespace.getX();

const someInterface: MyNamespace.SomeInterface = {
    x: 1,
    y: 2,
};

// FUNCTION EXAMPLE:

function someFunction() {
    return 10;
}

namespace someFunction {
    export const someProperty = 10;
}

someFunction.someProperty;

// ENUM EXAMPLE:

enum Vegetables {
    Tomato = "tomato",
    Onion = "onion",
}

// Add a static method to the enum
namespace Vegetables {
    export function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
}

const salad = Vegetables.makeSalad();

// CLASS EXAMPLE:

// Example adding static members using a namespace to an existing class
class Salad {}

namespace Salad {
    export const availableDressings = ["olive oil", "yogurt"];
}

Salad.availableDressings.includes("olive oil");

// MODULE AUGMENTATION EXAMPLE:

// To augment a module
import * as React from "react";
import { renderToString } from "react-dom/server";

// Can only modify existing functionality - cannot add custom exports
declare module "react" {
    interface Component {
        helloWorld(): string;
    }
}

// React.Component.prototype.helloWorld = function () {
//     return "Hello World!";
// };

// class MyComponent extends React.Component {
//     render() {
//         return <div>{this.helloWorld()}</div>;
//     }
// }

// console.log(renderToString(<MyComponent />));
