# Function Polyfills

This folder contains polyfills for methods that manipulate the `this` context of functions.

## Methods Included:

1.  **Bind (`_01_bind.js`)**: Creates a new function that, when called, has its `this` keyword set to the provided value.
2.  **Call & Apply (`_02_call_apply.js`)**: 
    -   `call()`: Calls a function with a given `this` value and arguments provided individually.
    -   `apply()`: Calls a function with a given `this` value and arguments provided as an array.

### Why Polyfills?
These are fundamental to understanding how execution context and `this` works in JavaScript.
