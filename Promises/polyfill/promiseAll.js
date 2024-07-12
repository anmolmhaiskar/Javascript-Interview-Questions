const executeFirst = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve("Executed First");
      } else {
        reject(new Error("Failed to execute first"));
      }
    }, 1000);
  });
};

const executeSecond = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve("Executed Second");
      } else {
        reject(new Error("Failed to execute second"));
      }
    }, 2000);
  });
};

const executeThird = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve("Executed Third");
      } else {
        reject(new Error("Failed to execute third"));
      }
    }, 3000);
  });
};

Promise.allPolyFill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!Array.isArray(promises) || promises.length === 0) {
      resolve(results);
      return;
    }

    let pending = promises.length;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = res;
          pending--;

          if (pending === 0) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.allPolyFill([
  executeFirst(true),
  executeSecond(true),
  executeThird(true),
]).then((res) => {
  console.log(res);
});
