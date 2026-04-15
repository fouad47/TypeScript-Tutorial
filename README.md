# TypeScript Masterclass Tutorial Project

Welcome to the **TypeScript Masterclass Project**! This project is designed to teach you TypeScript from beginner up to intermediate and advanced concepts such as Object-Oriented Programming (OOP), AI automation mockups, and QA testing using Playwright.

## 📁 Repository Structure

The code is strictly organized chapter-by-chapter as requested, with additional root-level directories to demonstrate industry-standard folder hierarchy.

### 📚 The Chapters
- **`chapter-01-introduction`**: Basics of TS vs JS, and why strong typing matters.
- **`chapter-02-basic-types`**: Strings, numbers, booleans, arrays, tuples, `any`, `unknown`, `void`, and `never`.
- **`chapter-03-variables-functions`**: `let`, `const`, optional parameters, default parameters, and arrow functions.
- **`chapter-04-objects-interfaces`**: Object typings, the `interface` keyword, type aliases, and readonly properties.
- **`chapter-05-classes-oop`**: Object-Oriented principles, modifiers (`public`/`private`/`protected`), inheritance, and polymorphism.
- **`chapter-06-advanced-types`**: Generics, union types, intersection types, and enums.
- **`chapter-07-modules`**: File splitting with `import`/`export`.
- **`chapter-08-error-handling`**: Distinguishing between runtime exceptions and compile-time type errors.
- **`chapter-09-ai-automation`**: Strictly-typed AI models and simulated API handling.
- **`chapter-10-qa-automation`**: Playwright test specs and Page Object Models utilizing strict TS types.

### 🏢 Standard Root Directory Mapping (Educational Showcase)
*Why do we have root-level folders if chapters hold the code?*
In a real enterprise application, you wouldn't structure by "chapter". You'd use logical groupings based on architecture:
- **`src/`**: The core application source code.
  - **`utils/`**: Helper methods like date formatters or loggers.
  - **`config/`**: Global configurations, environment variables.
  - **`services/`**: API handlers and controllers (like our AI module).
- **`tests/`**: Contains E2E, Unit, and Integration test specifications. Equivalent to `chapter-10(...)`.
- **`pages/`**: Holds UI component implementations or Playwright POMs.

---

## 🚀 Getting Started & Execution

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run TypeScript Check**
   Compile the entire project to ensure there are no static type errors:
   ```bash
   npm run build
   ```

3. **Run a Specific Chapter**
   We use `ts-node` to seamlessly execute TypeScript files on-the-fly without needing manual compilation:
   ```bash
   npm run ch1
   npm run ch5
   npm run ch9
   ```

4. **Run Playwright QA Tests**
   Executes the DemoQA login tests located in Chapter 10:
   ```bash
   npm run test
   ```

## 🧠 Why TypeScript?
Examine the block comments within each chapter file! Every core TS concept has an accompanying **JavaScript Comparison Block** indicating how lack of typing in standard Javascript causes unintended consequences or hidden runtime crashes.
