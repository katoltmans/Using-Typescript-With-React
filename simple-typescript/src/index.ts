//Various options for naming imports
import multiply, { multiplyByTwo as mB2 } from "./multiply";
//import * as multiplyModule from "./multiply";
//import multiply, { multiplyByTwo } from "./multiply";
//import { multiply, multiplyByTwo } from "./multiply";

const a = 5;
const b = 2;
console.log(`${a} * ${b} = ${multiply(a, b)}`);
//console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);

console.log(mB2(2));
//multiplyModule.multiplyByTwo(2);
//multiplyByTwo(2);
