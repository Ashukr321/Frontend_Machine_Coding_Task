Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completedCount = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

// Example Usage:
// const p1 = Promise.resolve(3);
// const p2 = 42;
// const p3 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));
// Promise.myAll([p1, p2, p3]).then(console.log); // [3, 42, "foo"]
