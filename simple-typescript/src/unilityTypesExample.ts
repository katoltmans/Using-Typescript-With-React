// Partial<T> (Partial Generic Type): takes one generic parameter
//    Makes a copy and adds properties from an original interface, but makes them optional

interface Starship {
    name: string;
    enableHyperjump: boolean;
}

// Partial designation makes properties optional
const updateStarship = (id: number, starship: Partial<Starship>) => {};

// enableHyperjump is now optional and does not need to be included
updateStarship(1, {
    name: "Explorer",
});

{
    /*
NOTES: 

Required<T> (Required Generic Type): takes one generic parameter
    Makes a copy and adds properties from an original interface, but makes them required (even if optional in the original)

Readonly<T> (Readonly Generic Type): takes one generic parameter
    Makes a copy and adds properties from an original interface, but makes them readonly so they cannot be overwritten

Record<K,T> (Record Generic Type): takes two generic parameters (for maps - type of the key and type of the value)
    Makes a map of objects of a certain interface type
*/
}

const starships: Record<string, Starship> = {
    Explorer1: {
        name: "Explorer1",
        enableHyperjump: true,
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperjump: false,
    },
};

// Pick<T,K> (Pick Generic Type): takes two generic parameters (name of the original type, specific property types to include)
//     Allows a new type to be created based on some other type with only the chosen properties of the original type

type StarshipNameOnly = Pick<Starship, "name">;

// Omit<T,K> (Omit Generic Type): takes two generic parameters (name of the original type, specific property types to omit)
//     Allows a new type to be created based on some other type with without properties that are specifically omitted

type StarshipWithoutName = Omit<Starship, "name">;

{
    /*
Exclude<T,U> (Exclude Generic Type): takes two generic parameters (name of the original type, specific type of property to exclude)
    Allows a new type to be created based on some other type with without types that are specifically excluded

Extract<T,U> (Extract Generic Type): takes two generic parameters (name of the original type, specific type of property to extract and add to)
    Allows a new type to be created based on some other type with extracted and added types
*/
}

type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";
let JohnsDrink: AvailableDrinks;
JohnsDrink = "Coffee";

type DrinksJaneDoesntLike = "Coffee" | "Orange Juice";
type DrinksJaneLikes = "Tea" | "Lemonade" | "Mohito";
let JanesDrink: Extract<AvailableDrinks, DrinksJaneLikes>;
// let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
JanesDrink = "Tea";

// NonNullable<T> (NonNullable Generic Type - cannot be null or undefined): takes one generic parameter (union type without null or undefined)
//     Allows a new type to be created that does not allow null or undefined

// ReturnType<T> (Return Generic Type): takes one generic parameter (type definition of a function)
//     Allows a return the type of a function

interface StarshipProperties {
    color?: "blue" | "red" | "green";
}

function paintStarship(
    id: number,
    color: NonNullable<StarshipProperties["color"]>
) {
    return {
        id,
        color,
    };
}

type paintStarshipReturn = ReturnType<typeof paintStarship>;
paintStarship(1, "green"); // cannot be undefined

// InstanceType<T> (Instance Generic Type): takes one generic parameter (type static method called)
//     Allows a return the type of the static side of a class

{
    /*  CODE EXAMPLES:
type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
    return class extends Base {
        deleted: boolean;
        delete() {}
    };
}

class Car {
    constructor(public name: string) {}
}

class User {
    constructor(public name: string) {}
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableCarInstance = InstanceType<typeof DeletableCar>;
type DeletableUserInstance = InstanceType<typeof DeletableUser>;

class Profile {
    user: DeletableUserInstance;
    car: DeletableCarInstance;
}

const profile = new Profile();
profile.user = new DeletableUser("John");
profile.car = new DeletableCar("Ferrari");
*/
}

// ThisType<T> (Instance Generic Type): takes one generic parameter (type of property)
//     Allows a marker to specify the type of a property in an object - data and methods (D & M)

interface MyObject {
    sayHello(): void;
}

interface MyObjectThis {
    helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello() {
        return this.helloWorld();
    },
};

myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return "Hello World!";
    },
});

console.log(myObject.sayHello());
