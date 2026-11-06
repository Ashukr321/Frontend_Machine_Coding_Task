// includes uses SameValueZero: NaN matches NaN, and holes count as undefined.
Array.prototype.myIncludes = function (searchElement, fromIndex) {
  const len = this.length;
  let start = Math.trunc(fromIndex) || 0;
  if (start < 0) start = Math.max(len + start, 0);
  for (let i = start; i < len; i++) {
    const el = this[i];
    if (el === searchElement || (el !== el && searchElement !== searchElement)) {
      return true;
    }
  }
  return false;
};

// indexOf uses strict equality (===): NaN is never found, holes are skipped.
Array.prototype.myIndexOf = function (searchElement, fromIndex) {
  const len = this.length;
  let start = Math.trunc(fromIndex) || 0;
  if (start < 0) start = Math.max(len + start, 0);
  for (let i = start; i < len; i++) {
    if (i in this && this[i] === searchElement) return i;
  }
  return -1;
};

Array.prototype.myLastIndexOf = function (searchElement, fromIndex) {
  const len = this.length;
  let start = len - 1;
  if (arguments.length > 1) {
    const n = Math.trunc(fromIndex) || 0;
    start = n < 0 ? len + n : Math.min(n, len - 1);
  }
  for (let i = start; i >= 0; i--) {
    if (i in this && this[i] === searchElement) return i;
  }
  return -1;
};

// Example Usage:
// [1, 2, NaN].myIncludes(NaN); // true
// [1, 2, NaN].myIndexOf(NaN);  // -1
// [1, 2, 1].myLastIndexOf(1);  // 2
