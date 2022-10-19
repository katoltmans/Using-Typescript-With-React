type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function SomeFunction<T>(value: T) {
    type A = T extends boolean
        ? "TYPE A"
        : T extends string
        ? "TYPE B"
        : T extends number
        ? "TYPE C"
        : "TYPE D";
    const someOtherFunction = (
        // function gets type T from the parent function when called
        someArg: T extends boolean ? "TYPE A" : "TYPE B"
    ) => {
        const a: "TYPE A" | "TYPE B" = someArg;
    };
    return someOtherFunction;
}

const result = SomeFunction(true);

// distributive property of a conditional type (never means it never occurs)
type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never; // can use never to filter a union type

// documentation: type Exclude<T, U> = T extends U ? never : T; - takes 2 union types and excludes all elements of union type U from union type T (if T is assignable to U, the result is never)
type ResultType = Exclude<"a" | "b" | "c", "a" | "b">; // result will be type "c" - "a" and "b" are excluded

/*
// The type that is checked should be checked as is - not ripped or modified by some other type:

'a' extends 'a' | 'b' ? never : 'a' => never  (if a is assignable to b, the result is never)
'b' extends 'a' | 'b' ? never : 'b' => never
'c' extends 'a' | 'b' ? never : 'c' => 'c'
*/

type MyType<T> = [string | number] extends [string | number] ? T : never;
type MyResult = MyType<string | number>; // each element is checked on its own against the MyType type

// conditional types can infer some type or part of a type in the extend clause

type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<"I am a string">;

// type InferSomething2<T> = T extends { a: infer A; b: number} ? A : any;
// type Inferred2 = InferSomething2<{ a: 'Hello'; b:1 }>;

type InferSomething2<T> = T extends { a: infer A; b: infer B } ? A & B : any;
type Inferred2 = InferSomething2<{
    a: { someAProp: 1 };
    b: { someBProp: "B" };
}>;

// documentation: type ReturnType<T extends (...arg: any) => any> = T extends (...args: any) => infer R : R : any;
type MyFunctionReturnValue = ReturnType<() => true>; // result = true

/*  
Utility types implemented using conditional types

    type Exclude<T, U> = T extends U ? never : T;
    type Exclude<T, U> = T extends U ? T : never;
    type NonNullable<T extends null | undefined ? never : T;
    type ReturnType<T extends (...arg: any) => any> = T extends (...args: any) => infer R : R : any;
    type InstanceType<T extends new (...args: any) => any> T extends new (...args:any) => infer R ? R : any;
    
*/
