Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

// Example Usage:
// const arr = [1, 2, 3, 4];
// console.log(arr.myFilter((x) => x % 2 === 0)); // [2, 4]
