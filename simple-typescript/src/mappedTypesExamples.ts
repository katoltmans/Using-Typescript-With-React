// Mapped Types - create a new type by iterating over a list of properties

type Properties = "propA" | "propB";

// Create a new type where each property comes from another generic type
type MyMappedType<T> = {
    [P in keyof T]: T[P] | null;
};

type MyNewType = MyMappedType<{ a: "a"; b: "b" }>;

// Takes an existing type, picks some properties from this type and creates a new type with only those properties
// <existingType, list of properties to pick from T>
type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P];
};

type MyNewType2 = Pick1<{ a: "a"; b: "b" }, "a" | "b">;

// Construct a type with a set of properties K of type T
type Record1<K extends keyof any, T> = {
    [P in K]: T;
} & { someProperty: string };

const someRecord: Record1<"A" | "B", number> = {
    A: 1,
    B: 2,
    someProperty: "abc",
};
// someRecord.apples = 10;
// someRecord.oranges = 10;
// someRecord[1] = 1;

interface Record2 {
    [key: number]: number;
}
