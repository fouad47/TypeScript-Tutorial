/**
 * Chapter 5: Classes and OOP
 * 
 * TypeScript supports full Object-Oriented Programming principles including
 * Encapsulation, Inheritance, Polymorphism, and Abstraction.
 */

// 1. Classes and Constructors
// A class acts as a blueprint for creating objects.
class Animal {
    // Access Modifiers:
    // public: accessible from anywhere (default)
    // private: accessible only within this class
    // protected: accessible within this class and subclasses
    
    public name: string;
    protected age: number;
    private uniqueId: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.uniqueId = `ID_${Math.random()}`; // Encapsulated logic
    }

    public makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }

    // Abstraction & Encapsulation: Hiding complex internal logic
    protected getAgeInHumanYears(): number {
        return this.age * 7;
    }
}

// 2. Inheritance
// 'extends' is used to inherit properties and methods from a base class.
class Dog extends Animal {
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        // 'super' calls the parent class's constructor. MUST be called first.
        super(name, age);
        this.breed = breed;
    }

    // 3. Polymorphism (Method Overriding)
    // The subclass overrides the parent class's behavior.
    public makeSound(): void {
        console.log(`${this.name} barks!`);
    }

    public reportStatus(): void {
        // We can access 'age' because it is protected in Animal
        console.log(`${this.name} is a ${this.breed} and is ${this.getAgeInHumanYears()} human years old.`);
    }
}

const myDog = new Dog("Buddy", 3, "Golden Retriever");
myDog.makeSound();   // Buddy barks!
// myDog.age;        // Error: 'age' is protected.
// myDog.uniqueId;   // Error: 'uniqueId' is private.
myDog.reportStatus();

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
In modern JavaScript, classes and 'extends' exist, but access modifiers do not 
exist naturally in the same strict way (JS recently added `#` for private fields but it's different and 'protected' is missing).

class AnimalJS {
    constructor(name) {
        this.name = name; // No type validation for properties
    }
}
*/

export {};
