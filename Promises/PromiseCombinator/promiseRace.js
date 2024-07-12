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

// prints the first one that resolves
console.log(
  Promise.race([executeFirst(true), executeSecond(true), executeThird(true)])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
); //Executed First

// if promise fails first then it prints failed promise
console.log(
  Promise.race([executeFirst(false), executeSecond(true), executeThird(true)])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
); // Failed to execute first
