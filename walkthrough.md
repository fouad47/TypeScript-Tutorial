# TypeScript Masterclass Tour

Your **TypeScript Masterclass Project** has been successfully initialized and built! This project covers concepts ranging from absolute beginnings to advanced integrations in a comprehensive, logic-focused environment.

## 📁 What Was Built

We created a project structured into 10 detailed chapters, alongside a root-level scaffolding representative of an industry-standard setup. 

All code resides in `d:/Google_Experiements/TypeScript-Tutorial`.

### 1. Foundation & Fundamentals (Chapters 1-4)
- **`chapter-01-introduction`**: Environment setup and understanding why statically typed TS is safer than JS.
- **`chapter-02-basic-types`**: Defining strings, numbers, arrays, and dealing with types like `unknown` or `void`. 
- **`chapter-03-variables-functions`**: Applying strict typings to functions, arrow functions, and default parameters.
- **`chapter-04-objects-interfaces`**: Declaring the shape of objects using `interface` and `type` aliases.

### 2. Intermediate Logic & OOP (Chapters 5-8)
- **`chapter-05-classes-oop`**: We proved structural Object-Oriented Principles using Classes, Inheritance, and encapsulating data using `public`, `private`, and `protected` modifiers.
- **`chapter-06-advanced-types`**: We implemented generic functions and generic data storage classes to enable highly reusable logic, alongside Unions and Intersection types.
- **`chapter-08-error-handling`**: Explained the fundamental difference between compile-time typescript warnings and runtime try/catch closures.

### 3. Advanced Integrations (Chapters 9-10)
- **AI Automation (`chapter-09-ai-automation`)**: We drafted strict interfaces representing an AI API's payload (`AIResponse`, `AIChatMessage`) and implemented a mock service. This proves how TypeScript makes calling complex 3rd party APIs error-proof through auto-completion.
- **QA Automation with Playwright (`chapter-10-qa-automation`)**: Configured a `Playwright` environment using a strictly-typed Page Object Model (`login-page.ts`) and a test spec targeting *demoqa.com*.

> [!TIP]
> Each TS file features an extensive inline block comment highlighting **Javascript Comparisons**. These comparisons summarize what identical code looks like in standard Javascript to demonstrate to learners how typing prevents silent system crashes.

## ⚙️ How to use the project

You can build and run individual modules defined in `package.json` natively through TypeScript execution without compilation (using `ts-node`).

**Checking entire project for syntax / typing errors**:
```powershell
# Compiles all .ts files using strict configurations
npm run build
```

**Executing individual chapter files**:
```powershell
npm run ch1
npm run ch5
npm run ch9
```

**Running the Playwright E2E Tests**:
```powershell
npm run test
```
