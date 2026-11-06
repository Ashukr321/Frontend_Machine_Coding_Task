Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  const result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    // Check if index exists (handles sparse arrays)
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

// Example Usage:
// const arr = [1, 2, 3];
// console.log(arr.myMap((x) => x * 2)); // [2, 4, 6]
