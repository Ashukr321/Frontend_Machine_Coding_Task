Array.prototype.myFill = function (value, start = 0, end = this.length) {
  const len = this.length;
  // relative index: negative counts from the end, clamped to 0..len
  const abs = (n) => {
    n = Math.trunc(n) || 0;
    return n < 0 ? Math.max(len + n, 0) : Math.min(n, len);
  };
  const to = abs(end);
  for (let i = abs(start); i < to; i++) {
    this[i] = value;
  }
  return this; // mutates and returns the same array
};

// Example Usage:
// [1, 2, 3, 4].myFill(0, 1, 3); // [1, 0, 0, 4]
// new Array(3).myFill(7);       // [7, 7, 7]
