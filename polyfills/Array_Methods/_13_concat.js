Array.prototype.myConcat = function (...items) {
  const result = [];
  let n = 0;
  for (const item of [this, ...items]) {
    if (Array.isArray(item)) {
      // spread arrays one level deep, keeping holes
      for (let i = 0; i < item.length; i++, n++) {
        if (i in item) result[n] = item[i];
      }
    } else {
      result[n++] = item;
    }
  }
  result.length = n;
  return result; // never mutates `this`
};

// Example Usage:
// [1, 2].myConcat(3, [4, [5]]); // [1, 2, 3, 4, [5]]
