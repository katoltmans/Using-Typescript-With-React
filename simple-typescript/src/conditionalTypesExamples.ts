type SomeType = number;
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
        someArg: T extends boolean ? "TYPE A" : "TYPE B"
    ) => {
        const a: "TYPE A" | "TYPE B" = someArg;
    };
    return someOtherFunction;
}

const result = SomeFunction(true);

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;

// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<"a" | "b" | "c", "a" | "b">;

/*
'a' extends 'a' | 'b' ? never : 'a' => never
'b' extends 'a' | 'b' ? never : 'b' => never
'c' extends 'a' | 'b' ? never : 'c' => never
*/

// type MyType<T> = [string | number] extends [string | number] ? T : never;
// type MyResult = MyType<string | number>;

type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<"I am a string">;

// type InferSomething2<T> = T extends { a: infer A; b: number} ? A : any;
// type Inferred2 = InferSomething2<{ a: 'Hello'; b:1 }>;

type InferSomething2<T> = T extends { a: infer A; b: number } ? A & B : any;
type Inferred2 = InferSomething2<{
    a: { someAProp: 1 };
    b: { someBProp: "B" };
}>;

type MyFunctionReturnValue = ReturnType<() => true>;
