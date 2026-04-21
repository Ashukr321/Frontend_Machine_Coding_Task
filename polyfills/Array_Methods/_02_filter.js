Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

// Example Usage:
// const arr = [1, 2, 3, 4];
// console.log(arr.myFilter((x) => x % 2 === 0)); // [2, 4]
