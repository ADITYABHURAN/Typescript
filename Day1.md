# TypeScript - Day 1 Notes

**Date:** February 2, 2026

---

## JavaScript vs TypeScript

### JavaScript is a Loosely Typed Language
- JavaScript does **not** enforce data types
- Variables can hold any type of value and change types freely
- Type errors are only caught at **runtime**

### TypeScript is JavaScript with Types
- TypeScript adds **strict typing** to JavaScript
- TypeScript is a **superset** of JavaScript (all JS code is valid TS code)
- Type errors are caught at **compile time**

---

## Type Annotations in TypeScript

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

## Key Takeaway

> Once you declare a variable with a specific type in TypeScript, it **must** remain that type throughout your code.

---
