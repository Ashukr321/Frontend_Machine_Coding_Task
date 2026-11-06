Array.prototype.myJoin = function (separator = ",") {
  const sep = String(separator);
  let result = "";
  for (let i = 0; i < this.length; i++) {
    if (i > 0) result += sep;
    const el = this[i];
    // null, undefined and holes become empty strings
    if (el !== null && el !== undefined) result += String(el);
  }
  return result;
};

// Example Usage:
// [1, null, 3].myJoin("-"); // "1--3"
// [[1, 2], 3].myJoin();     // "1,2,3"
