// Self-check: compares every polyfill against the native method.
// Run: node polyfills/Array_Methods/test.js
const fs = require("fs");
const path = require("path");
const assert = require("assert");

fs.readdirSync(__dirname)
  .filter((f) => /^_\d+_.*\.js$/.test(f))
  .forEach((f) => require(path.join(__dirname, f)));

// `same(arr, "map", args)` runs arr.map(...args) and arr.myMap(...args) on copies
// and checks both the return value and the (possibly mutated) array match.
const same = (arr, name, ...args) => {
  const a = arr.slice();
  const b = arr.slice();
  const my = "my" + name[0].toUpperCase() + name.slice(1);
  const native = a[name](...args);
  const poly = b[my](...args);
  assert.deepStrictEqual(poly === b ? "this" : poly, native === a ? "this" : native, `${name} return`);
  assert.deepStrictEqual(b, a, `${name} mutation`);
};
const throwsLikeNative = (fn) => assert.throws(fn, TypeError);

const nums = [5, 1, 10, 3, 2];
const sparse = [, 1, , 3];
const double = (x) => x * 2;
const isOdd = (x) => x % 2 === 1;

same(nums, "map", double);
same(sparse, "map", double);
same(nums, "filter", isOdd);
same(nums, "reduce", (a, b) => a + b);
same(nums, "reduce", (a, b) => a + b, 100);
same(sparse, "reduce", (a, b) => a + b);
throwsLikeNative(() => [].myReduce((a, b) => a + b));
throwsLikeNative(() => [1].myMap(null));

const seen = [];
sparse.myForEach((x, i) => seen.push(i));
assert.deepStrictEqual(seen, [1, 3]);

same(nums, "find", (x) => x > 4);
same(nums, "findIndex", (x) => x > 4);
same(nums, "findLast", (x) => x > 4);
same(nums, "findLastIndex", (x) => x > 4);
same(nums, "findIndex", (x) => x > 100);
same(sparse, "findIndex", (x) => x === undefined);

same(nums, "some", (x) => x > 9);
same(nums, "every", (x) => x > 0);
same([], "some", isOdd);
same([], "every", isOdd);

same([1, NaN, 3], "includes", NaN);
same([1, NaN, 3], "indexOf", NaN);
same([1, 2, 1, 2], "indexOf", 2, 2);
same([1, 2, 1, 2], "indexOf", 2, -1);
same([1, 2, 1, 2], "lastIndexOf", 1);
same([1, 2, 1, 2], "lastIndexOf", 2, -2);
same(sparse, "includes", undefined);
same(sparse, "indexOf", undefined);

same(["a", "b", "c"], "reduceRight", (a, b) => a + b);
same(["a", "b", "c"], "reduceRight", (a, b) => a + b, "x");

const nested = [1, [2, [3, [4]]], , 5];
same(nested, "flat");
same(nested, "flat", 2);
same(nested, "flat", Infinity);
same(nested, "flat", 0);
same(["a b", "c"], "flatMap", (s) => s.split(" "));
same([1, 2], "flatMap", (x) => [[x]]);

same(nums, "fill", 0);
same(nums, "fill", 0, 1, 3);
same(nums, "fill", 0, -2);

same(nums, "at", 0);
same(nums, "at", -1);
same(nums, "at", 99);

same([1, null, undefined, [2, 3]], "join");
same([1, 2, 3], "join", " - ");
same(sparse, "join");

same([1, 2], "concat", 3, [4, [5]], sparse);

same(nums, "push", 7, 8);
same(nums, "pop");
same([], "pop");
same(nums, "shift");
same(nums, "unshift", 7, 8);

same(nums, "slice");
same(nums, "slice", 1, 3);
same(nums, "slice", -2);
same(nums, "slice", 2, -1);

same(nums, "splice", 1, 2, "a", "b", "c");
same(nums, "splice", 2);
same(nums, "splice", -2, 1);
same(nums, "splice");
same(nums, "splice", 1, 0, "x");

same(nums, "reverse");

same([10, 9, 1, 100], "sort");
same(nums, "sort", (a, b) => a - b);
same([3, undefined, 1, , 2], "sort");
const people = [{ n: "a", age: 30 }, { n: "b", age: 25 }, { n: "c", age: 30 }];
same(people, "sort", (x, y) => x.age - y.age); // stability

assert.strictEqual(Array.myIsArray([]), true);
assert.strictEqual(Array.myIsArray({ length: 0 }), false);
assert.deepStrictEqual(Array.myOf(3), Array.of(3));
assert.deepStrictEqual(Array.myFrom("abc"), Array.from("abc"));
assert.deepStrictEqual(Array.myFrom(new Set([1, 1, 2])), [1, 2]);
assert.deepStrictEqual(
  Array.myFrom({ length: 3 }, (_, i) => i * 2),
  Array.from({ length: 3 }, (_, i) => i * 2)
);
throwsLikeNative(() => Array.myFrom(null));

console.log("All Array polyfill checks passed");
