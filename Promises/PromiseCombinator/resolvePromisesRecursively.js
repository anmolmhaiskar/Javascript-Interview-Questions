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

function recursivelyResolvePromises(promiseArray) {
  if (promiseArray.length === 0) return;

  const currentPromise = promiseArray.shift();
  currentPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  recursivelyResolvePromises(promiseArray);
}

recursivelyResolvePromises([
  executeFirst(true),
  executeSecond(false),
  executeThird(true),
]);
