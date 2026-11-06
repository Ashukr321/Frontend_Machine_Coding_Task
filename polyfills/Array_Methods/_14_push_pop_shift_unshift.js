Array.prototype.myPush = function (...items) {
  for (const item of items) {
    this[this.length] = item;
  }
  return this.length;
};

Array.prototype.myPop = function () {
  if (this.length === 0) return undefined;
  const last = this[this.length - 1];
  this.length = this.length - 1; // shrinking length deletes the last slot
  return last;
};

Array.prototype.myShift = function () {
  if (this.length === 0) return undefined;
  const first = this[0];
  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  this.length = this.length - 1;
  return first;
};

Array.prototype.myUnshift = function (...items) {
  const k = items.length;
  // move existing elements right, starting from the end so nothing is overwritten
  for (let i = this.length - 1; i >= 0; i--) {
    this[i + k] = this[i];
  }
  for (let i = 0; i < k; i++) {
    this[i] = items[i];
  }
  return this.length;
};

// Example Usage:
// const a = [2, 3];
// a.myPush(4);    // 3 -> [2, 3, 4]
// a.myPop();      // 4 -> [2, 3]
// a.myUnshift(1); // 3 -> [1, 2, 3]
// a.myShift();    // 1 -> [2, 3]
