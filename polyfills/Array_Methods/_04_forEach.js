Array.prototype.myForEach = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
  // forEach always returns undefined (not chainable)
};

// Example Usage:
// [1, 2, 3].myForEach((x, i) => console.log(i, x)); // 0 1, 1 2, 2 3
