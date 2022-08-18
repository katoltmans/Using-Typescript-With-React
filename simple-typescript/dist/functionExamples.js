"use strict";
// Functions (optional and default parameters)
// function sum(a: number, b?: number): number {
//     return a + (b || 0);
// }
//-both examples are ways to make b an optional parameter
function sum(a, b = 0) {
    return a + b;
}
sum(1);
const sum2 = (a, b) => a + b;
// Unknown number of arguments
function sumEverything(arg1, arg2, ...numbers) {
    return numbers.reduce((result, num) => result + num, 0);
}
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
