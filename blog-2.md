#`How Generics Help Build Reusable and Type-Safe Code in TypeScript`

Introduction

When writing TypeScript code, we often create functions or components that need to work with different types of data. Without Generics, we usually end up using any, which removes type safety and increases the chance of bugs.

Generics solve this problem by allowing us to write reusable code while still keeping strong type checking. They help functions and components adapt to different data types without losing type information.

In this blog, we'll explore how Generics work and why they are so useful in TypeScript.



#`What are Generics?`

Generics allow us to create flexible and reusable code that works with multiple types.
Instead of hardcoding a specific type, we use a placeholder type like <T>.

Typescript:

function identity<T>(value: T): T {
  return value;

Here, T represents a type that will be decided later when the function is called.

#`Why Not Just Use any?`

At first, any might seem easier.

Typescript: 
function identity(value: any): any {
  return value;
}
But the problem is that any removes all type checking.

Typescript:
let result = identity("Sifat");

result.toFixed(2); // no TypeScript error
This can cause runtime errors because toFixed() only works on numbers.

Generics keep the exact type information.

Typescript:
function identity<T>(value: T): T {
  return value;
}

let result = identity("Sifat");

result.toUpperCase(); // works
result.toFixed(2);    // Error

Now TypeScript knows that result is a string.

#`Generics Make Functions Reusable`

One of the biggest advantages of Generics is reusability.
Without Generics, we might need separate functions for different types.

Typescirpt:
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}

Using Generics, we can replace all of them with a single reusable function.

Typescirpt
function getValue<T>(value: T): T {
  return value;
}
Now it works with strings, numbers, arrays, objects, and more.
Typescirpt:
getValue<string>("Hello Sifat Vie");
getValue<number>(10);
getValue<boolean>(true);

Conclusion

Generics are one of the most powerful features of TypeScript. They allow developers to build reusable functions and components without sacrificing type safety.

Instead of relying on any, Generics preserve the actual type information and help prevent bugs before runtime. Whether you're working with functions, arrays, objects, or React components, Generics make your code cleaner, safer, and more scalable.