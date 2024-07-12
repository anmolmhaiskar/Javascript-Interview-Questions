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
    if (res !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
    return job(false);
  })
  .then((res) => {
    console.log(res);
    return job(true);
  })
  .catch((res) => {
    console.log(res);
    return "Error caught";
  })
  .then((res) => {
    console.log(res);
    //This is just a text hence considered as resolved promise..
    // if we would have "thrown" this error then it would have marked it as failed promise
    return new Error("test");

    // throw new Error("test"); //run this instead to see the difference in output
  })
  .then((res) => {
    console.log("Success: ", res.message);
  })
  .catch((res) => {
    console.log("Error: ", res.message);
  });

// OUTPUT:

// Success
// Defeat
// Failure
// Error caught
// Success:  test
