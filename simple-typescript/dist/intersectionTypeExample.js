"use strict";
function X(obj) {
    return obj.a + obj.b + obj.c;
}
// Intersection type = combines multiple objects into one
function combine(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const objA = { a: 1 };
const objB = { b: 2 };
const resultObj = combine(objA, objB);
// Will return any - need to avoid a return of any as much as we can
// function combine(objA, objB) {
//     return { ...objA, ...objB };
// }
// const objA = { a: 1 };
// const objB = { b: 2 };
// const resultObj = combine(objA, objB);
