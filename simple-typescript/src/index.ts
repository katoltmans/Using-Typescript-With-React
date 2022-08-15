// Various options for naming imports
import multiply, { multiplyByTwo as mB2 } from "./multiply";
//import * as multiplyModule from "./multiply";
//import multiply, { multiplyByTwo } from "./multiply";
//import { multiply, multiplyByTwo } from "./multiply";

const num1 = 5;
const num2 = 2;
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
//console.log(`${num1} * ${num2} = ${multiplyModule.default(num1, num2)}`);

console.log(mB2(2));
//multiplyModule.multiplyByTwo(2);
//multiplyByTwo(2);
