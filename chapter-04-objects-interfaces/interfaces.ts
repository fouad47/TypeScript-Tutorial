/**
 * Chapter 4: Objects and Interfaces
 * 
 * Objects are fundamental in JS. TypeScript provides 'Interfaces' and 'Type Aliases' 
 * to describe the shape of an object.
 */

// 1. Basic Object Types
// You can define types inline directly on an object declaration, but it's messy.
let userShape: { id: number; username: string } = {
    id: 1,
    username: "johndoe",
};

// 2. Interfaces
// Interfaces define a contract for an object. They are the preferred way to type objects.
interface User {
    id: number;
    username: string;
    email: string;
    // Optional property indicated by '?'
    phoneNumber?: string; 
    // Readonly properties cannot be modified after initial creation
    readonly dateGained: Date;
}

// Let's create an object that strictly adheres to the User interface
const adminUser: User = {
    id: 101,
    username: "admin_boss",
    email: "admin@company.com",
    dateGained: new Date()
    // phoneNumber is optional, so omitting it is fine.
};

// adminUser.dateGained = new Date(); // Error: Cannot assign to 'dateGained' because it is a read-only property.

// 3. Type Aliases
// Type aliases are similar to interfaces but can also represent primitive types, unions, and more.
type Role = "Admin" | "Moderator" | "User"; // A union type of specific strings (String Literal Union)

type AppConfig = {
    theme: string;
    showSidebar: boolean;
};

const myConfig: AppConfig = {
    theme: "dark",
    showSidebar: false
};

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
In JavaScript, an object can be mutated infinitely:
const adminJS = { id: 101, username: "admin_boss" };
adminJS.email = "test@abc.com"; // dynamically added, perfectly legal
adminJS.id = "ONE_HUNDRED";     // changed from number to string

In TypeScript, `adminUser.email` is strictly typed, and dynamically adding undeclared properties throws errors.
*/

export {};
