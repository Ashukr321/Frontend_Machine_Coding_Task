Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    let results = [];
    let completedCount = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

// Example Usage:
// const p1 = Promise.resolve(3);
// const p2 = Promise.reject("error");
// Promise.myAllSettled([p1, p2]).then(console.log); 
// // [{status: "fulfilled", value: 3}, {status: "rejected", reason: "error"}]
