"use strict";
class Robot {
    constructor(_name) {
        this._name = _name;
    }
    static isColorAvailable(color) {
        return Robot.availableColors.includes(color);
    }
    askName() {
        console.log(`My name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
    set color(color) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error(`Color ${color} is not available`);
        }
        this._color = color;
    }
    set name(value) {
        this._name = "PREFIX_" + value;
    }
    get name() {
        return this._name + "_SUFFIX";
    }
}
Robot.availableColors = ["green", "yellow"];
class FlyingRobot extends Robot {
    constructor(name, jetPackSize) {
        super(name);
        this.jetpackSize = jetPackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const robot = new Robot("John");
robot.askName();
const flyingRobot = new FlyingRobot("Jim", 2);
flyingRobot.move(10);
console.log(`My name is ${flyingRobot.name}`);
Robot.isColorAvailable;
{
    /* 3 types of modifiers: public, private, and protected:
    public: by default when not specified,
    private: can only be accessed from the class where it is declared,
    protected: can be accessed only from the class where it is defined or any sub class

*/
}
