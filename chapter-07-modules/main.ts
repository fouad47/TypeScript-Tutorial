/**
 * Chapter 7: Modules (Main entry point)
 * 
 * We use the 'import' syntax to bring in methods and classes from other files.
 * This ensures clean project structure and single-responsibility principles.
 */

// Named imports require curly braces
import { add, divide } from "./math-module";

// Default imports do not use curly braces
import MathUtil from "./math-module";

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
In older JS (CommonJS/Node), module imports look like:
const mathModule = require('./math-module');
module.exports = { add };

Modern JS uses the same ES6 Import/Export syntax. However, TypeScript checks at compile-time 
whether the file actually exists and whether it exports what you claim it exports.
*/

const sum = add(10, 5);
const result = MathUtil.multiply(5, 5);

console.log(`Sum: ${sum}, Result: ${result}`);
