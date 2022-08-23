"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Robot2_name, _AdvancedRobot_name;
class Robot2 {
    constructor(name) {
        _Robot2_name.set(this, void 0); //# denotes a private field (unique to the containing field)
        this.somePrivateField = "It is private!!!"; // Using private instead of a hash will allow private fields to become public when accessed by sub classes.
        __classPrivateFieldSet(this, _Robot2_name, name, "f");
    }
    getName() {
        return __classPrivateFieldGet(this, _Robot2_name, "f");
    }
}
_Robot2_name = new WeakMap();
class AdvancedRobot extends Robot {
    constructor(name) {
        super(name);
        _AdvancedRobot_name.set(this, void 0);
        this.somePrivateField = "OVERRIDDEN PRIVATE FIELD"; // Better to use a hash
        __classPrivateFieldSet(this, _AdvancedRobot_name, `Advanced ${name}`, "f");
    }
    getAdvancedRobotName() {
        return this.name;
    }
}
_AdvancedRobot_name = new WeakMap();
const robot1 = new Robot2("Macey");
const robot2 = new AdvancedRobot("Jack");
// console.log("private", robot1.SomePrivateField); - should not be accessible if field is private
console.log("parent name", robot1.getName());
console.log("subclass name", robot2.getAdvancedRobotName());
