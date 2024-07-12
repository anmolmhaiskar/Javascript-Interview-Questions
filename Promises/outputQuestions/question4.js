function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  });
}

let promise = job(true);

promise
  .then((res) => {
    console.log(res); // Success
    return job(false);
  })
  .catch((res) => {
    console.log(res); // Failure
    return "Error caught";
  })
  .then((res) => {
    console.log(res); // Error Caught
    return job(true);
  })
  .catch((res) => {
    console.log(res);
  });

// NOTE: returning a value from .then function in the chain will be counted as success and it will make the code go to next then
