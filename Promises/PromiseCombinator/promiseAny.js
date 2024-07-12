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

// It waits for the first resolved/fullfilled promise
console.log(
  Promise.any([executeFirst(true), executeSecond(true), executeThird(true)])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
); //Executed First

console.log(
  Promise.any([executeFirst(false), executeSecond(true), executeThird(false)])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
); // Executed Second

console.log(
  Promise.any([executeFirst(false), executeSecond(false), executeThird(false)])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
); // AggregateError: All promises were rejected
