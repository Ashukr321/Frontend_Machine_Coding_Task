Array.prototype.mySome = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) return true;
  }
  return false; // empty array -> false
};

Array.prototype.myEvery = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this && !callback.call(thisArg, this[i], i, this)) return false;
  }
  return true; // empty array -> true (vacuous truth)
};

// Example Usage:
// [1, 2, 3].mySome((x) => x > 2);  // true
// [1, 2, 3].myEvery((x) => x > 0); // true
