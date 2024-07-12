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

console.log(
  Promise.all([executeFirst(true), executeSecond(true), executeThird(true)])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
); //Array with resolve messages of all the promises

console.log(
  Promise.all([executeFirst(true), executeSecond(false), executeThird(true)])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
); // Failed to execute second
