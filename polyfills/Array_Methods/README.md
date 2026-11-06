# Array Polyfills

This folder contains polyfills for commonly used Array methods frequently asked in interviews.

## Methods Included:

| # | File | Methods | Mutates? |
|---|------|---------|----------|
| 1 | `_01_map.js` | `map` | No |
| 2 | `_02_filter.js` | `filter` | No |
| 3 | `_03_reduce.js` | `reduce` | No |
| 4 | `_04_forEach.js` | `forEach` | No |
| 5 | `_05_find_findIndex.js` | `find`, `findIndex`, `findLast`, `findLastIndex` | No |
| 6 | `_06_some_every.js` | `some`, `every` | No |
| 7 | `_07_includes_indexOf.js` | `includes`, `indexOf`, `lastIndexOf` | No |
| 8 | `_08_reduceRight.js` | `reduceRight` | No |
| 9 | `_09_flat_flatMap.js` | `flat`, `flatMap` | No |
| 10 | `_10_fill.js` | `fill` | Yes |
| 11 | `_11_at.js` | `at` | No |
| 12 | `_12_join.js` | `join` | No |
| 13 | `_13_concat.js` | `concat` | No |
| 14 | `_14_push_pop_shift_unshift.js` | `push`, `pop`, `shift`, `unshift` | Yes |
| 15 | `_15_slice.js` | `slice` | No |
| 16 | `_16_splice.js` | `splice` | Yes |
| 17 | `_17_reverse.js` | `reverse` | Yes |
| 18 | `_18_sort.js` | `sort` (stable merge sort) | Yes |
| 19 | `_19_array_static.js` | `Array.isArray`, `Array.of`, `Array.from` | No |

Each polyfill is named `my<Method>` (e.g. `arr.myMap`, `Array.myFrom`).

## Run the checks

```bash
node polyfills/Array_Methods/test.js
```

`test.js` loads every polyfill and compares its result (and any mutation) with the native method.

## Gotchas interviewers ask about

- **Sparse arrays**: `map`, `filter`, `forEach`, `reduce`, `some`, `every`, `indexOf` skip holes; `find*`, `includes`, `join` treat holes as `undefined`.
- **`includes` vs `indexOf`**: `[NaN].includes(NaN)` is `true`, `[NaN].indexOf(NaN)` is `-1`.
- **`reduce` without an initial value** throws on an empty array and starts from the first existing element.
- **Default `sort`** compares as strings: `[10, 9, 1].sort()` gives `[1, 10, 9]`.
- **Negative indexes** in `slice`, `splice`, `fill`, `at` count from the end.

### Why Polyfills?
Understanding how these methods work under the hood demonstrates a deep understanding of JavaScript's prototype system and functional programming concepts.
