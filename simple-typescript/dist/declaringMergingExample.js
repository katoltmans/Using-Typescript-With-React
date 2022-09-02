"use strict";
// Typescript can merge multiple declarations declared with the same name into a single declaration which has the features of all the original declarations
// Possible to merge interfaces and namespaces - can't merge modules, but can augment them
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
let myCart = {
    x: 1,
    calculateTotal(options) {
        // adding ? at the end of makes the option optional
        if (options && options.discountCode) {
            // apply discount
        }
        return 1;
    },
};
// NAMESPACE EXAMPLE:
//////////// - pretend this is in an external file that cannot be touched
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.x = 10;
})(MyNamespace || (MyNamespace = {}));
///////////
// Create another namespace to add custom properties and methods - can only use exported properties/methods
(function (MyNamespace) {
    MyNamespace.getX = () => X;
})(MyNamespace || (MyNamespace = {}));
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
const someInterface = {
    x: 1,
    y: 2,
};
// FUNCTION EXAMPLE:
function someFunction() {
    return 10;
}
(function (someFunction) {
    someFunction.someProperty = 10;
})(someFunction || (someFunction = {}));
someFunction.someProperty;
// ENUM EXAMPLE:
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Onion"] = "onion";
})(Vegetables || (Vegetables = {}));
// Add a static method to the enum
(function (Vegetables) {
    function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
    Vegetables.makeSalad = makeSalad;
})(Vegetables || (Vegetables = {}));
const salad = Vegetables.makeSalad();
// CLASS EXAMPLE:
// Example adding static members using a namespace to an existing class
class Salad {
}
(function (Salad) {
    Salad.availableDressings = ["olive oil", "yogurt"];
})(Salad || (Salad = {}));
Salad.availableDressings.includes("olive oil");
// MODULE AUGMENTATION EXAMPLE:
// To augment a module
const React = __importStar(require("react"));
const server_1 = require("react-dom/server");
React.foo = () => { };
React.Component.prototype.helloWorld = function () {
    return "Hello World!";
};
class MyComponent extends React.Component {
    render() {
        return React.createElement("div", null, this.helloWorld());
    }
}
console.log((0, server_1.renderToString)(React.createElement(MyComponent, null)));
