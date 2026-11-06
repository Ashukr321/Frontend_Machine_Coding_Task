// Stable merge sort (native sort is stable since ES2019).
// Default order compares values as strings, so [10, 9, 1] -> [1, 10, 9].
// undefined values go to the end, holes after them.
Array.prototype.mySort = function (compareFn) {
  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("The comparison function must be either a function or undefined");
  }
  const cmp =
    compareFn ||
    ((a, b) => {
      const x = String(a);
      const y = String(b);
      return x < y ? -1 : x > y ? 1 : 0;
    });

  const values = [];
  let undefinedCount = 0;
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    if (this[i] === undefined) undefinedCount++;
    else values.push(this[i]);
  }

  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = arr.length >> 1;
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    const out = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      // `<= 0` keeps equal elements in original order (stability)
      out.push(cmp(left[i], right[j]) <= 0 ? left[i++] : right[j++]);
    }
    while (i < left.length) out.push(left[i++]);
    while (j < right.length) out.push(right[j++]);
    return out;
  };

  const sorted = mergeSort(values);
  for (let i = 0; i < this.length; i++) {
    if (i < sorted.length) this[i] = sorted[i];
    else if (i < sorted.length + undefinedCount) this[i] = undefined;
    else delete this[i];
  }
  return this; // in place
};

// Example Usage:
// [10, 9, 1].mySort();                // [1, 10, 9]
// [10, 9, 1].mySort((a, b) => a - b); // [1, 9, 10]
