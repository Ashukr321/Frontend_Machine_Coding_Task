// Polyfill for call
Function.prototype.myCall = function (context, ...args) {
  context = context || window || global; // Default to global object
  const uniqueId = Symbol("fn"); // Use Symbol to avoid property collision
  context[uniqueId] = this;
  const result = context[uniqueId](...args);
  delete context[uniqueId];
  return result;
};

// Polyfill for apply
Function.prototype.myApply = function (context, argsArray) {
  context = context || window || global;
  const uniqueId = Symbol("fn");
  context[uniqueId] = this;
  
  if (!Array.isArray(argsArray)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  const result = context[uniqueId](...argsArray);
  delete context[uniqueId];
  return result;
};

// Example Usage:
// const person = { name: "John" };
// function greet(greeting) { console.log(`${greeting}, ${this.name}`); }
// greet.myCall(person, "Hello"); // "Hello, John"
// greet.myApply(person, ["Hi"]); // "Hi, John"
