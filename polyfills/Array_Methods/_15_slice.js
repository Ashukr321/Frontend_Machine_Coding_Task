Array.prototype.mySlice = function (start = 0, end = this.length) {
  const len = this.length;
  // relative index: negative counts from the end, clamped to 0..len
  const abs = (n) => {
    n = Math.trunc(n) || 0;
    return n < 0 ? Math.max(len + n, 0) : Math.min(n, len);
  };
  const to = abs(end);
  const result = [];
  for (let i = abs(start); i < to; i++) {
    result.push(this[i]);
  }
  return result; // shallow copy, never mutates `this`
};

// Example Usage:
// [1, 2, 3, 4, 5].mySlice(1, 3); // [2, 3]
// [1, 2, 3, 4, 5].mySlice(-2);   // [4, 5]
