Array.prototype.mySplice = function (start, deleteCount, ...items) {
  const len = this.length;

  let s = Math.trunc(start) || 0;
  s = s < 0 ? Math.max(len + s, 0) : Math.min(s, len);

  let dc;
  if (arguments.length === 0) dc = 0;
  else if (arguments.length === 1) dc = len - s; // delete till the end
  else dc = Math.min(Math.max(Math.trunc(deleteCount) || 0, 0), len - s);

  const removed = [];
  for (let i = s; i < s + dc; i++) removed.push(this[i]);

  // shortcut: holes after the splice point become undefined; fine unless sparse arrays matter
  const tail = [];
  for (let i = s + dc; i < len; i++) tail.push(this[i]);

  this.length = s;
  for (const x of items) this[this.length] = x;
  for (const x of tail) this[this.length] = x;

  return removed; // mutates `this`, returns the deleted elements
};

// Example Usage:
// const a = [1, 2, 3, 4, 5];
// a.mySplice(1, 2, "a", "b", "c"); // [2, 3] -> a = [1, "a", "b", "c", 4, 5]
