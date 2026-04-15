/**
 * Chapter 6: Advanced Types (Union, Intersection, Enums, Type Guards)
 */

// 1. Union Types
// A union type allows a variable to hold one of multiple distinct types.
function printId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}
printId(101);
printId("202-ABC");

// 2. Intersection Types
// An intersection type combines multiple types into one.
interface Draggable { drag(): void; }
interface Resizable { resize(): void; }

// WindowUI must implement BOTH interfaces
type WindowUI = Draggable & Resizable;
let myWindow: WindowUI = {
    drag: () => console.log("dragging"),
    resize: () => console.log("resizing")
};

// 3. Enums
// Enums allow us to define a set of named constants.
enum Direction {
    Up = 1,     // Starts at 1
    Down,       // 2
    Left,       // 3
    Right       // 4
}
// String enums are also possible and usually safer for debugging
enum ServerResponse {
    Success = "SUCCESS",
    Failed = "FAILED"
}
console.log(ServerResponse.Success); // "SUCCESS"

// 4. Type Guards
// When using Unions, we often need a Type Guard to narrow the type down before interacting with it.
function processId(id: number | string) {
    if (typeof id === "string") {
        // TypeScript knows 'id' is a string inside this block
        console.log(id.toUpperCase());
    } else {
        // TypeScript knows 'id' must be a number here
        console.log(id * 2);
    }
}

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
In JS, parameters inherently act as unions (they can be anything).
Enums do not exist in JS - developers usually use freeze objects:
const JS_DIRECTION = Object.freeze({ Up: 1, Down: 2 });
Intersection types also do not exist.
*/

export {};
