// Unlike map/filter, find* methods visit holes too (as undefined).

Array.prototype.myFind = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) return this[i];
  }
  return undefined;
};

Array.prototype.myFindIndex = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) return i;
  }
  return -1;
};

Array.prototype.myFindLast = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) return this[i];
  }
  return undefined;
};

Array.prototype.myFindLastIndex = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) return i;
  }
  return -1;
};

// Example Usage:
// const arr = [5, 12, 8, 130];
// arr.myFind((x) => x > 10);          // 12
// arr.myFindIndex((x) => x > 10);     // 1
// arr.myFindLast((x) => x > 10);      // 130
// arr.myFindLastIndex((x) => x > 10); // 3
