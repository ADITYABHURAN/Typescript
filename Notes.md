# TypeScript Notes

**Date:** February 2, 2026

---

## 1. JavaScript vs TypeScript

### JavaScript is a Loosely Typed Language
- JavaScript does **not** enforce data types
- Variables can hold any type of value and change types freely
- Type errors are only caught at **runtime**

### TypeScript is JavaScript with Types
- TypeScript adds **strict typing** to JavaScript
- TypeScript is a **superset** of JavaScript (all JS code is valid TS code)
- Type errors are caught at **compile time**
- TypeScript files use the `.ts` extension and compile to `.js`

---

## 2. Type Annotations in TypeScript

In TypeScript, you **assign the datatype first** and it strictly follows it throughout the file.

### Example 1: Number Type
```typescript
let x: number = 10;
x = 'Hello, World!'; // ❌ Type error - cannot assign string to number
x = true;            // ❌ Type error - cannot assign boolean to number
```
The variable `x` is strictly typed as a `number` and cannot be assigned values of other types.

### Example 2: String Type
```typescript
let fname: string = "Aditya";
fname = 42;    // ❌ Type error - cannot assign number to string
fname = false; // ❌ Type error - cannot assign boolean to string
```
The variable `fname` is strictly typed as a `string` and cannot be assigned values of other types.

---

## 3. Union Types

Union types allow a variable to hold **multiple types** of values using the `|` operator.

### Syntax
```typescript
let variableName: type1 | type2 | type3 = value;
```

### Example
```typescript
let y: number | string | boolean = 10;
y = 'Hello, World!'; // ✅ Works - string is allowed
y = true;            // ✅ Works - boolean is allowed

let lname: string | number | boolean = "Bhuran";
lname = 42;    // ✅ Works
lname = false; // ✅ Works
```

> **Use Case:** Union types are useful when a variable needs flexibility to hold different types, such as accepting either a string or number for user input.

---

## 4. Typed Functions

TypeScript allows you to specify types for function **parameters** and **return values**.

### Syntax
```typescript
function functionName(param1: type, param2: type): returnType {
    // function body
}
```

### Example
```typescript
function add(x: number, y: number): number {
    return x + y;
}

let result: number = add(5, 10);      // ✅ Correct usage
let wrongResult = add(5, '10');       // ❌ Type error - '10' is a string
```

### Benefits
- Prevents passing wrong types to functions
- Makes code self-documenting
- IDE provides better autocomplete and error detection

---

## 5. Interfaces

Interfaces define the **shape** of an object, specifying what properties it should have and their types.

### Syntax
```typescript
interface InterfaceName {
    property1: type;
    property2: type;
}
```

### Example
```typescript
interface User {
    firstname: string;
    lastname: string;
    email: string;
    profileImageUrl: string;
}

function updateUser(user: User) {
    user.firstname = "John";
    user.lastname = "Doe";
    user.email = "john.doe@example.com";
    user.profileImageUrl = "https://example.com/profile.jpg";
}
```

### Optional Properties
Use `?` to make a property optional:
```typescript
interface User {
    firstname: string;
    lastname: string;
    email: string;
    profileImageUrl?: string; // Optional property
}
```

### Readonly Properties
Use `readonly` to prevent modification:
```typescript
interface User {
    readonly id: number;
    firstname: string;
}
```

---

## 6. Basic Types in TypeScript

| Type | Description | Example |
|------|-------------|---------|
| `number` | All numeric values | `let age: number = 25;` |
| `string` | Text values | `let name: string = "Aditya";` |
| `boolean` | true/false | `let isActive: boolean = true;` |
| `array` | List of values | `let nums: number[] = [1, 2, 3];` |
| `any` | Any type (avoid if possible) | `let data: any = "hello";` |
| `void` | No return value | `function log(): void { }` |
| `null` | Null value | `let n: null = null;` |
| `undefined` | Undefined value | `let u: undefined = undefined;` |

---

## 7. Type Inference

TypeScript can **automatically infer** types based on assigned values:

```typescript
let message = "Hello"; // TypeScript infers: string
let count = 42;        // TypeScript infers: number
let isValid = true;    // TypeScript infers: boolean
```

> **Best Practice:** Let TypeScript infer types when obvious, but explicitly type function parameters and complex objects.

---

## 8. Type Aliases

Create custom type names using `type`:

```typescript
type ID = string | number;
type Point = { x: number; y: number };

let userId: ID = "abc123";
let coordinates: Point = { x: 10, y: 20 };
```

---

## Key Takeaways

1. **Type Safety:** Once a variable is declared with a type, it must remain that type
2. **Union Types:** Use `|` when a variable needs to accept multiple types
3. **Interfaces:** Define object shapes for better code organization
4. **Typed Functions:** Always type function parameters for safety
5. **Compile-Time Errors:** TypeScript catches errors before runtime

---

## How to Compile TypeScript

```bash
# Install TypeScript globally
npm install -g typescript

# Compile a single file
tsc filename.ts

# Watch mode (auto-compile on save)
tsc filename.ts --watch

# Initialize a TypeScript project
tsc --init
```

---

## 9. TypeScript in the CI/CD Pipeline

When we write source code in **TypeScript** and push it to **GitHub**, the **CI/CD pipeline** compiles the `.ts` code into `.js` before deployment.

### How it works:
1. **Write** code in TypeScript (`.ts` files) with strict types
2. **Push** the TypeScript source code to GitHub
3. **CI/CD pipeline** (e.g., GitHub Actions) runs `tsc` to compile the code
4. TypeScript compiler **catches all type errors** at this stage — if there are errors, the build fails
5. If compilation succeeds, the output is **plain JavaScript** (`.js` files) with **no type annotations** (types are stripped out)
6. The compiled `.js` code is then **deployed/served** to production

### Why this matters:
- The **end user / browser / Node.js runtime** only ever runs JavaScript — they never see TypeScript
- All datatype errors are caught **before deployment**, not at runtime
- TypeScript types exist only at **compile time** — they are completely removed in the final `.js` output
- This means you get the **safety of types during development** and the **performance of plain JS in production**

```
  TypeScript (.ts)  →  CI/CD (tsc compile)  →  JavaScript (.js)  →  Deployed
  [with types]         [errors caught here]     [types removed]      [runs in browser/Node]
```

---

## 10. ES Module Imports in TypeScript

In TypeScript, you can use **`import`** syntax from day one — even though Node.js traditionally uses `require`. When TypeScript compiles, it converts `import` into `const ... = require(...)` in the output `.js` file.

### Example
```typescript
// TypeScript source (.ts)
import fs from "fs";
```

After compilation:
```javascript
// Compiled JavaScript output (.js)
const fs = require("fs");
```

### Installing Type Definitions for Node.js

When you write `import fs from "fs"`, TypeScript doesn't know the **types** for Node.js built-in modules like `fs`, `path`, `http`, etc. by default. You need to install type definitions:

```bash
npm i @types/node -D
```

- `@types/node` provides type definitions for all Node.js built-in modules
- `-D` installs it as a **devDependency** (only needed during development, not in production)

### Why `-D` (devDependency)?
Types are only used at **compile time**. The final `.js` output doesn't need them, so they belong in `devDependencies`.

### Other Common Type Packages
```bash
npm i @types/express -D   # Types for Express.js
npm i @types/react -D     # Types for React
npm i @types/lodash -D    # Types for Lodash
```

> **Note:** Many modern packages ship with their own types built-in (e.g., `axios`). You only need `@types/*` for packages that don't include their own type definitions.

---

---
