Array.prototype.myAt = function (index) {
  const len = this.length;
  let i = Math.trunc(index) || 0;
  if (i < 0) i += len;
  return i < 0 || i >= len ? undefined : this[i];
};

// Example Usage:
// [10, 20, 30].myAt(-1); // 30
// [10, 20, 30].myAt(5);  // undefined
