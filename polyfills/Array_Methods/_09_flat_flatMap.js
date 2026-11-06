Array.prototype.myFlat = function (depth = 1) {
  const result = [];
  const flatten = (arr, d) => {
    for (let i = 0; i < arr.length; i++) {
      if (!(i in arr)) continue; // flat removes holes
      if (Array.isArray(arr[i]) && d > 0) {
        flatten(arr[i], d - 1);
      } else {
        result.push(arr[i]);
      }
    }
  };
  flatten(this, Number(depth) || 0);
  return result;
};

// flatMap = map + flat(1), in a single pass
Array.prototype.myFlatMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    const mapped = callback.call(thisArg, this[i], i, this);
    if (Array.isArray(mapped)) {
      for (let j = 0; j < mapped.length; j++) {
        if (j in mapped) result.push(mapped[j]);
      }
    } else {
      result.push(mapped);
    }
  }
  return result;
};

// Example Usage:
// [1, [2, [3, [4]]]].myFlat();                  // [1, 2, [3, [4]]]
// [1, [2, [3, [4]]]].myFlat(Infinity);          // [1, 2, 3, 4]
// ["a b", "c"].myFlatMap((s) => s.split(" ")); // ["a", "b", "c"]
