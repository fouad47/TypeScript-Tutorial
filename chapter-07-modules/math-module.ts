/**
 * Chapter 7: Modules
 * 
 * Complex applications should be broken down into multiple files.
 * This file is an isolated module exporting a few functions.
 */

// Use the 'export' keyword to make it available to other files.
export function add(a: number, b: number): number {
    return a + b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

// Default exports can be imported without curly braces
export default class MathUtil {
    static multiply(a: number, b: number): number {
        return a * b;
    }
}
