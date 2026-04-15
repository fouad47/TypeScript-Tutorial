/**
 * Chapter 6: Advanced Types (Generics)
 * 
 * Generics allow us to create reusable components that work over a variety of types
 * rather than a single type.
 */

// 1. Generics in Functions
// The <T> acts as a placeholder for a type that will be provided when the function is called.
function identity<T>(arg: T): T {
    return arg;
}

let outputStr = identity<string>("myString");
let outputNum = identity<number>(100);
// TypeScript can often infer the generic type:
let inferredGeneric = identity(true); // inferred as boolean

// 2. Generics in Interfaces
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

let numStringPair: KeyValuePair<number, string> = { key: 1, value: "One" };
let booleanNumPair: KeyValuePair<boolean, number> = { key: true, value: 100 };

// 3. Generics in Classes
class DataStorage<T> {
    private data: T[] = [];

    public addItem(item: T) {
        this.data.push(item);
    }

    public getItems(): T[] {
        return [...this.data];
    }
}

// A storage specifically for strings
const textStorage = new DataStorage<string>();
textStorage.addItem("First entry");
// textStorage.addItem(55); // Error: Argument of type 'number' is not assignable to type 'string'

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
Generics DO NOT exist in JavaScript. In JS, to achieve generic behavior, we historically
just accepted 'any' parameter unrestrictedly.
function identityJS(arg) { return arg; } 
// No way to enforce that if a string goes in, a string comes out. 
*/

export {};
