Array.myIsArray = function (value) {
  return Object.prototype.toString.call(value) === "[object Array]";
};

Array.myOf = function (...items) {
  return items; // unlike Array(3), Array.of(3) -> [3]
};

// Works with iterables (Set, Map, string) and array-likes ({ length: 3 }).
Array.myFrom = function (source, mapFn, thisArg) {
  if (source == null) {
    throw new TypeError("Array.from requires an array-like or iterable object");
  }
  if (mapFn !== undefined && typeof mapFn !== "function") {
    throw new TypeError("mapFn is not a function");
  }
  const items = typeof source[Symbol.iterator] === "function" ? [...source] : source;
  const len = Math.max(Math.trunc(Number(items.length)) || 0, 0);
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = mapFn ? mapFn.call(thisArg, items[i], i) : items[i];
  }
  return result;
};

// Example Usage:
// Array.myIsArray([]);                      // true
// Array.myOf(3);                            // [3]
// Array.myFrom({ length: 3 }, (_, i) => i); // [0, 1, 2]
// Array.myFrom(new Set([1, 1, 2]));         // [1, 2]
