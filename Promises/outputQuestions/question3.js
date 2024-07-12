function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then((res) => {
    console.log("Success 1");
  })
  .then((res) => {
    console.log("Success 2");
  })
  .then((res) => {
    console.log("Success 3");
  })
  .catch((res) => {
    console.log("Failure 1"); //Failure 1
  })
  .then((res) => {
    console.log("Success after catch"); //Success after catch
  });

// NOTE: .then() chained after catch() always executes no matter what
