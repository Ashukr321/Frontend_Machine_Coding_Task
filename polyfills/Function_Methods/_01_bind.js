Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Not a function");
  }

  const originalFunc = this;
  return function (...newArgs) {
    return originalFunc.apply(context, [...args, ...newArgs]);
  };
};

// Example Usage:
// const person = { name: "John" };
// function greet(greeting) { console.log(`${greeting}, ${this.name}`); }
// const greetJohn = greet.myBind(person, "Hello");
// greetJohn(); // "Hello, John"
