Array.prototype.myReduceRight = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  let accumulator = initialValue;
  let i = this.length - 1;

  if (arguments.length < 2) {
    while (i >= 0 && !(i in this)) i--;
    if (i < 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[i--];
  }

  for (; i >= 0; i--) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// Example Usage:
// ["a", "b", "c"].myReduceRight((acc, x) => acc + x); // "cba"
