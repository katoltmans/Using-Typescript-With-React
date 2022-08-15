class Robot {
    _color: string;

    private static availableColors = ["green", "yellow"];
    static isColorAvailable(color: string) {
        return Robot.availableColors.includes(color);
    }

    constructor(protected _name: string) {}

    askName() {
        console.log(`My name is ${this.name}`);
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`);
    }

    set color(color: string) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error(`Color ${color} is not available`);
        }
        this._color = color;
    }

    set name(value: string) {
        this._name = "PREFIX_" + value;
    }

    get name() {
        return this._name + "_SUFFIX";
    }
}

class FlyingRobot extends Robot {
    private readonly jetpackSize: number; // private readonly in front of the property prevents it from ever being reassigned

    constructor(name: string, jetPackSize: number) {
        super(name);
        this.jetpackSize = jetPackSize;
    }

    move(distance: number) {
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
