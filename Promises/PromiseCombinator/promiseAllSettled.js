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

// It waits for all the promises to settle(i.e. by settle it mean to complete be it resolved or rejected)
console.log(
  Promise.allSettled([
    executeFirst(true),
    executeSecond(true),
    executeThird(true),
  ])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
); //[Object(Executed First), Object(Executed second), Object(Executed Third)]

console.log(
  Promise.allSettled([
    executeFirst(true),
    executeSecond(false),
    executeThird(true),
  ])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
); // //[Object(Executed First), Object(Error message), Object(Executed Third)]
