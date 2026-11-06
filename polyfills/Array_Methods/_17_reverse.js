Array.prototype.myReverse = function () {
  let left = 0;
  let right = this.length - 1;
  while (left < right) {
    const tmp = this[left];
    this[left] = this[right];
    this[right] = tmp;
    left++;
    right--;
  }
  return this; // in place
};

// Example Usage:
// [1, 2, 3].myReverse(); // [3, 2, 1]
