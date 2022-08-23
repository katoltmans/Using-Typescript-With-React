// Boolean
let boo: boolean = true;

// Number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// Strin'
const hello: string = "Hello";
const world: string = "World";
const HelloWorld = `
    ${hello}
    ${world}   
`;

// Null and Undefined

let n: null = null;
let u: undefined = undefined;

// let someNumber: number = null

//let someNumber: number = null;

function uppercaseFirstLetter(str: string) {
    if (str) {
        return str[0].toUpperCase() + str.substring(1);
    }
}

console.log(uppercaseFirstLetter("hello"));

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = new Map();

//Void
function log(message: string): void {
    console.log(message);
}

//Array
let array1: string[] = ["x", "y"];
let array2: Array<string> = array1;

//Tuple - fixed number of elements
let tuple: [string, number] = ["str", 1];

//Enum
enum Color {
    Red = "r",
    Green = "green",
    Blue = 99,
}

let myFavoriteColor: Color = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color[99]);

//Any - used to describe an unknown variable
let ANY: any;
ANY = "a string";
ANY = 1;
ANY = true;

//Type Assertions

const email = document.getElementById("email");

if (email) {
    email.addEventListener("change", (e) => {
        const input = e.currentTarget as HTMLInputElement;
        console.log(input.value);
    });
}
