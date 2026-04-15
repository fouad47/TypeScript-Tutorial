/**
 * Chapter 8: Error Handling and Debugging
 * 
 * In TypeScript, we have two types of errors:
 * 1. Type Errors / Compile-time errors (Found by the TS compiler before running)
 * 2. Runtime Errors (Found when the code actually runs, like network failures)
 */

// 1. Type Errors (Prevented code)
let score: number = 100;
// score = "A"; // If uncommented, TS throws a compile-type error, preventing a future bug.


// 2. Runtime Errors (Handled via Try/Catch)
function parseJSONConfig(jsonString: string): any {
    try {
        // Attempt to parse external input. Might fail if the string is malformed.
        const parsed = JSON.parse(jsonString);
        return parsed;
    } catch (error) {
        // 'error' is typically typed as 'unknown' in strict TS because throws can be anything.
        if (error instanceof Error) {
            console.error("Failed to parse config: ", error.message);
        } else {
            console.error("Unknown error occurred.");
        }
        
        // Provide a safe fallback instead of crashing
        return { isFallback: true };
    } finally {
        console.log("JSON parsing attempt completed.");
    }
}

console.log(parseJSONConfig('{"valid": true}'));
console.log(parseJSONConfig('{invalid_json...}')); // Triggers the catch block

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
Try/Catch syntax is identical in JavaScript.
However, in JavaScript 'error' in 'catch (error)' is simply 'any'. 
In TypeScript, you can strictly type it or assert it as an Error object 
to securely access `error.message` with autocomplete.
*/

export {};
