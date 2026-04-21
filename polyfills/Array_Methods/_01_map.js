Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // Check if index exists (handles sparse arrays)
    if (i in this) {
      result[i] = callback(this[i], i, this);
    }
  }
  return result;
};

// Example Usage:
// const arr = [1, 2, 3];
// console.log(arr.myMap((x) => x * 2)); // [2, 4, 6]
