// Alias types are used to create a new name used to refer to a type

// AliasName = assigned types to alias
type Alias1 = string | string[] | null; // variable type
type Alias2 = { a: number } & { b: number }; // intersection type
type Alias3<T> = T[]; // generic type

type Alias4 = {
    // alias used as an interface (describes the shape of an object)
    a: number; // Best practice to use interfaces to create types of objects and aliases to reference those types
    b: number;
};
