/**
 * Chapter 3: Variables and Functions
 * 
 * In this chapter, we explore variable declarations (let, const, var) 
 * and typing functions, including optional/default parameters and arrow functions.
 */

// 1. Variable Declarations
// 'const' indicates a value that cannot be reassigned.
const PI: number = 3.14159;
// 'let' is block-scoped and allows reassignment.
let radius: number = 10;
// 'var' is function-scoped (or globally scoped). In modern JS/TS, avoid using var to prevent hoisting bugs.
var oldStyle: string = "Use let or const instead!";

// 2. Typing Functions
// We declare the types of parameters and the type of the return value.
function calculateArea(r: number): number {
    return PI * r * r;
}

// 3. Optional and Default Parameters
// The '?' makes a parameter optional. Optional parameters must come after required parameters.
function formatGreeting(name: string, title?: string): string {
    if (title) {
        return `Hello, ${title} ${name}`;
    }
    return `Hello, ${name}`;
}

// Default parameters assign a value if none is passed.
function raisePower(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

// 4. Arrow Functions
// Arrow functions are a concise syntax for writing functions. Types work exactly the same.
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Shorthand arrow function (implicit return)
const subtract = (a: number, b: number): number => a - b;

console.log(calculateArea(radius));
console.log(formatGreeting("John"));
console.log(formatGreeting("John", "Dr."));
console.log(raisePower(5)); // Returns 25

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
In JavaScript:
function formatGreetingJS(name, title) {
    // If title isn't passed, it is undefined.
    // There are no warnings if a developer passes in boolean for a string parameter.
    return "Hello, " + (title ? title + " " : "") + name;
}

let result = formatGreetingJS(true, 123); // Causes nonsense output like "Hello, 123 true"
*/

export {};
