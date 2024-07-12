// execute the fuctions in order one after the other on the success of first -> second -> third

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

executeFirst(true)
  .then((val) => {
    console.log(val);
    executeSecond(true)
      .then((val) => {
        console.log(val);
        executeThird(false)
          .then((val) => {
            console.log(val);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// BETTER APPROACH

// return promise from each then by calling executingFunc() so that we can form a chain and we
// don't have to write function inside .then which is again like a promise hell
// this makes the code in a single hierarchy and there is no nesting like in the above approach
executeFirst(true)
  .then((val) => {
    console.log(val);
    return executeSecond(false);
  })
  .then((val) => {
    console.log(val);
    return executeThird(true);
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// then function which is chained after catch gets called no matter whatever happens in the above code
executeFirst(true)
  .then((val) => {
    console.log(val); //Execute first
    return executeSecond(false);
  })
  .then((val) => {
    console.log(val);
    return executeThird(true);
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err); // Failed to execute second Error: <Error Message>
  })
  .then((res) => {
    console.log("No matter what happens i will always be called"); // No matter what happens i will always be called
  });
