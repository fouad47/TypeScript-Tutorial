/**
 * Chapter 2: Basic Types
 * 
 * TypeScript provides several basic types that align with JavaScript primitives, 
 * plus some special types built for type safety.
 */

// 1. Primitive Types (String, Number, Boolean)
let productName: string = "Laptop";
let productPrice: number = 999.99;
let inStock: boolean = true;

// 2. Arrays
// We can define an array of a specific type.
let tags: string[] = ["electronics", "computers", "premium"];
let ratings: Array<number> = [5, 4.5, 4.8]; // Alternative generic syntax

// 3. Tuples
// Tuples allow us to express an array with a fixed number of elements whose types are known.
// Useful for paired data.
let productRecord: [string, number] = ["Mouse", 25.50];

// 4. Any, Unknown, Void, Never
// 'any' allows any type (turns off type checking - use sparingly)
let flexibleData: any = "Could be anything";
flexibleData = 42; 

// 'unknown' is stringer than any. You cannot perform operations on it until you assert its true type.
let unknownData: unknown = 100;
if (typeof unknownData === "number") {
    console.log(unknownData + 50); // Valid now
}

// 'void' is used for functions that don't return a value
function logSystemBoot(): void {
    console.log("System booting...");
}

// 'never' represents values that never occur (like a function that always throws an error or loops forever)
function crashSystem(message: string): never {
    throw new Error(message);
}

// Type Inference:
// TypeScript is smart enough to infer the type even if we don't explicitly declare it.
let inferredString = "I am inferred as a string"; 
// inferredString = 5; // Error! TS knows it was a string

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
In JavaScript:
let record = ["Mouse", 25.50]; // an array
record.push(true); // perfectly fine in JS, but ruins the data structure

function doNothing() {
    console.log("no return");
    // JS functions implicitly return 'undefined'
}
*/

export {};
