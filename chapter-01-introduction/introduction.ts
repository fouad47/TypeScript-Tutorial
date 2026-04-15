/**
 * Chapter 1: Introduction to TypeScript
 * 
 * TypeScript is a syntactic superset of JavaScript which adds static typing.
 * This means you can add types to your variables, but it ultimately compiles down to regular JavaScript.
 * 
 * Why use TypeScript?
 * - Catches errors at compile-time instead of runtime.
 * - Better IDE support (autocompletion, refactoring).
 * - Self-documenting code.
 */

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
In JavaScript, variables can hold any type of data, and their type can change dynamically.
This can lead to unexpected crashes when you try to call a method that doesn't exist on that type.

const greetingJS = "Hello World"; // string
// greetingJS = 42; // Valid in JS! But bad if we expect a string later.
// greetingJS.toLowerCase(); // Works initially, fails if it becomes a number.
*/


// -------------------------------------------------------------
// TYPESCRIPT IMPLEMENTATION
// -------------------------------------------------------------

// In TypeScript, we can restrict variables to a specific type using a colon (:)
let greetingTS: string = "Hello World!";

// Un-commenting the following line would cause a compile-time error in TypeScript 
// because we declared greetingTS as a string.
// greetingTS = 42; // Error: Type 'number' is not assignable to type 'string'.

/**
 * Our first TypeScript function.
 * We explicitly state that 'name' must be a string, and the function returns a string.
 */
function greetUser(name: string): string {
    return `${greetingTS} My name is ${name}.`;
}

console.log(greetUser("Alice")); // Works properly
// console.log(greetUser(123));  // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// Exporting to avoid global scope naming collisions in this project
export {};
