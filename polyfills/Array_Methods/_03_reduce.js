Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  let accumulator = initialValue;
  let i = 0;

  if (arguments.length < 2) {
    // Skip holes: the first *existing* element becomes the accumulator
    while (i < this.length && !(i in this)) i++;
    if (i >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[i++];
  }

  for (; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// Example Usage:
// const arr = [1, 2, 3, 4];
// console.log(arr.myReduce((acc, curr) => acc + curr, 0)); // 10
